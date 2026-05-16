# Wallpaper时光机

一个精美的壁纸网站项目，支持网页版、Android 和 Windows 应用程序。

## 项目特性

- 🎨 精美的壁纸展示界面
- 📱 响应式设计，支持移动端
- 📦 提供 Android 和 Windows 应用下载
- 🚀 使用 WebStudio 构建
- 🖼️ 集成 Viewer.js 图片查看器

## 项目结构

```
website-v2-code/
├── public/                # 静态资源目录
│   ├── 404.html           # 404页面
│   ├── _headers           # Cloudflare Headers配置
│   ├── _routes.json       # 路由配置
│   ├── _worker.js         # Cloudflare Worker
│   ├── android-apk.html   # Android APK下载页
│   ├── app.html           # APP页面
│   ├── windows-nsis-exe.html  # Windows NSIS安装包下载页
│   └── windows-portable-exe.html  # Windows便携版下载页
├── scripts/
│   └── start.js           # 项目启动脚本
├── package.json           # 项目依赖配置
└── LICENSE                # 许可证文件
```

## 环境变量

项目运行需要以下环境变量：

| 变量名 | 说明 | 是否必需 |
|--------|------|----------|
| `BACKGROUND_IMAGE` | 背景图片文件名 | 是 |
| `WEBSTUDIO_LINK` | WebStudio链接 | 是 |
| `VIEWERJS_URL` | Viewer.js URL | 是 |
| `DOMAIN` | 网站域名 | 是 |
| `VERSION` | 版本信息JSON | 是 |
| `FAVICON` | Favicon文件名 | 是 |
| `F404PAGE` | 404页面文件名 | 是 |

## 版本信息格式

`VERSION` 环境变量格式示例：

```json
{
  "website": { "name": "1.0.0", "code": 1 },
  "android": { "name": "1.0.0", "code": 1 },
  "windows": { "name": "1.0.0", "code": 1 }
}
```

## 快速开始

### 启动项目

```bash
npm start
```

## 许可证

MIT License

Copyright (c) 2026 mcyin
