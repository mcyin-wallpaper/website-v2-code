/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { HeadSlot as HeadSlot, HeadMeta as HeadMeta, Image as Image, HeadLink as HeadLink, HtmlEmbed as HtmlEmbed } from "@webstudio-is/sdk-components-react";
import { Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";


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

      

      const Page = (_props: { system: any; }) => {
let [search, set$search] = useVariableState<any>({"Next_Page":2,"Page":1,"Previous_Page":1,"output":[{"copyright":"示例版权文本","enddate":"示例日期","title":"示例标题","url":"https://cn.bing.com/th?id=OHR.NewYearFox_ZH-CN9312618796_UHD.jpg","views":"示例查看次数"}]})
let [size, set$size] = useVariableState<any>([{"size":"原图（UHD）","width":"","height":"","url":""},{"size":"4K4∶3（3840x2560）","width":"3840","height":"2560","url":"&w=3840&h=2560&rs=1&c=1"},{"size":"4K横屏（3840x2160）","width":"3840","height":"2160","url":"&w=3840&h=2160&rs=1&c=1"},{"size":"2K横屏（2560x1440）","width":"2560","height":"1440","url":"&w=2560&h=1440&rs=1&c=1"},{"size":"2K竖屏（1440x2560）","width":"1440","height":"2560","url":"&w=1440&h=2560&rs=1&c=1"},{"size":"1K横屏（1920x1080）","width":"1920","height":"1080","url":"&w=1920&h=1080&rs=1&c=1"},{"size":"1K竖屏（1080x1920）","width":"1080","height":"1920","url":"&w=1080&h=1920&rs=1&c=1"}])
return <body
className={`w-element c16q36l8 c15oxt91 c12sjyio c1rkcx2y c3ahk9b c1rd5476 cp4jn5r c1eh2421`}>
<HtmlEmbed
code={"<script type=\"text/javascript\">\n    document.addEventListener(\"plusready\", function () {\n        const getSignature = plus.navigator.getSignature().toLowerCase();\n        const Signature = [\n            \"a3427145358358a75e9b2a2b31d97d91893843f9\"\n        ];\n        if (!Signature.includes(getSignature)) {\n            alert(\"签名错误，当前签名为；\" + getSignature)\n            plus.runtime.quit();\n        }\n    });\n</script>"}
className={`w-html-embed`} />
<HtmlEmbed
code={"<script type=\"text/javascript\">\n\tdocument.addEventListener('plusready', function () {\n\t\tplus.key.addEventListener('backbutton', function () {\n\t\t\twindow.history.back();\n\t\t});\n\t});\n</script>"}
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
code={"<link rel=\"stylesheet\" href=\"/npm/viewerjs/viewer.min.css\"\n    crossorigin=\"anonymous\">\n<script src=\"/npm/viewerjs/viewer.min.js\" crossorigin=\"anonymous\"></script>\n<script>\n    (() => {\n        document.addEventListener('DOMContentLoaded', function () {\n            const imageList = "+search?.output+";\n            const previewImages = document.querySelectorAll('.preview-image');\n            let viewerInstance = null;\n            document.addEventListener('click', function (e) {\n                const img = e.target.closest('.preview-image');\n                if (!img) return;\n                const currentIndex = Number(img.dataset.index);\n                if (!imageList[currentIndex]) {\n                    return;\n                }\n                const userAgent = navigator.userAgent;\n                if (viewerInstance) {\n                    viewerInstance.destroy();\n                    viewerInstance = null;\n                }\n                if (userAgent.includes('Html5Plus')) {\n                    const urls = imageList.map(item => item.url + '"+size?.[2]?.url+"');\n                    plus.nativeUI.previewImage(urls, {\n                        current: currentIndex\n                    });\n                } else {\n                    let container = document.getElementById('viewer-container');\n                    if (!container) {\n                        container = document.createElement('div');\n                        container.id = 'viewer-container';\n                        container.style.display = 'none';\n                        document.body.appendChild(container);\n                    } else {\n                        container.innerHTML = '';\n                    }\n                    imageList.forEach((item, index) => {\n                        const imgElement = document.createElement('img');\n                        imgElement.src = item.url + '"+size?.[2]?.url+"';\n                        imgElement.alt = item.title;\n                        imgElement.onerror = () => {\n                            imgElement.src = 'https://cn.bing.com/th?id=OHR.404_UHD.jpg';\n                            imgElement.alt = '图片未加载成功';\n                        };\n                        container.appendChild(imgElement);\n                    });\n                    viewerInstance = new Viewer(container, {\n                        viewed() {\n                            container.innerHTML = '';\n                        },\n                        navbar: true\n                    });\n                    viewerInstance.view(currentIndex);\n                }\n            });\n        });\n    })();\n</script>"}
clientOnly={true}
className={`w-html-embed`} />
<HtmlEmbed
clientOnly={true}
code={"<script type=\"text/javascript\">\nvar myHeaders = new Headers();\nmyHeaders.append(\"Content-Type\", \"application/json\");\n\nvar raw = JSON.stringify({\n   \"enddate\": \""+search?.output?.[0]?.enddate+"\"\n});\n\nvar requestOptions = {\n   method: 'POST',\n   headers: myHeaders,\n   body: raw,\n   redirect: 'follow'\n};\n\nfetch(\"https://api.mcyin.com/wallpaper/view\", requestOptions)\n   .then(response => response.text())\n   .then(result => console.log(result))\n   .catch(error => console.log('error', error));\n</script>"}
className={`w-html-embed`} />
<HeadSlot>
<HeadMeta
name={"viewport"}
content={"width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"} />
<HeadMeta
name={"color-scheme"}
content={"light only"} />
<HeadMeta
name={"giscus:backlink"}
content={"https://wallpaper.mcyin.com/detail?enddate="+search?.output?.[0]?.enddate} />
</HeadSlot>
<div
className={`w-element c1pi04ju c1a5b44t c3ahk9b ch4lttr cq3120r c13l384m cjcp89t c1rd5476 cp4jn5r`}>
<Image
src={search?.output?.[0]?.url + size?.[2]?.url}
alt={search?.output?.[0]?.title}
data-index={"0"}
className={`w-image c3ahk9b c1pi04ju crqq94w ${"preview-image"}`} />
<div
className={`w-element c12g0j59 c1vepfxe c3ahk9b cjcp89t c1rd5476 cp4jn5r c6a8nf8 ca6si8j ckg6r0n c1pa7jn4 c1mxxlpg c1xgciw0 cdbrifo c1rfngb2 c1l9ehyu`}>
<h1
className={`w-element c3ahk9b crz3jjw c18u4sn0 cay4v31`}>
{search?.output?.[0]?.title}
</h1>
<p
className={`w-element c3ahk9b c18u4sn0 cay4v31`}>
{search?.output?.[0]?.copyright}
</p>
<div
className={`w-element c1l7fn7t cjcp89t c1eeps4y cwsk5yy c1rihdwx c1hdmpoj`}>
<Dialog>
<DialogTrigger>
<button
className={`w-element c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 c1ee89dn c14243yp cjcp89t c1rd5476 cp4jn5r c3c4h76 cwlzcrb c1eeps4y c1rihdwx cjo0crk`}>
<Image
src={"/assets/download-solid-full_Hn6UAr-oM0I_Xzxo4FAF1.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cay4v31 cgrmcgs`}>
{"下载"}
</span>
</button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay c1a5b44t cc38u8d cdsfmpq c1fcrez1 cysgfvr csdsu1i cjcp89t c15ndkzq cp4jn5r c1hgp8ez`}>
<DialogContent
className={`w-dialog-content c3ahk9b ckr14lr c136bqtx c1m3fcc4 c1rok6iw c1vepfxe c14243yp c3c4h76 cwlzcrb c16mp2wf c1rfngb2 cdbrifo czgoo5u c1ypp1ou cq3120r c10t9lec ch4lttr c1hgp8ez`}>
<div
className={`w-element cjcp89t c1c46zyi cp4jn5r c6a8nf8 c3ahk9b c3c4h76 cwlzcrb`}>
<Image
src={"/assets/Size_tu1S0pKDCMBXmwdXk0tWc.webp"}
className={`w-image c3ahk9b c1rfngb2 cdbrifo czgoo5u c1ypp1ou`} />
<h2
className={`w-element c18u4sn0 cay4v31 c3ahk9b crz3jjw`}>
{"请选择下载壁纸尺寸！"}
</h2>
{Object.entries(
  // @ts-ignore
  size ?? {}
).map(([_key, collectionItem]: any) => {
  const collectionItemKey = Array.isArray(size) ? Number(_key) : _key;
  return (
<Fragment key={collectionItemKey}>
<button
download-link={search?.output?.[0]?.url + collectionItem?.url}
className={`w-element c1gub7oy c19ye7wl c1iyxo74 c1ryb23c c1vomsuo c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 ccy5mty c1eeps4y c1rihdwx cwsk5yy c1hdmpoj cjcp89t c3ahk9b c1rd5476 cp4jn5r c3c4h76 cwlzcrb ${"download-button"}`}>
<Image
src={"/assets/download-solid-full_Hn6UAr-oM0I_Xzxo4FAF1.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cxnf9wh c3cdaew`}>
{collectionItem?.size}
</span>
</button>
</Fragment>
)
})
}
<DialogClose
className={`w-close-button c1oye3ih cjcp89t c1rd5476 cp4jn5r c1ee89dn c3c4h76 cwlzcrb c1gub7oy c19ye7wl c1iyxo74 c1ryb23c c1vomsuo c3ahk9b c1eeps4y cwsk5yy c1rihdwx c1hdmpoj c18s8acv czb4jv4 coyqu99 c1j9p1xu cjdyhdf c1by2qzo c1v30ll2`}>
<Image
src={"/assets/xmark-solid-full_SHMDTj6mYTMUtAyl1OfJS.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cxnf9wh c3cdaew`}>
{"关闭"}
</span>
</DialogClose>
</div>
<HtmlEmbed
code={"<script type=\"text/javascript\">\n  document.addEventListener('DOMContentLoaded', function () {\n    const downloadButtons = document.querySelectorAll('.download-button');\n    downloadButtons.forEach(button => {\n      button.addEventListener('click', function () {\n        const downloadLink = this.getAttribute('download-link');\n        if (downloadLink) {\n          const userAgent = navigator.userAgent;\n          if (userAgent.indexOf('Html5Plus') > -1) {\n            saveImageToGallery(downloadLink);\n          } else if (userAgent.indexOf('MicroMessenger') > -1) {\n            navigator.clipboard.writeText(downloadLink)\n              .then(() => {\n                console.log('链接已复制到剪贴板');\n              })\n              .catch(err => {\n                console.error('复制链接到剪贴板失败:', err);\n              });\n            alert('请在浏览器中打开该链接下载壁纸');\n          } else {\n            downloadCrossOriginImage(downloadLink, this);\n          }\n        }\n      });\n    });\n  });\n</script>"}
className={`w-html-embed`} />
</DialogContent>
</DialogOverlay>
</Dialog>
<Dialog>
<DialogTrigger>
<button
className={`w-element c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 c11jzbl9 c14243yp cjcp89t c1rd5476 cp4jn5r c3c4h76 cwlzcrb cjo0crk`}>
<Image
src={"/assets/copy-regular-full_aP7JoJNuh21txJhcDwOu0.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cay4v31 cgrmcgs`}>
{"复制"}
</span>
</button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay c1a5b44t cc38u8d cdsfmpq c1fcrez1 cysgfvr csdsu1i cjcp89t c15ndkzq cp4jn5r c1hgp8ez`}>
<DialogContent
className={`w-dialog-content c3ahk9b ckr14lr c136bqtx c1m3fcc4 c1rok6iw c1vepfxe c14243yp c3c4h76 cwlzcrb c16mp2wf c1rfngb2 cdbrifo czgoo5u c1ypp1ou cq3120r c10t9lec ch4lttr c1hgp8ez`}>
<div
className={`w-element cjcp89t c1c46zyi cp4jn5r c6a8nf8 c3ahk9b c3c4h76 cwlzcrb`}>
<Image
src={"/assets/Size_tu1S0pKDCMBXmwdXk0tWc.webp"}
className={`w-image c3ahk9b c1rfngb2 cdbrifo czgoo5u c1ypp1ou`} />
<h2
className={`w-element c18u4sn0 cay4v31 c3ahk9b crz3jjw`}>
{"请选择复制链接尺寸！"}
</h2>
{Object.entries(
  // @ts-ignore
  size ?? {}
).map(([_key, collectionItem_1]: any) => {
  const collectionItemKey_1 = Array.isArray(size) ? Number(_key) : _key;
  return (
<Fragment key={collectionItemKey_1}>
<button
copy-text={search?.output?.[0]?.url + collectionItem_1?.url}
className={`w-element c1gub7oy c19ye7wl c1iyxo74 c1ryb23c c1vomsuo c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 ccy5mty c1eeps4y c1rihdwx cwsk5yy c1hdmpoj cjcp89t c3ahk9b c1rd5476 cp4jn5r c3c4h76 cwlzcrb ${"copy-button"}`}>
<Image
src={"/assets/copy-regular-full_aP7JoJNuh21txJhcDwOu0.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cxnf9wh c3cdaew`}>
{collectionItem_1?.size}
</span>
</button>
</Fragment>
)
})
}
<DialogClose
className={`w-close-button c1oye3ih cjcp89t c1rd5476 cp4jn5r c1ee89dn c3c4h76 cwlzcrb c1gub7oy c19ye7wl c1iyxo74 c1ryb23c c1vomsuo c3ahk9b c1eeps4y cwsk5yy c1rihdwx c1hdmpoj c18s8acv czb4jv4 coyqu99 c1j9p1xu cjdyhdf c1by2qzo c1v30ll2`}>
<Image
src={"/assets/xmark-solid-full_SHMDTj6mYTMUtAyl1OfJS.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cxnf9wh c3cdaew`}>
{"关闭"}
</span>
</DialogClose>
</div>
<HtmlEmbed
code={"<script type=\"text/javascript\">\n  document.addEventListener('DOMContentLoaded', function () {\n    const copyButtons = document.querySelectorAll('.copy-button');\n    copyButtons.forEach(button => {\n      button.addEventListener('click', function () {\n        const textToCopy = this.getAttribute('copy-text');\n        if (textToCopy) {\n          navigator.clipboard.writeText(textToCopy)\n            .then(() => {\n              console.log('复制成功');\n            })\n            .catch(err => {\n              console.error('复制失败:', err);\n            });\n        }\n      });\n    });\n  });\n</script>"}
className={`w-html-embed`} />
</DialogContent>
</DialogOverlay>
</Dialog>
<Dialog>
<DialogTrigger>
<button
className={`w-element c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 cel0lyz cxn3gcz c1rd5476 cp4jn5r c3c4h76 cwlzcrb cjo0crk ${"qrcode-button"}`}>
<Image
src={"/assets/qrcode-solid-full_Cx4YkOxpIy-AwQcBSp4qO.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cay4v31 cgrmcgs`}>
{"二维码"}
</span>
</button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay c1a5b44t cc38u8d cdsfmpq c1fcrez1 cysgfvr cjcp89t c1c46zyi cp4jn5r c1hgp8ez`}>
<DialogContent
className={`w-dialog-content c3ahk9b cjcp89t c6a8nf8 c1rok6iw cit0ry8 c14243yp c1rd5476 ci1yxgc c1iwc9o c1rfngb2 cdbrifo czgoo5u c1ypp1ou cq3120r c10t9lec ch4lttr c1j2yf13 cy9dtll c1hgp8ez`}>
<Image
src={"https://open-api.cli.im/cli-open-platform-service/v1/labelStyle/createWithKey?cliT=D3&cliD=https://wallpaper.mcyin.com/detail?enddate="+search?.output?.[0]?.enddate+"&api_key=CL3cc5708acdb29c14&return_file="}
className={`w-image c3ahk9b c1rfngb2 cdbrifo czgoo5u c1ypp1ou`} />
<p
className={`w-element c18u4sn0 cay4v31`}>
{"扫一扫"}
</p>
</DialogContent>
</DialogOverlay>
</Dialog>
<button
image-link={search?.output?.[0]?.url + size?.[2]?.url}
className={`w-element c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 cel0lyz cxn3gcz c1rd5476 cp4jn5r c3c4h76 cwlzcrb cjo0crk ${"share-image-button"}`}>
<Image
src={"/assets/share-from-square-regular-full_2JjwQRSGOqc5i0ytj1BaK.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cay4v31 cgrmcgs`}>
{"分享"}
</span>
</button>
<Dialog>
<DialogTrigger>
<button
className={`w-element c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 ccy5mty c14243yp cjcp89t c1rd5476 cp4jn5r c3c4h76 cwlzcrb cwsk5yy c1hdmpoj cjo0crk`}>
<Image
src={"/assets/comment-regular-full_JyWU2gI_Nd8lvx4m6hz0w.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
<span
className={`w-element c18u4sn0 cay4v31 cgrmcgs`}>
{"评论"}
</span>
</button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay c1a5b44t cc38u8d cdsfmpq c1fcrez1 cysgfvr csdsu1i cjcp89t c15ndkzq cp4jn5r c1hgp8ez`}>
<DialogContent
className={`w-dialog-content c3ahk9b ckr14lr c136bqtx c1m3fcc4 c1xgciw0 c1vepfxe c14243yp c3c4h76 cwlzcrb c16mp2wf c1rfngb2 cdbrifo czgoo5u c1ypp1ou cq3120r c10t9lec ch4lttr c1hgp8ez`}>
<div
className={`w-element cjcp89t c1c46zyi cp4jn5r c6a8nf8 c3ahk9b ${"giscus-frame"}`}>
<HtmlEmbed
code={"<script src=\"https://giscus.app/client.js\"\n        data-repo=\"mcyin-wallpaper/giscus\"\n        data-repo-id=\"R_kgDORsDASA\"\n        data-category=\"评论\"\n        data-category-id=\"DIC_kwDORsDASM4C42L4\"\n        data-mapping=\"specific\"\n        data-term=\"enddate="+ search?.output?.[0]?.enddate +"\"\n        data-strict=\"0\"\n        data-reactions-enabled=\"1\"\n        data-emit-metadata=\"1\"\n        data-input-position=\"top\"\n        data-theme=\"dark\"\n        data-lang=\"zh-CN\"\n        data-loading=\"lazy\"\n        crossorigin=\"anonymous\"\n        async>\n</script>"}
clientOnly={true}
className={`w-html-embed`} />
<DialogClose
className={`w-close-button c1oye3ih cjcp89t c1rd5476 cp4jn5r c3c4h76 cwlzcrb c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu ca6si8j c7pgw9v c1j98ua7 cjdyhdf c1hgp8ez c1by2qzo c1v30ll2`}>
<Image
src={"/assets/xmark-solid-full_SHMDTj6mYTMUtAyl1OfJS.svg"}
className={`w-image c1n5e6oe clum4mu c17fuu`} />
</DialogClose>
</div>
</DialogContent>
</DialogOverlay>
</Dialog>
</div>
<div
className={`w-element c3ahk9b cjcp89t c1rd5476 c15xqegm c3c4h76 cwlzcrb`}>
<Image
src={"/assets/calendar-regular-full_6pGzixUPxqi_pImHfkosZ.svg"}
className={`w-image c15pzwiw cu1q650 clum4mu`} />
<p
className={`w-element c18u4sn0 cay4v31`}>
{search?.output?.[0]?.enddate}
</p>
<Image
src={"/assets/eye-regular-full_PgJpsK0zE-Koi7cqBtmdu.svg"}
className={`w-image c15pzwiw cu1q650 clum4mu`} />
<p
className={`w-element c18u4sn0 cay4v31`}>
{search?.output?.[0]?.views}
</p>
</div>
</div>
<div
className={`w-element c1l7fn7t cjcp89t cyckhqq c1eeps4y cwsk5yy c1rihdwx c1hdmpoj ca6si8j c7pgw9v cq3120r c13l384m c181rm93`}>
<button
id={"backButton"}
className={`w-element c1gub7oy c18s8acv czb4jv4 coyqu99 c1j9p1xu c12g0j59 c1ee89dn c1eeps4y c1rihdwx c14243yp cjcp89t c1rd5476 cp4jn5r c3c4h76 cwlzcrb cwsk5yy c1hdmpoj c1hgp8ez`}>
<Image
src={"/assets/arrow-rotate-left-solid-full_7ZNmjDpFgG5S_GDGVLMZP.svg"}
className={`w-image c97jkuu c7eufua clum4mu`} />
</button>
<HtmlEmbed
code={"<script type=\"text/javascript\">\n  document.getElementById(\"backButton\").addEventListener(\"click\", () => {\n    if (window.history.length > 1) window.history.back();\n    else window.location.href = \"/\";\n  });\n</script>"}
className={`w-html-embed`} />
</div>
</div>
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
    