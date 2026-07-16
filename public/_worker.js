export default {
  getFormattedDate() {
    const currentDate = new Date();
    const utcOffset = 8 * 60;
    const chinaTime = new Date(currentDate.getTime() + utcOffset * 60 * 1000);
    const year = chinaTime.getUTCFullYear();
    const month = String(chinaTime.getUTCMonth() + 1).padStart(2, '0');
    const day = String(chinaTime.getUTCDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  },
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
  async fetch(request, env) {
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
        const searchParams = new URLSearchParams(url.search);
        const params = {};
        for (const [key, value] of searchParams) {
          params[key] = value;
        }
        const newIndexJsUrl = `${index}?${searchParams.toString()}`;
        const newRoutingJsUrl = `${routing}?${searchParams.toString()}" crossorigin="anonymous" `;
        const updatedHtml = htmlData.replace(index, newIndexJsUrl).replace(routing, newRoutingJsUrl);
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
        const searchParams = new URLSearchParams(url.search);
        const formattedDate = this.getFormattedDate();
        if (!searchParams.has('enddate')) {
          searchParams.set('enddate', formattedDate);
        }
        const params = {};
        for (const [key, value] of searchParams) {
          params[key] = value;
        }
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
        const updatedJs = jsData.replace(new RegExp(index, 'g'), `${index}?${searchParams.toString()}`).replace(new RegExp(detail, 'g'), `${detail}?${searchParams.toString()}`);
        const headers = new Headers(jsResponse.headers);
        headers.set('Content-Type', 'application/javascript; charset=utf-8');
        return new Response(updatedJs, { headers });
      } catch (error) {
        return this.handleError(error, 'Routing JS processing');
      }
    }
    if (pathname === '/assets/entries/' + index) {
      try {
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
        const jsRequest = new Request(new URL('/assets/entries/' + index, request.url));
        const jsResponse = await env.ASSETS.fetch(jsRequest);
        const jsData = await jsResponse.text();
        let jsDataReplace = jsData;
        const replacement = JSON.stringify(responseData);
        jsDataReplace = jsDataReplace.replace(/\{Next_Page:\s*\d+,\s*Page:\s*\d+,\s*Previous_Page:\s*\d+,\s*output:\s*\[.*?\]\s*\}/s, replacement);
        jsDataReplace = jsDataReplace.replace(/search:"",limit:100,size:1/g, `search:"${search}",limit:${limitParam},size:${sizeParam}`);
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
        const jsRequest = new Request(new URL('/assets/entries/' + detail, request.url));
        const jsResponse = await env.ASSETS.fetch(jsRequest);
        const jsData = await jsResponse.text();
        let jsDataReplace = jsData;
        const replacement = JSON.stringify(responseData);
        jsDataReplace = jsDataReplace.replace(/\{Next_Page:\s*\d+,\s*Page:\s*\d+,\s*Previous_Page:\s*\d+,\s*output:\s*\[.*?\]\s*\}/s, replacement);
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
    return env.ASSETS.fetch(request);
  }
}