/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  const _data = new Map<string, ResourceRequest>([
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  let search = {"Next_Page":2,"Page":1,"Previous_Page":1,"output":[{"copyright":"示例版权文本","enddate":"示例日期","title":"示例标题","url":"https://cn.bing.com/th?id=OHR.NewYearFox_ZH-CN9312618796_UHD.jpg","views":"示例查看次数"}]}
  return {
    title: search?.output?.[0]?.title+" - 壁纸详情页- Wallpaper时光机 - 收集每日壁纸。",
    description: search?.output?.[0]?.title + "\n" + search?.output?.[0]?.enddate + "\n" + search?.output?.[0]?.copyright,
    excludePageFromSearch: false,
    language: "zh-CN",
    socialImageAssetName: undefined,
    socialImageUrl: search?.output?.[0]?.url,
    status: undefined,
    redirect: "",
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const contactEmail = "724651441@qq.com";
    