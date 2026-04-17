/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Image as Image, HeadSlot as HeadSlot, HeadMeta as HeadMeta, HeadLink as HeadLink, HtmlEmbed as HtmlEmbed, Input as Input, Select as Select } from "@webstudio-is/sdk-components-react";
import { Popover as Popover, PopoverTrigger as PopoverTrigger, PopoverContent as PopoverContent, Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";


      export const projectId = "32871946-9f7b-4b2e-861d-9afbed577e94";

      export const lastPublished = "2026-04-10T03:18:01.509Z";

      export const siteName = "Wallpaper时光机";

      export const breakpoints = [{"id":"oD2MxVo5GXq-_QRS-ZyRg"},{"id":"sxP_dvSOKozB79gOOp71l","maxWidth":600}];

      export const favIconAsset: string | undefined =
        "icon_2nyes6iaxcUOvIpd1PBgv.webp";

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        []

      export const pageBackgroundImageAssets: string[] =
        ["background-image_XSODI03e3Ia61QzCytqVX.webp"]

      
            

            export const CustomCode = () => {
              return (<></>);
            }
          

      const Page = (_props: { system: any; }) => {
let [search, set$search] = useVariableState<any>({"Next_Page":2,"Page":1,"Previous_Page":1,"output":[{"copyright":"示例版权文本","enddate":"示例日期","title":"示例标题","url":"https://cn.bing.com/th?id=OHR.NewYearFox_ZH-CN9312618796_UHD.jpg","views":"示例查看次数"}]})
let [size, set$size] = useVariableState<any>([{"size":"原图（UHD）","width":"","height":"","url":""},{"size":"4K4∶3（3840x2560）","width":"3840","height":"2560","url":"&w=3840&h=2560&rs=1&c=1"},{"size":"4K横屏（3840x2160）","width":"3840","height":"2160","url":"&w=3840&h=2160&rs=1&c=1"},{"size":"2K横屏（2560x1440）","width":"2560","height":"1440","url":"&w=2560&h=1440&rs=1&c=1"},{"size":"2K竖屏（1440x2560）","width":"1440","height":"2560","url":"&w=1440&h=2560&rs=1&c=1"},{"size":"1K横屏（1920x1080）","width":"1920","height":"1080","url":"&w=1920&h=1080&rs=1&c=1"},{"size":"1K竖屏（1080x1920）","width":"1080","height":"1920","url":"&w=1080&h=1920&rs=1&c=1"}])
let [urlquery, set$urlquery] = useVariableState<any>({"search":"","limit":100,"size":1})
return <body
className={`w-element c16q36l8 c15oxt91 c12sjyio c1rkcx2y c3ahk9b c1rd5476 cp4jn5r c1eh2421`}>
<HtmlEmbed
code={"<script type=\"text/javascript\">\n    document.addEventListener(\"plusready\", function () {\n        const getSignature = plus.navigator.getSignature().toLowerCase();\n        const Signature = [\n            \"a3427145358358a75e9b2a2b31d97d91893843f9\"\n        ];\n        if (!Signature.includes(getSignature)) {\n            alert(\"签名错误，当前签名为；\" + getSignature)\n            plus.runtime.quit();\n        }\n    });\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<script type=\"text/javascript\">\n\tdocument.addEventListener('plusready', function () {\n\t\tplus.key.addEventListener('backbutton', function () {\n\t\t\tvar webviews = plus.webview.all();\n\t\t\tplus.nativeUI.confirm('确定要退出应用并清理临时文件吗？', function (e) {\n\t\t\t\tif (e.index === 1) {\n\t\t\t\t\tclearAppCache(function () {\n\t\t\t\t\t\tplus.runtime.quit();\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}, {\n\t\t\t\ttitle: '提示',\n\t\t\t\tbuttons: ['取消', '确定']\n\t\t\t});\n\t\t}\n\t\t);\n\t});\n\tfunction clearAppCache(callback) {\n\t\tvar completedTasks = 0;\n\t\tvar totalTasks = 2;\n\t\tvar errorOccurred = false;\n\t\tfunction checkCompletion() {\n\t\t\tcompletedTasks++;\n\t\t\tif (completedTasks >= totalTasks) {\n\t\t\t\tif (errorOccurred) {\n\t\t\t\t\tconsole.log('部分清理任务执行过程中出现错误，但已完成所有可能的清理');\n\t\t\t\t} else {\n\t\t\t\t\tconsole.log('所有数据清理完成');\n\t\t\t\t}\n\t\t\t\tcallback();\n\t\t\t}\n\t\t}\n\t\tplus.cache.clear(function () {\n\t\t\tconsole.log('应用缓存清理完成');\n\t\t\tcheckCompletion();\n\t\t}, function (error) {\n\t\t\tconsole.error('应用缓存清理失败：', error.message);\n\t\t\terrorOccurred = true;\n\t\t\tcheckCompletion();\n\t\t});\n\t\tplus.io.requestFileSystem(plus.io.PUBLIC_DOWNLOADS, function (fs) {\n\t\t\tvar dirReader = fs.root.createReader();\n\t\t\tdirReader.readEntries(function (entries) {\n\t\t\t\tvar fileCount = entries.length;\n\t\t\t\tvar deletedCount = 0;\n\t\t\t\tif (fileCount === 0) {\n\t\t\t\t\tconsole.log('downloads文件夹为空，无需清理');\n\t\t\t\t\tcheckCompletion();\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tfunction deleteEntry(entry) {\n\t\t\t\t\tif (entry.isDirectory) {\n\t\t\t\t\t\tentry.removeRecursively(function () {\n\t\t\t\t\t\t\tconsole.log('删除目录完成：' + entry.name);\n\t\t\t\t\t\t\tdeletedCount++;\n\t\t\t\t\t\t\tif (deletedCount >= fileCount) {\n\t\t\t\t\t\t\t\tconsole.log('downloads文件夹清理完成');\n\t\t\t\t\t\t\t\tcheckCompletion();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}, function (error) {\n\t\t\t\t\t\t\tconsole.error('删除目录失败：' + entry.name + '，错误：' + error.message);\n\t\t\t\t\t\t\tdeletedCount++;\n\t\t\t\t\t\t\terrorOccurred = true;\n\t\t\t\t\t\t\tif (deletedCount >= fileCount) {\n\t\t\t\t\t\t\t\tcheckCompletion();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t} else {\n\t\t\t\t\t\tentry.remove(function () {\n\t\t\t\t\t\t\tconsole.log('删除文件完成：' + entry.name);\n\t\t\t\t\t\t\tdeletedCount++;\n\t\t\t\t\t\t\tif (deletedCount >= fileCount) {\n\t\t\t\t\t\t\t\tcheckCompletion();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}, function (error) {\n\t\t\t\t\t\t\tconsole.error('删除文件失败：' + entry.name + '，错误：' + error.message);\n\t\t\t\t\t\t\tdeletedCount++;\n\t\t\t\t\t\t\terrorOccurred = true;\n\t\t\t\t\t\t\tif (deletedCount >= fileCount) {\n\t\t\t\t\t\t\t\tcheckCompletion();\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tentries.forEach(deleteEntry);\n\t\t\t}, function (error) {\n\t\t\t\tconsole.error('读取downloads文件夹失败：', error.message);\n\t\t\t\terrorOccurred = true;\n\t\t\t\tcheckCompletion();\n\t\t\t});\n\t\t}, function (error) {\n\t\t\tconsole.error('获取downloads文件系统失败：', error.message);\n\t\t\terrorOccurred = true;\n\t\t\tcheckCompletion();\n\t\t});\n\t}\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<script type=\"text/javascript\">\n\tfunction saveImageToGallery(imageUrl) {\n\t\tplus.nativeUI.showWaiting('正在下载壁纸...');\n\t\tvar fileName = 'wallpaper_' + new Date().getTime() + '.jpg';\n\t\tvar filePath = '_downloads/' + fileName;\n\t\tvar downloadTask = plus.downloader.createDownload(imageUrl, {\n\t\t\tfilename: filePath,\n\t\t\tmethod: 'GET'\n\t\t}, function (download, status) {\n\t\t\tplus.nativeUI.closeWaiting();\n\t\t\tif (status === 200) {\n\t\t\t\tplus.gallery.save(download.filename, function () {\n\t\t\t\t\tconsole.log('壁纸保存到相册成功：' + download.filename);\n\t\t\t\t\tplus.nativeUI.toast('壁纸已保存到相册！');\n\t\t\t\t}, function (error) {\n\t\t\t\t\tconsole.error('壁纸保存到相册失败：', error.message);\n\t\t\t\t\tplus.nativeUI.alert('壁纸保存到相册失败，可能是权限问题。\\n错误代码：' + error.message, function () { }, '错误', '确定');\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tconsole.error('壁纸下载失败，状态码：' + status);\n\t\t\t\tplus.nativeUI.alert('壁纸下载失败，请检查网络连接能否访问cn.bing.com。', function () { }, '错误', '确定');\n\t\t\t}\n\t\t});\n\t\tdownloadTask.start();\n\t\tdownloadTask.addEventListener('statechanged', function (task, status) {\n\t\t\tif (task.state === 3) {\n\t\t\t\tvar percent = Math.round((task.downloadedSize / task.totalSize) * 100);\n\t\t\t\tconsole.log('下载进度：' + percent + '%');\n\t\t\t}\n\t\t});\n\t}\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<script type=\"text/javascript\">\n    document.addEventListener('DOMContentLoaded', function () {\n        const userAgent = navigator.userAgent;\n        if (userAgent.indexOf('Html5Plus') > -1) {\n            const shareImageBtns = document.querySelectorAll('.share-image-button');\n            const shareTextBtns = document.querySelectorAll('.share-text-button');\n            shareImageBtns.forEach(function (shareImageBtn) {\n                shareImageBtn.style.display = 'flex';\n                shareImageBtn.addEventListener('click', function () {\n                    startImageShare(shareImageBtn.getAttribute('image-link'));\n                });\n            });\n            shareTextBtns.forEach(function (shareTextBtn) {\n                shareTextBtn.style.display = 'flex';\n                shareTextBtn.addEventListener('click', function () {\n                    startText(shareTextBtn.getAttribute('share-content'), shareTextBtn.getAttribute('share-href'));\n                });\n            });\n        } else {\n            const qrcodeBtns = document.querySelectorAll('.qrcode-button');\n            qrcodeBtns.forEach(function (qrcodeBtn) {\n                qrcodeBtn.style.display = 'flex';\n            });\n        }\n    });\n    function startImageShare(netImageUrl) {\n        const localPath = \"_downloads/wallpaper_share_\" + new Date().getTime() + \".jpg\";\n        plus.nativeUI.showWaiting(\"正在准备分享...\");\n        const task = plus.downloader.createDownload(netImageUrl, {\n            filename: localPath\n        }, function (downloadFile, status) {\n            plus.nativeUI.closeWaiting();\n            if (status == 200) {\n                console.log(\"下载成功，本地路径：\" + downloadFile.filename);\n                shareLocalImage(downloadFile.filename);\n            } else {\n                plus.nativeUI.toast(\"网络异常，无法分享\");\n            }\n        });\n        task.start();\n    }\n    function shareLocalImage(pictures) {\n        plus.share.sendWithSystem({\n            type: \"image/*\",\n            pictures: [pictures]\n        }, function () {\n            plus.nativeUI.toast(\"分享成功\");\n        }, function (err) {\n            plus.nativeUI.toast(\"分享失败\");\n            console.log(\"分享错误：\", err);\n        });\n    }\n    function startText(content, href) {\n        plus.share.sendWithSystem({\n            type: 'text',\n            content: content,\n            href: href\n        }, function () {\n            plus.nativeUI.toast(\"分享成功\");\n        }, function (err) {\n            plus.nativeUI.toast(\"分享失败\");\n            console.log(\"分享错误：\", err);\n        });\n    }\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<script type=\"text/javascript\">\n  async function downloadCrossOriginImage(url) {\n    try {\n      const img = new Image();\n      img.crossOrigin = \"anonymous\";\n      await new Promise((resolve, reject) => {\n        img.onload = resolve;\n        img.onerror = reject;\n        img.src = url;\n      });\n      const canvas = document.createElement(\"canvas\");\n      canvas.width = img.naturalWidth;\n      canvas.height = img.naturalHeight;\n      canvas.getContext(\"2d\").drawImage(img, 0, 0);\n      const blob = await new Promise(resolve => canvas.toBlob(resolve, \"image/jpeg\"));\n      const objectUrl = URL.createObjectURL(blob);\n      const a = document.createElement(\"a\");\n      a.href = objectUrl;\n      a.download = \"wallpaper-\" + Date.now() + \".jpg\";\n      a.click();\n      URL.revokeObjectURL(objectUrl);\n    } catch (err) {\n      console.error(err);\n      window.open(url, '_blank');\n    }\n  }\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<script type=\"text/javascript\">\n  document.addEventListener('DOMContentLoaded', function () {\n    const downloadButtons = document.querySelectorAll('.download-button');\n    downloadButtons.forEach(button => {\n      button.addEventListener('click', function () {\n        const downloadLink = this.getAttribute('download-link');\n        if (downloadLink) {\n          const userAgent = navigator.userAgent;\n          if (userAgent.indexOf('Html5Plus') > -1) {\n            saveImageToGallery(downloadLink);\n          } else if (userAgent.indexOf('MicroMessenger') > -1) {\n            navigator.clipboard.writeText(downloadLink)\n              .then(() => {\n                console.log('链接已复制到剪贴板');\n              })\n              .catch(err => {\n                console.error('复制链接到剪贴板失败:', err);\n              });\n            alert('请在浏览器中打开该链接下载壁纸');\n          } else {\n            downloadCrossOriginImage(downloadLink, this);\n          }\n        }\n      });\n    });\n  });\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<link rel=\"stylesheet\" href=\"/npm/viewerjs/viewer.min.css\"\n    crossorigin=\"anonymous\">\n<script src=\"/npm/viewerjs/viewer.min.js\" crossorigin=\"anonymous\"></script>\n<script>\n    (() => {\n        document.addEventListener('DOMContentLoaded', function () {\n            const imageList = "+search?.output+";\n            const previewImages = document.querySelectorAll('.preview-image');\n            let viewerInstance = null;\n            document.addEventListener('click', function (e) {\n                const img = e.target.closest('.preview-image');\n                if (!img) return;\n                const currentIndex = Number(img.dataset.index);\n                if (!imageList[currentIndex]) {\n                    return;\n                }\n                const userAgent = navigator.userAgent;\n                if (viewerInstance) {\n                    viewerInstance.destroy();\n                    viewerInstance = null;\n                }\n                if (userAgent.includes('Html5Plus')) {\n                    const urls = imageList.map(item => item.url + '"+size?.[urlquery?.size]?.url+"');\n                    plus.nativeUI.previewImage(urls, {\n                        current: currentIndex\n                    });\n                } else {\n                    let container = document.getElementById('viewer-container');\n                    if (!container) {\n                        container = document.createElement('div');\n                        container.id = 'viewer-container';\n                        container.style.display = 'none';\n                        document.body.appendChild(container);\n                    } else {\n                        container.innerHTML = '';\n                    }\n                    imageList.forEach((item, index) => {\n                        const imgElement = document.createElement('img');\n                        imgElement.src = item.url + '"+size?.[urlquery?.size]?.url+"';\n                        imgElement.alt = item.title;\n                        imgElement.onerror = () => {\n                            imgElement.src = 'https://cn.bing.com/th?id=OHR.404_UHD.jpg';\n                            imgElement.alt = '图片未加载成功';\n                        };\n                        container.appendChild(imgElement);\n                    });\n                    viewerInstance = new Viewer(container, {\n                        viewed() {\n                            container.innerHTML = '';\n                        },\n                        navbar: true\n                    });\n                    viewerInstance.view(currentIndex);\n                }\n            });\n        });\n    })();\n</script>"}
clientOnly={true}
className={`w-html-embed`} />
<HeadSlot>
<HeadMeta
name={"viewport"}
content={"width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"} />
<HeadMeta
name={"color-scheme"}
content={"light only"} />
</HeadSlot>
<div
className={`w-element c1a5b44t cqh24re c3ahk9b cjcp89t c1rd5476 cp4jn5r c180pzta c3c4h76 cwlzcrb c1hhhw8u c1hgp8ez`}>
<div
className={`w-element c3ahk9b cjcp89t c1rd5476 cp4jn5r c3c4h76 cwlzcrb c180pzta`}>
<div
className={`w-element`}>
<Image
src={"/assets/icon_2nyes6iaxcUOvIpd1PBgv.webp"}
className={`w-image cit0ry8 c6re3fl ci9kji3 c1gyv5r c1boufn6 c94afts cnoex4l`} />
</div>
<div
className={`w-element cjcp89t c1rd5476 cp4jn5r c6a8nf8 cwlzcrb c3c4h76 cgrmcgs`}>
<h1
className={`w-element crz3jjw c18u4sn0 cay4v31`}>
{"Wallpaper时光机"}
</h1>
<h5
className={`w-element c18u4sn0 cay4v31`}>
{"Wallpaper时光机，收集每日壁纸。"}
<br />
{""}
</h5>
</div>
</div>
<div
className={`w-element cjcp89t cp4jn5r c3ahk9b c1rd5476`}>
<form
method={"get"}
encType={"text/plain"}
className={`w-element c1l7fn7t cp4jn5r cjcp89t c1cqlae7 c1eeps4y cwsk5yy c1rihdwx c1hdmpoj cq3120r c13l384m c3ahk9b c1dgl5z3 cnzcxi4 c11x6m83 c18s8acv czb4jv4 coyqu99 c1j9p1xu c1vepfxe`}>
<Select
name={"size"}
value={urlquery?.size}
className={`w-element cl5ymcv c1nc2et5 c18s8acv czb4jv4 coyqu99 c1j9p1xu c1gub7oy`}>
{Object.entries(
  // @ts-ignore
  size ?? {}
).map(([_key, collectionItem]: any) => {
  const collectionItemKey = Array.isArray(size) ? Number(_key) : _key;
  return (
<Fragment key={collectionItemKey}>
<option
label={collectionItem?.size}
value={collectionItemKey}
className={`w-element`} />
</Fragment>
)
})
}
</Select>
<Input
type={"number"}
placeholder={"页码"}
name={"page"}
value={search?.Page}
className={`w-element c8y3oes c149u1je c1nc2et5 crz3jjw c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu ${"searchBox"}`} />
<Input
type={"number"}
placeholder={"数量"}
name={"limit"}
value={urlquery?.limit}
className={`w-element c149u1je c1nc2et5 crz3jjw c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu ${"searchBox"}`} />
<Input
type={"text"}
placeholder={"搜索内容关键词"}
name={"search"}
value={urlquery?.search}
className={`w-element c1nc2et5 crz3jjw c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c3ahk9b c1hgp8ez ${"searchBox"}`} />
<button
type={"submit"}
className={`w-element c1gub7oy c12g0j59 czd1bxh c18s8acv czb4jv4 coyqu99 c1j9p1xu c1hgp8ez`}>
<Image
src={"/assets/magnifying-glass-solid-full_kyy7-sTgwGaPWJ-5DY1GS.svg"}
className={`w-image c97jkuu clum4mu c7eufua`} />
</button>
</form>
<HtmlEmbed
code={"<style type=\"text/css\">\n  .searchBox::placeholder {\n    color: rgba(59, 130, 246, 0.8);\n  }\n\n  .searchBox:focus {\n    outline: none;\n  }\n</style>"}
className={`w-html-embed`} />
</div>
</div>
<div
className={`w-element c1pi04ju c3ahk9b ch4lttr c1a5b44t c10t9lec cq3120r`}>
<div
className={`w-element c3ahk9b cjcp89t c1rd5476 cp4jn5r c180pzta c3c4h76 cwlzcrb c1alml9i c1hgp8ez`}>
<div
className={`w-element c3ahk9b cjcp89t c1rd5476 cp4jn5r c3c4h76 cwlzcrb c180pzta`}>
<div
className={`w-element`}>
<Image
src={"/assets/transparent_nlhZl1cGg5LTH3GeYNZyE.webp"}
className={`w-image c6re3fl ci9kji3 c1gyv5r c1boufn6 c94afts ccn1oii`} />
</div>
<div
className={`w-element cjcp89t c1rd5476 cp4jn5r c6a8nf8 cwlzcrb c3c4h76 cgrmcgs`}>
<h1
className={`w-element crz3jjw c18u4sn0 cay4v31`}>
{"Wallpaper时光机"}
</h1>
<h5
className={`w-element c18u4sn0 cay4v31`}>
{"Wallpaper时光机，收集每日壁纸。"}
<br />
{""}
</h5>
</div>
</div>
<div
className={`w-element cjcp89t cp4jn5r c3ahk9b c1rd5476`}>
<div
className={`w-element c1l7fn7t cp4jn5r cjcp89t c1cqlae7 c1eeps4y cwsk5yy c1rihdwx c1hdmpoj cq3120r c13l384m c3ahk9b c1dgl5z3 cdksavi`}>
<button
className={`w-element c1gub7oy c12g0j59 c12lfe7k cwsk5yy c1hdmpoj c18s8acv czb4jv4 coyqu99 c1j9p1xu c1hgp8ez`}>
<Image
src={"/assets/transparent_nlhZl1cGg5LTH3GeYNZyE.webp"}
className={`w-image c97jkuu clum4mu c7eufua`} />
</button>
</div>
</div>
</div>
<div
className={`w-element c1siftvj c180pzta c1c46zyi cp4jn5r c3ahk9b cjwwxu4 cwlzcrb c3c4h76 c1hgp8ez c1b9mvbd`}>
{Object.entries(
  // @ts-ignore
  search?.output ?? {}
).map(([_key, collectionItem_1]: any) => {
  const collectionItemKey_1 = Array.isArray(search?.output) ? Number(_key) : _key;
  return (
<Fragment key={collectionItemKey_1}>
<div
className={`w-element cjcp89t c1rd5476 cp4jn5r c6a8nf8 c14243yp cbrm5au c1rfngb2 cdbrifo czgoo5u c1ypp1ou c1hgp8ez`}>
<Image
src={collectionItem_1?.url + size?.[urlquery?.size]?.url}
loading={"lazy"}
alt={collectionItem_1?.title}
data-index={collectionItemKey_1}
className={`w-image c3ahk9b c1rfngb2 cdbrifo czgoo5u c1ypp1ou ${"preview-image"}`} />
<div
className={`w-element c12g0j59 c1vepfxe c3ahk9b cjcp89t c1rd5476 cp4jn5r c6a8nf8 ca6si8j ckg6r0n c1ypp1ou czgoo5u cwlzcrb c3c4h76 c1l9ehyu`}>
<h3
className={`w-element c3ahk9b crz3jjw c18u4sn0 cay4v31`}>
{collectionItem_1?.title}
</h3>
<p
className={`w-element c3ahk9b c18u4sn0 cay4v31`}>
{collectionItem_1?.copyright}
</p>
<a
href={"/detail?enddate="+collectionItem_1?.enddate}
className={`w-element c3ahk9b c1pi04ju ca6si8j`} />
<div
className={`w-element c3ahk9b cjcp89t c1rd5476 c15xqegm c3c4h76 cwlzcrb`}>
<Image
src={"/assets/calendar-regular-full_6pGzixUPxqi_pImHfkosZ.svg"}
className={`w-image clum4mu c97jkuu c7eufua`} />
<p
className={`w-element c18u4sn0 cay4v31`}>
{collectionItem_1?.enddate}
</p>
<Image
src={"/assets/eye-regular-full_PgJpsK0zE-Koi7cqBtmdu.svg"}
className={`w-image c97jkuu clum4mu c7eufua`} />
<p
className={`w-element c18u4sn0 cay4v31`}>
{collectionItem_1?.views}
</p>
</div>
</div>
<div
className={`w-element c1l7fn7t cjcp89t cyckhqq c1eeps4y cwsk5yy c1rihdwx c1hdmpoj ca6si8j c7pgw9v c1j98ua7`}>
<button
download-link={collectionItem_1?.url + size?.[urlquery?.size]?.url}
className={`w-element c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 c1ee89dn c1eeps4y c1rihdwx c1hgp8ez ${"download-button"}`}>
<Image
src={"/assets/download-solid-full_Hn6UAr-oM0I_Xzxo4FAF1.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
</button>
<button
type={"button"}
copy-text={collectionItem_1?.url + size?.[urlquery?.size]?.url}
className={`w-element c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 c11jzbl9 c1hgp8ez ${"copy-button"}`}>
<Image
src={"/assets/copy-regular-full_aP7JoJNuh21txJhcDwOu0.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
</button>
<Popover>
<PopoverTrigger>
<button
className={`w-element c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 cel0lyz cwsk5yy c1hdmpoj cxn3gcz c1hgp8ez ${"qrcode-button"}`}>
<Image
src={"/assets/qrcode-solid-full_Cx4YkOxpIy-AwQcBSp4qO.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
</button>
</PopoverTrigger>
<PopoverContent
className={`w-popover-content czsfm73 c1qmp4aw cum4qtd c1dxqucu c1w9szfg cjdyhdf`}>
<div
className={`w-element cjcp89t c1rd5476 ci1yxgc c6a8nf8 c3ahk9b c1rfngb2 cdbrifo czgoo5u c1ypp1ou cit0ry8 c1iwc9o c1hgp8ez`}>
<Image
src={"https://open-api.cli.im/cli-open-platform-service/v1/labelStyle/createWithKey?cliT=D3&cliD=https://wallpaper.mcyin.com/detail?enddate="+search?.output?.[0]?.enddate+"&api_key=CL3cc5708acdb29c14&return_file="}
loading={"lazy"}
className={`w-image c3ahk9b c1rfngb2 cdbrifo czgoo5u c1ypp1ou`} />
<p
className={`w-element c18u4sn0 cay4v31`}>
{"扫一扫"}
</p>
</div>
</PopoverContent>
</Popover>
<button
share-content={collectionItem_1?.title}
share-href={"https://wallpaper.mcyin.com/detail?enddate="+collectionItem_1?.enddate}
className={`w-element c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 cel0lyz cwsk5yy c1hdmpoj cxn3gcz c1hgp8ez ${"share-text-button"}`}>
<Image
src={"/assets/share-from-square-regular-full_2JjwQRSGOqc5i0ytj1BaK.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
</button>
</div>
</div>
</Fragment>
)
})
}
</div>
<div
className={`w-element cjcp89t c1rd5476 cp4jn5r c3ahk9b c6a8nf8 cwlzcrb c3c4h76`}>
<div
className={`w-element c1l7fn7t cp4jn5r cjcp89t c1eeps4y cwsk5yy c1rihdwx c1hdmpoj cq3120r c13l384m c3ahk9b`}>
<button
className={`w-element c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 c1eeps4y c1rihdwx c1alml9i c12lfe7k c1hgp8ez`}>
<Image
src={"/assets/transparent_nlhZl1cGg5LTH3GeYNZyE.webp"}
className={`w-image c97jkuu clum4mu c7eufua`} />
</button>
</div>
<div
className={`w-element c14243yp c3ahk9b cjcp89t c1rd5476 cp4jn5r cwlzcrb c3c4h76 c1alml9i c1hgp8ez`}>
<HtmlEmbed
code={"© <script>document.currentScript.replaceWith(new Date().getFullYear())</script> wallpaper.mcyin.com Wallpaper时光机"}
className={`w-html-embed cjcp89t c1rd5476 cp4jn5r crz3jjw`} />
<button
className={`w-element c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 c12lfe7k c1eeps4y c1rihdwx c10kpdgh`}>
<Image
src={"/assets/transparent_nlhZl1cGg5LTH3GeYNZyE.webp"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
</button>
</div>
</div>
</div>
<div
className={`w-element cjcp89t c1rd5476 cp4jn5r c1a5b44t c1oadhsh ckg6r0n c3ahk9b c6a8nf8 cwlzcrb c3c4h76`}>
<div
className={`w-element c1l7fn7t cp4jn5r cjcp89t c1eeps4y cwsk5yy c1rihdwx c1hdmpoj cq3120r c13l384m c3ahk9b`}>
<a
id={"previousPage"}
href={"/?size="+urlquery?.size+"&page="+search?.["Previous_Page"]+"&limit="+urlquery?.limit+"&search="+urlquery?.search}
className={`w-element c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 c1ee89dn c1eeps4y c1rihdwx cxn3gcz c1hgp8ez`}>
<Image
src={"/assets/angle-left-solid-full_99_07CnmDoyHqObCJkdSI.svg"}
className={`w-image c97jkuu clum4mu c7eufua`} />
</a>
<button
className={`w-element c1gub7oy c1tu2t1g c1u2pv8x c3f32g1 c9e9fbb c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 c11jzbl9`}>
{search?.Page}
</button>
<a
id={"nextPage"}
href={"/?size="+urlquery?.size+"&page="+search?.["Next_Page"]+"&limit="+urlquery?.limit+"&search="+urlquery?.search}
className={`w-element c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 cel0lyz cwsk5yy c1hdmpoj cxn3gcz c1hgp8ez`}>
<Image
src={"/assets/angle-right-solid-full_ejlAT99vlS8j38sPNCcpW.svg"}
className={`w-image c97jkuu clum4mu c7eufua`} />
</a>
<HtmlEmbed
code={"<script type=\"text/javascript\">\n  document.addEventListener('DOMContentLoaded', function () {\n    const previousPage = document.getElementById('previousPage');\n    const nextPage = document.getElementById('nextPage');\n    if ("+search?.["Previous_Page"]+" < "+search?.Page+") {\n      previousPage.style.display = 'inline';\n    }\n    if ("+search?.["Next_Page"]+" > "+search?.Page+") {\n      nextPage.style.display = 'inline';\n    }\n  });\n</script>"}
clientOnly={true}
className={`w-html-embed`} />
</div>
<div
className={`w-element c1vepfxe c14243yp c3ahk9b cjcp89t c1rd5476 cp4jn5r cwlzcrb c3c4h76 c1hgp8ez`}>
<HtmlEmbed
code={"© <script>document.currentScript.replaceWith(new Date().getFullYear())</script> wallpaper.mcyin.com Wallpaper时光机"}
className={`w-html-embed cjcp89t c1rd5476 cp4jn5r crz3jjw`} />
<Dialog>
<DialogTrigger>
<button
id={"aboutBtn"}
className={`w-element c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 c12lfe7k c10kpdgh`}>
<Image
src={"/assets/gear-solid-full_0a2baqPKXxqp028GCQ12o.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
</button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay c1a5b44t cc38u8d cdsfmpq c1fcrez1 cysgfvr cjcp89t c15ndkzq cp4jn5r cit5cfb`}>
<DialogContent
className={`w-dialog-content c3ahk9b c136bqtx c1m3fcc4 c1vepfxe c14243yp ckr14lr cjcp89t c1c46zyi cp4jn5r c16mp2wf cq3120r c10t9lec ch4lttr c1l9ehyu`}>
<div
className={`w-element c3ahk9b cjcp89t c1c46zyi c157w5f8 c3c4h76 cwlzcrb c180pzta c1cqlae7 c1hgp8ez`}>
<div
className={`w-element cjcp89t c1rd5476 cp4jn5r c3c4h76 cwlzcrb c180pzta c6a8nf8 c1vs9afz c1hgp8ez`}>
<div
className={`w-element cjcp89t c1rd5476 cp4jn5r c3c4h76 cwlzcrb c180pzta`}>
<div
className={`w-element`}>
<Image
src={"/assets/icon_2nyes6iaxcUOvIpd1PBgv.webp"}
className={`w-image cit0ry8 c1rfngb2 cdbrifo czgoo5u c1ypp1ou c1tdickn c1m7sov0`} />
</div>
<div
className={`w-element cjcp89t c1rd5476 cp4jn5r c6a8nf8 cwlzcrb c3c4h76`}>
<h2
className={`w-element crz3jjw c18u4sn0 cay4v31`}>
{"Wallpaper时光机"}
</h2>
<h6
className={`w-element c18u4sn0 cay4v31`}>
{"Wallpaper时光机，收集每日壁纸。"}
<br />
{""}
</h6>
</div>
</div>
<div
className={`w-element cjcp89t c6a8nf8 c1rd5476 cp4jn5r cvurj56 c1iwc9o c1rfngb2 cdbrifo czgoo5u c1ypp1ou c168id4u c1hgp8ez`}>
<Image
src={"https://open-api.cli.im/cli-open-platform-service/v1/labelStyle/createWithKey?cliT=D3&cliD=https://wallpaper.mcyin.com&api_key=CL3cc5708acdb29c14&return_file="}
className={`w-image c3ahk9b c1rfngb2 cdbrifo czgoo5u c1ypp1ou`} />
</div>
</div>
<div
className={`w-element cjcp89t c1rd5476 ci1yxgc c6a8nf8 c3c4h76 cwlzcrb c1vs9afz c1hgp8ez`}>
<h3
className={`w-element crz3jjw c18u4sn0 cay4v31`}>
{"联系我们"}
</h3>
<button
id={"feedbackWallpaperUpdateDelay"}
className={`w-element c1gub7oy c19ye7wl c1iyxo74 c1ryb23c c1vomsuo c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 c1ee89dn c1eeps4y c1rihdwx cwsk5yy c1hdmpoj cjcp89t c3ahk9b c1rd5476 cp4jn5r c3c4h76 cwlzcrb`}>
<Image
src={"/assets/comment-regular-full_JyWU2gI_Nd8lvx4m6hz0w.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cxnf9wh c3cdaew`}>
{"反馈壁纸更新不及时"}
</span>
</button>
<button
link-href={"https://my.feishu.cn/base/VjCWbqP2NahZNLs9D5Uc1D54nFT"}
className={`w-element c1gub7oy c19ye7wl c1iyxo74 c1ryb23c c1vomsuo c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 cjsimt8 c1eeps4y c1rihdwx cwsk5yy c1hdmpoj cjcp89t c3ahk9b c1rd5476 cp4jn5r c3c4h76 cwlzcrb ${"link-button"}`}>
<Image
src={"/assets/link-solid-full_O7To9spUqoktR_FdYQXPt.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cxnf9wh c3cdaew`}>
{"获取壁纸表格"}
</span>
</button>
<button
link-href={"https://gitcode.com/mcyin-wallpaper"}
className={`w-element c1gub7oy c19ye7wl c1iyxo74 c1ryb23c c1vomsuo c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 c11jzbl9 c1eeps4y c1rihdwx cwsk5yy c1hdmpoj cjcp89t c3ahk9b c1rd5476 cp4jn5r c3c4h76 cwlzcrb ${"link-button"}`}>
<Image
src={"/assets/link-solid-full_O7To9spUqoktR_FdYQXPt.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cxnf9wh c3cdaew`}>
{"GitCode"}
</span>
</button>
<button
link-href={"https://api.mcyin.com/docs/wallpaper"}
className={`w-element c1gub7oy c19ye7wl c1iyxo74 c1ryb23c c1vomsuo c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 cvxspf0 c1eeps4y c1rihdwx cwsk5yy c1hdmpoj cjcp89t c3ahk9b c1rd5476 cp4jn5r c3c4h76 cwlzcrb ${"link-button"}`}>
<Image
src={"/assets/link-solid-full_O7To9spUqoktR_FdYQXPt.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cxnf9wh c3cdaew`}>
{"壁纸API服务"}
</span>
</button>
</div>
<div
id={"appDownload"}
className={`w-element cjcp89t c1rd5476 ci1yxgc c6a8nf8 c3c4h76 cwlzcrb c1vs9afz c1hgp8ez`}>
<h3
className={`w-element crz3jjw c18u4sn0 cay4v31`}>
{"应用下载"}
</h3>
<button
link-href={"https://wallpaper.mcyin.com/android-apk"}
className={`w-element c1gub7oy c19ye7wl c1iyxo74 c1ryb23c c1vomsuo c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 cel0lyz c1eeps4y c1rihdwx cwsk5yy c1hdmpoj cjcp89t c3ahk9b c1rd5476 cp4jn5r c3c4h76 cwlzcrb ${"link-button"}`}>
<Image
src={"/assets/android-brands-solid-full_AJQ9yfZ7ECakC8CufeDO2.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cxnf9wh c3cdaew`}>
{"Android.apk 下载"}
</span>
</button>
<button
link-href={"https://wallpaper.mcyin.com/windows-nsis-exe"}
className={`w-element c1gub7oy c19ye7wl c1iyxo74 c1ryb23c c1vomsuo c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 c1tik0zx c1eeps4y c1rihdwx cwsk5yy c1hdmpoj cjcp89t c3ahk9b c1rd5476 cp4jn5r c3c4h76 cwlzcrb ${"link-button"}`}>
<Image
src={"/assets/windows-brands-solid-full_tOmFB533xOlALzJnHEFNm.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cxnf9wh c3cdaew`}>
{"Windows 安装版.exe 下载"}
</span>
</button>
<button
link-href={"https://wallpaper.mcyin.com/windows-portable-exe"}
className={`w-element c1gub7oy c19ye7wl c1iyxo74 c1ryb23c c1vomsuo c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 ccy5mty c1eeps4y c1rihdwx cwsk5yy c1hdmpoj cjcp89t c3ahk9b c1rd5476 cp4jn5r c3c4h76 cwlzcrb ${"link-button"}`}>
<Image
src={"/assets/windows-brands-solid-full_tOmFB533xOlALzJnHEFNm.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cxnf9wh c3cdaew`}>
{"Windows 免安装版.exe 下载"}
</span>
</button>
</div>
<div
id={"versionInfoElement"}
className={`w-element cxn3gcz c1rd5476 ci1yxgc c6a8nf8 c3c4h76 cwlzcrb c1vs9afz c1hgp8ez`}>
<h3
className={`w-element crz3jjw c18u4sn0 cay4v31`}>
{"版本信息"}
</h3>
<div
id={"androidVersionInfo"}
className={`w-element cxn3gcz c1rd5476 ci1yxgc c6a8nf8 c3c4h76 cwlzcrb c3ahk9b`}>
<h5
id={"androidCurrentVersion"}
className={`w-element crz3jjw c18u4sn0 cay4v31`}>
{"0.0.0"}
</h5>
<button
id={"androidCheckUpdateButton"}
className={`w-element c1gub7oy c19ye7wl c1iyxo74 c1ryb23c c1vomsuo c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 cel0lyz c1eeps4y c1rihdwx cwsk5yy c1hdmpoj cjcp89t c3ahk9b c1rd5476 cp4jn5r c3c4h76 cwlzcrb`}>
<Image
src={"/assets/android-brands-solid-full_AJQ9yfZ7ECakC8CufeDO2.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cxnf9wh c3cdaew`}>
{"检查应用更新"}
</span>
</button>
</div>
</div>
</div>
<HtmlEmbed
code={"<script type=\"text/javascript\">\n\tdocument.addEventListener('DOMContentLoaded', function () {\n\t\tconst linkButtons = document.querySelectorAll('.link-button');\n\t\tlinkButtons.forEach(button => {\n\t\t\tbutton.addEventListener('click', function () {\n\t\t\t\tconst linkHref = this.getAttribute('link-href');\n\t\t\t\tif (linkHref) {\n\t\t\t\t\tconst userAgent = navigator.userAgent;\n\t\t\t\t\tif (userAgent.indexOf('Html5Plus') > -1) {\n\t\t\t\t\t\tplus.runtime.openURL(linkHref, function (err) {\n\t\t\t\t\t\t\tconsole.error('打开失败：', err.message);\n\t\t\t\t\t\t\tnavigator.clipboard.writeText(linkHref)\n\t\t\t\t\t\t});\n\t\t\t\t\t} else {\n\t\t\t\t\t\twindow.open(linkHref, '_blank');\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\t});\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<script type=\"text/javascript\">\n    document.addEventListener(\"DOMContentLoaded\", function () {\n        document.getElementById(\"feedbackWallpaperUpdateDelay\").addEventListener(\"click\", function () {\n            this.disabled = true;\n            fetch('https://api.mcyin.com/wallpaper/update')\n                .then(response => response.json())\n                .then(data => {\n                    console.log(JSON.stringify(data));\n                    if (data.rowNum_list.some(rowNum => rowNum !== 0)) {\n                        alert(\"壁纸更新成功\");\n                        this.disabled = false;\n                    } else {\n                        alert(\"没有可更新的壁纸\");\n                        this.disabled = false;\n                    }\n                })\n                .catch(error => {\n                    console.error('Error:', error);\n                    alert(\"壁纸更新失败，请稍后重试\");\n                    this.disabled = false;\n                });\n        });\n    });\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<script type=\"text/javascript\">\n    document.addEventListener('DOMContentLoaded', function () {\n        const userAgent = navigator.userAgent;\n        if (userAgent.indexOf('Html5Plus') > -1 && userAgent.indexOf('Android') > -1) {\n            document.getElementById(\"appDownload\").style.display = 'none';\n            document.getElementById(\"versionInfoElement\").style.display = 'flex';\n            document.getElementById(\"androidVersionInfo\").style.display = 'flex';\n            document.getElementById(\"androidCurrentVersion\").innerHTML = plus.runtime.version;\n            function androidCompareVersion(a, b) {\n                const aParts = a.split('.').map(part => parseInt(part) || 0);\n                const bParts = b.split('.').map(part => parseInt(part) || 0);\n                const maxLength = Math.max(aParts.length, bParts.length);\n                for (let i = 0; i < maxLength; i++) {\n                    const aPart = aParts[i] || 0;\n                    const bPart = bParts[i] || 0;\n                    if (aPart > bPart) return 1;\n                    if (aPart < bPart) return -1;\n                }\n                return 0;\n            }\n            document.getElementById(\"androidCheckUpdateButton\").addEventListener(\"click\", function () {\n                this.disabled = true;\n                fetch('https://wallpaper.mcyin.com/version.json')\n                    .then(response => {\n                        if (!response.ok) {\n                            throw new Error(`HTTP error! status: ${response.status}`);\n                        }\n                        return response.json();\n                    })\n                    .then(data => {\n                        if (androidCompareVersion(data.android.name, plus.runtime.version) > 0) {\n                            if (confirm('发现新版本；' + data.android.name + '，前往下载更新？')) {\n                                plus.runtime.openURL('https://wallpaper.mcyin.com/android-apk');\n                                this.disabled = false;\n                            }\n                            else {\n                                this.disabled = false;\n                            }\n                        } else {\n                            alert('当前版本已是最新版；' + data.android.name);\n                            this.disabled = false;\n                        }\n                    })\n                    .catch(error => {\n                        console.error('检查更新失败:', error);\n                        if (error.message.includes('HTTP error')) {\n                            alert('服务器响应错误，请稍后重试');\n                            this.disabled = false;\n                        } else {\n                            alert('检查更新失败，请检查网络连接后重试');\n                            this.disabled = false;\n                        }\n                    });\n            });\n        }\n    });\n</script>"}
className={`w-html-embed`} />
<DialogClose
className={`w-close-button ca6si8j c1j98ua7 c7pgw9v c1oye3ih cjcp89t c1rd5476 cp4jn5r c12lfe7k c18s8acv czb4jv4 coyqu99 c1j9p1xu cjdyhdf c1hgp8ez c1by2qzo c1v30ll2`}>
<Image
src={"/assets/xmark-solid-full_SHMDTj6mYTMUtAyl1OfJS.svg"}
alt={""}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
</DialogClose>
</DialogContent>
</DialogOverlay>
</Dialog>
</div>
</div>
<HtmlEmbed
code={"<script type=\"text/javascript\">\n  document.addEventListener('DOMContentLoaded', function () {\n    const copyButtons = document.querySelectorAll('.copy-button');\n    copyButtons.forEach(button => {\n      button.addEventListener('click', function () {\n        const textToCopy = this.getAttribute('copy-text');\n        if (textToCopy) {\n          navigator.clipboard.writeText(textToCopy)\n            .then(() => {\n              console.log('复制成功');\n            })\n            .catch(err => {\n              console.error('复制失败:', err);\n            });\n        }\n      });\n    });\n  });\n</script>"}
className={`w-html-embed`} />
<div
id={"page-loader"}
className={`w-element cjcp89t c1rd5476 cp4jn5r c6a8nf8 c3ahk9b c1pi04ju c1a5b44t cnqqebv cqh24re ckg6r0n cy8k5j6 c1y01spr cdb3q6i c1fl4uzl c1i5ppm1 c4hgole c5ninop c1jp9iwn c1b1945k czs6mmf`}>
<Image
src={"/assets/loading_xYq8FbvnWGy81janBwRAs.svg"}
className={`w-image c168id4u cf3tgqi`} />
<HtmlEmbed
clientOnly={true}
code={"<script type=\"text/javascript\">\n    document.addEventListener('DOMContentLoaded', function () {\n        setTimeout(() => {\n            document.getElementById('page-loader').style.display = 'none';\n        }, 100);\n    });\n</script>"}
className={`w-html-embed`} />
</div>
</body>
}


      export { Page }
    