export default {
  // 封装函数
  getFormattedDate() {
    const currentDate = new Date();
    const utcOffset = 8 * 60; // 中国时区UTC+8，单位：分钟
    const chinaTime = new Date(currentDate.getTime() + utcOffset * 60 * 1000);
    const year = chinaTime.getUTCFullYear();
    const month = String(chinaTime.getUTCMonth() + 1).padStart(2, '0');
    const day = String(chinaTime.getUTCDate()).padStart(2, '0');

    return `${year}${month}${day}`;
  },

  // 统一错误处理函数
  handleError(error, context = '') {
    console.error(`[${context}] Error:`, error);
    console.error(`[${context}] Error stack:`, error.stack);
    return new Response(JSON.stringify({
      error: 'Internal server error',
      message: error.message,
      context: context
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  },

  // 转义正则表达式特殊字符
  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  },

  async wallpaperApiWorker(env, mode, body) {
    try {
      const wallpaperApiWorkerRequest = new Request('https://wallpaper-api/wallpaper/' + mode, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const response = await env.wallpaperApiWorker.fetch(wallpaperApiWorkerRequest);
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      return response;
    } catch (error) {
      console.error(`[wallpaperApiWorker] Error:`, error);
      throw error;
    }
  },

  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;
    const index = env.INDEX_JS;
    const detail = env.DETAIL_JS;
    const routing = env.ROUTING_JS;
    if (pathname === '/') {
      try {
        const htmlRequest = new Request(new URL('/', request.url));
        const htmlResponse = await env.ASSETS.fetch(htmlRequest);
        const htmlData = await htmlResponse.text();
        // 提取所有URL参数
        const searchParams = new URLSearchParams(url.search);
        const params = {};
        for (const [key, value] of searchParams) {
          params[key] = value;
        }
        // 构建新的JS URL
        const newIndexJsUrl = `${index}?${searchParams.toString()}`;
        const newRoutingJsUrl = `${routing}?${searchParams.toString()}" crossorigin="anonymous" `;
        // 替换HTML中的JS URL
        const updatedHtml = htmlData.replace(index, newIndexJsUrl).replace(routing, newRoutingJsUrl);
        // 返回更新后的HTML
        const headers = new Headers(htmlResponse.headers);
        headers.set('Content-Type', 'text/html; charset=utf-8');
        return new Response(updatedHtml, { headers });
      } catch (error) {
        return this.handleError(error, 'Root path processing');
      }
    }

    if (pathname === '/detail' || pathname === '/detail/') {
      try {
        const htmlRequest = new Request(new URL('/detail/', request.url));
        const htmlResponse = await env.ASSETS.fetch(htmlRequest);
        const htmlData = await htmlResponse.text();
        // 提取所有URL参数
        const searchParams = new URLSearchParams(url.search);
        // 如果没有enddate参数，默认值为当前时间的八位数字字符串
        const formattedDate = this.getFormattedDate();
        if (!searchParams.has('enddate')) {
          searchParams.set('enddate', formattedDate);
        }
        const params = {};
        for (const [key, value] of searchParams) {
          params[key] = value;
        }
        // 构建新的JS URL
        const newDetailJsUrl = `${detail}?${searchParams.toString()}`;
        const newRoutingJsUrl = `${routing}?${searchParams.toString()}" crossorigin="anonymous" `;

        const enddate = url.searchParams.get('enddate') || formattedDate;
        const mode = "detail";
        const body = {
          "enddate": parseInt(enddate)
        };
        const response = await this.wallpaperApiWorker(env, mode, body);
        const responseData = await response.json();
        const detailCopyright = responseData.output[0].copyright;
        const detailEndDate = responseData.output[0].enddate;
        const detailTitle = responseData.output[0].title;
        const detailUrl = responseData.output[0].url;
        const detailViews = responseData.output[0].views;

        // 替换HTML中的JS URL与数据项
        // 使用对象映射替换链式replace调用，提高可读性和可维护性
        const replacements = {
          [detail]: newDetailJsUrl,
          [routing]: newRoutingJsUrl,
          '示例标题': detailTitle,
          'https://cn.bing.com/th?id=OHR.NewYearFox_ZH-CN9312618796_UHD.jpg': detailUrl,
          '示例查看次数': detailViews,
          '示例版权文本': detailCopyright,
          '示例日期': detailEndDate
        };

        let updatedHtml = htmlData;
        for (const [search, replace] of Object.entries(replacements)) {
          updatedHtml = updatedHtml.replace(new RegExp(this.escapeRegExp(search), 'g'), replace);
        }
        // 返回更新后的HTML
        const headers = new Headers(htmlResponse.headers);
        headers.set('Content-Type', 'text/html; charset=utf-8');
        return new Response(updatedHtml, { headers });
      } catch (error) {
        return this.handleError(error, 'Detail path processing');
      }
    }

    if (pathname === '/assets/entries/' + routing) {
      try {
        const jsRequest = new Request(new URL('/assets/entries/' + routing, request.url))
        const jsResponse = await env.ASSETS.fetch(jsRequest);
        const jsData = await jsResponse.text();
        const searchParams = new URLSearchParams(url.search);
        const params = {};
        for (const [key, value] of searchParams) {
          params[key] = value;
        }
        // 替换HTML中的JS URL
        const updatedJs = jsData.replace(new RegExp(index, 'g'), `${index}?${searchParams.toString()}`).replace(new RegExp(detail, 'g'), `${detail}?${searchParams.toString()}`);

        // 返回更新后的JS
        const headers = new Headers(jsResponse.headers);
        headers.set('Content-Type', 'application/javascript; charset=utf-8');
        return new Response(updatedJs, { headers });
      } catch (error) {
        return this.handleError(error, 'Routing JS processing');
      }
    }

    if (pathname === '/assets/entries/' + index) {
      try {
        // 统一参数转换和默认值处理
        const parseParam = (value, defaultVal) => {
          const parsed = parseInt(value, 10);
          return isNaN(parsed) ? defaultVal : parsed;
        };
        const search = url.searchParams.get('search') || '';
        const limitParam = Math.max(1, Math.min(100, parseParam(url.searchParams.get('limit'), 30)));
        const pageParam = Math.max(1, parseParam(url.searchParams.get('page'), 1));
        const sizeParam = Math.max(0, Math.min(6, parseParam(url.searchParams.get('size'), 1)));
        const mode = "search";
        const body = {
          "search": String(search),
          "limit": limitParam,
          "page": pageParam
        };

        const response = await this.wallpaperApiWorker(env, mode, body);
        let responseData;
        try {
          responseData = await response.json();
        } catch (jsonError) {
          console.error('JSON parsing error:', jsonError);
          responseData = await response.text();
        }
        //获取当前原始数据
        const jsRequest = new Request(new URL('/assets/entries/' + index, request.url));
        const jsResponse = await env.ASSETS.fetch(jsRequest);
        const jsData = await jsResponse.text();
        // 使用正则表达式一次性替换占位符，使用更灵活的匹配方式
        let jsDataReplace = jsData;
        const replacement = JSON.stringify(responseData);
        jsDataReplace = jsDataReplace.replace(/\{Next_Page:\s*\d+,\s*Page:\s*\d+,\s*Previous_Page:\s*\d+,\s*output:\s*\[.*?\]\s*\}/s, replacement);
        // {search:"",limit:100,size:1},替换成{search:"searchParam",limit:limitParam,size:sizeParam}
        jsDataReplace = jsDataReplace.replace(/search:"",limit:100,size:1/g, `search:"${search}",limit:${limitParam},size:${sizeParam}`);
        //返回替换后的js响应头数据
        const headers = new Headers(jsResponse.headers);
        headers.set('Content-Type', 'application/javascript; charset=utf-8');
        const jsResponseReplace = new Response(jsDataReplace, {
          headers: headers
        });

        return jsResponseReplace;

      } catch (error) {
        console.error('API request error:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    if (pathname === '/assets/entries/' + detail) {
      try {
        // 统一参数转换和默认值处理
        // 如果没有enddate参数 把当前时间转换为八位数字
        const formattedDate = this.getFormattedDate();
        const enddate = url.searchParams.get('enddate') || formattedDate;
        const mode = "detail";
        const body = {
          "enddate": parseInt(enddate)
        };

        const response = await this.wallpaperApiWorker(env, mode, body);
        let responseData;
        try {
          responseData = await response.json();
        } catch (jsonError) {
          console.error('JSON parsing error:', jsonError);
          responseData = await response.text();
        }
        //获取当前原始数据
        const jsRequest = new Request(new URL('/assets/entries/' + detail, request.url));
        const jsResponse = await env.ASSETS.fetch(jsRequest);
        const jsData = await jsResponse.text();
        // 使用正则表达式一次性替换占位符，使用更灵活的匹配方式
        let jsDataReplace = jsData;
        // 尝试多种匹配方式
        const replacement = JSON.stringify(responseData);
        // 方式1: 完整结构匹配
        jsDataReplace = jsDataReplace.replace(/\{Next_Page:\s*\d+,\s*Page:\s*\d+,\s*Previous_Page:\s*\d+,\s*output:\s*\[.*?\]\s*\}/s, replacement);
        //返回替换后的js响应头数据
        const headers = new Headers(jsResponse.headers);
        headers.set('Content-Type', 'application/javascript; charset=utf-8');
        const jsResponseReplace = new Response(jsDataReplace, {
          headers: headers
        });

        return jsResponseReplace;

      } catch (error) {
        console.error('API request error:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // 处理其他路径返回原始响应
    return env.ASSETS.fetch(request);
  }
}