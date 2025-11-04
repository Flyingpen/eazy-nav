<div align="center">

# 📚 书签导航站

一个基于 Chrome 导出的 bookmarks.html 的现代化导航网页项目

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/your-username/bookmarks-navigation.svg?style=social&label=Star)](https://github.com/your-username/bookmarks-navigation)
[![GitHub forks](https://img.shields.io/github/forks/your-username/bookmarks-navigation.svg?style=social&label=Fork)](https://github.com/your-username/bookmarks-navigation/fork)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/your-username/bookmarks-navigation)
[![Language](https://img.shields.io/badge/language-HTML--CSS--JS-green.svg)](https://github.com/your-username/bookmarks-navigation)

[功能特性](#-功能特性) • [快速开始](#-快速开始) • [配置说明](#-配置说明) • [贡献指南](#-贡献指南) • [更新日志](#-更新日志)

![Bookmarks Navigation](https://via.placeholder.com/1200x600?text=Bookmarks+Navigation+Screenshot)

</div>

## ✨ 项目特点

### 🎯 核心设计理念
- **非侵入式设计**：完全不修改 Chrome 导出的原始 bookmarks.html 文件
- **独立加载机制**：通过 index.html 动态读取和解析 bookmarks.html
- **纯静态部署**：无需后端服务器，可直接部署到任何静态托管平台
- **数据分离**：书签数据（bookmarks.html）与展示层（index.html）完全分离

### 💎 界面特性
- **现代化 UI**：采用 Tailwind CSS 构建的精美界面
- **毛玻璃效果**：支持毛玻璃材质和动态主题切换
- **响应式设计**：完美适配桌面端和移动端
- **流畅动画**：入场动画、悬停效果、微交互动画
- **深色模式**：支持浅色/深色/自动主题模式

### 🚀 功能特性
- **实时搜索**：支持书签标题和 URL 的实时搜索过滤
- **智能分组**：自动按文件夹层级展示书签分类
- **图标显示**：自动获取并展示网站 favicon
- **统计面板**：显示书签总数和分类数量
- **时钟显示**：实时显示当前日期和时间
- **Toast 提示**：优雅的操作反馈提示
- **PWA 支持**：可安装到桌面，支持离线访问

## 📸 项目截图

| 浅色模式 | 深色模式 |
|---------|---------|
| ![Light Mode](https://via.placeholder.com/600x400?text=Light+Mode) | ![Dark Mode](https://via.placeholder.com/600x400?text=Dark+Mode) |
| 搜索界面 | 移动端 |
| ![Search](https://via.placeholder.com/600x400?text=Search+Mode) | ![Mobile](https://via.placeholder.com/300x400?text=Mobile) |

## 🔧 技术栈

- **HTML5** - 语义化标记
- **CSS3** - 样式和动画
  - Tailwind CSS - 实用优先的 CSS 框架
  - 自定义 CSS 变量系统
  - CSS Grid & Flexbox
- **JavaScript (ES6+)** - 交互逻辑
  - Alpine.js - 轻量级响应式框架
  - DOMParser API - 解析 bookmarks.html
  - Fetch API - 异步数据加载
- **PWA** - 渐进式 Web 应用
  - Web App Manifest
  - Service Worker
  - 离线缓存策略

## 📁 项目结构

```
nav/
├── index.html              # 主页面，负责加载和展示书签
├── bookmarks.html          # Chrome 导出的书签文件（数据源）
├── config.json             # 配置文件，控制页面行为和外观
├── manifest.json           # PWA 配置文件
├── service-worker.js       # Service Worker（离线支持）
├── LICENSE                 # MIT 许可证
├── README.md               # 项目说明文档
│
├── css/                    # 样式文件目录
│   ├── variables.css       # CSS 变量
│   ├── components.css      # 组件样式
│   ├── utilities.css       # 工具类
│   ├── animations.css      # 动画效果
│   └── responsive.css      # 响应式布局
│
├── icons/                  # PWA 图标目录
│   ├── icon-192x192.png
│   ├── icon-512x512.png
│   └── ...
│
└── assets/                 # 静态资源目录
```

详细说明请查看 [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/your-username/bookmarks-navigation.git
cd bookmarks-navigation
```

### 2. 导出 Chrome 书签

1. 打开 Chrome 浏览器
2. 进入书签管理器（Ctrl/Cmd + Shift + O）
3. 点击右上角"⋮"菜单
4. 选择"导出书签"
5. 保存为 `bookmarks.html`

### 3. 替换书签文件

将导出的 `bookmarks.html` 文件放到项目根目录，替换原有文件即可。

### 4. 配置个性化设置

编辑 `config.json` 文件来自定义页面：

```json
{
  "site": {
    "title": "我的书签导航",
    "name": "智能书签导航",
    "description": "基于Chrome书签的现代化导航页面",
    "author": "书签管理员"
  },
  "theme": {
    "mode": "auto",
    "primaryColor": "#007AFF"
  },
  "header": {
    "showSearch": true,
    "showThemeToggle": true,
    "showStats": true,
    "showClock": true
  }
}
```

### 5. 本地运行

#### 方式一：使用 Python（推荐）
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### 方式二：使用 Node.js
```bash
npx http-server -p 8000
```

#### 方式三：使用 PHP
```bash
php -S localhost:8000
```

然后访问 `http://localhost:8000`

### 6. 部署到服务器

#### GitHub Pages
1. Fork 本项目
2. 在 Settings > Pages 中启用
3. 选择 Source 分支（通常是 `main`）
4. 等待部署完成

#### Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/bookmarks-navigation)

#### Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/bookmarks-navigation)

## 📖 使用指南

### 配置选项详解

| 配置项 | 说明 | 默认值 | 示例 |
|--------|------|--------|------|
| `site.title` | 浏览器标签页标题 | "我的书签导航" | "我的个人导航" |
| `site.name` | 页面显示名称 | "智能书签导航" | "个人书签管理" |
| `site.description` | 网站描述（SEO） | - | "高效管理你的书签" |
| `site.author` | 作者名称 | "书签管理员" | "你的名字" |
| `theme.mode` | 主题模式 | "auto" | "light" / "dark" |
| `theme.primaryColor` | 主题色 | "#007AFF" | "#FF6B6B" |
| `header.showSearch` | 显示搜索框 | true | false |
| `bookmarks.source` | 书签文件路径 | "bookmarks.html" | "my-bookmarks.html" |

## 🔍 搜索功能

实时搜索支持：
- ✅ 书签标题模糊匹配
- ✅ URL 匹配
- ✅ 高亮显示匹配结果
- ✅ 只显示包含匹配项的文件夹
- ✅ 防抖优化（300ms）

## 📱 响应式设计

| 设备类型 | 屏幕宽度 | 布局特点 |
|---------|---------|---------|
| 移动端 | < 640px | 单列布局，大按钮 |
| 平板端 | 640px - 1024px | 自适应列数 |
| 桌面端 | > 1024px | 多列网格，毛玻璃效果 |

## 🎯 浏览器兼容性

| 浏览器 | 最低版本 | 状态 |
|--------|---------|------|
| Chrome | 90+ | ✅ 完全支持 |
| Edge | 90+ | ✅ 完全支持 |
| Firefox | 88+ | ✅ 完全支持 |
| Safari | 14+ | ✅ 完全支持 |

## 🤝 贡献指南

我们欢迎所有形式的贡献！您可以：

- 🐛 提交 Bug 报告
- 💡 提出新功能建议
- 📝 改进文档
- 🔧 提交代码修复
- 🌐 帮助翻译

请查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解详细的贡献指南。

### 贡献步骤

1. **Fork** 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 **Pull Request**

### 贡献者

感谢所有为本项目做出贡献的开发者！ 🙏

<a href="https://github.com/your-username/bookmarks-navigation/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=your-username/bookmarks-navigation" />
</a>

## 📋 更新日志

详细的版本更新记录请查看 [CHANGELOG.md](CHANGELOG.md)

### v1.0.0 (2025-11-01)
- ✨ 首次发布
- 🎨 现代化 UI 设计
- 🌙 深色模式支持
- 🔍 实时搜索功能
- 📱 PWA 支持
- 📦 MIT 开源协议

## 📄 许可证

本项目基于 [MIT](LICENSE) 许可证开源

```
MIT License

Copyright (c) 2025 bookmarks-navigation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## 💡 常见问题

<details>
<summary><strong>Q: 如何更新书签？</strong></summary>

A: 重新从 Chrome 导出书签，替换 `bookmarks.html` 文件即可。页面会自动重新加载数据。

</details>

<details>
<summary><strong>Q: 可以修改 bookmarks.html 吗？</strong></summary>

A: 不建议手动修改。本项目的设计理念是保持 bookmarks.html 原始状态，所有定制通过 config.json 完成。

</details>

<details>
<summary><strong>Q: 为什么本地打开不显示书签？</strong></summary>

A: 可能是浏览器安全策略限制。建议使用本地 HTTP 服务器运行（见"快速开始"章节）。

</details>

<details>
<summary><strong>Q: 如何自定义样式？</strong></summary>

A: 可以通过修改 `css/` 目录下的文件来自定义样式，或通过 config.json 的 `advanced.customCSS` 字段添加自定义 CSS。

</details>

更多问题请查看 [FAQ 文档](链接到完整FAQ) 或提交 [Issue](../../issues)

## 🎯 开发计划

- [ ] 支持书签编辑功能
- [ ] 添加书签导入/导出功能
- [ ] 支持多标签页管理
- [ ] 添加书签分享功能
- [ ] 多语言支持
- [ ] 书签图标缓存优化
- [ ] 键盘快捷键支持

## 🙏 致谢

感谢以下开源项目和服务：

- [Alpine.js](https://alpinejs.dev/) - 响应式框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- Chrome 浏览器 - 书签数据源
- 所有贡献者的支持和反馈

## ⭐ 支持我们

如果这个项目对您有帮助，欢迎：

- ⭐ Star 本项目
- 🐛 提交 Bug 报告
- 💡 提出建议
- 🤝 参与贡献

您的支持是我们最大的动力！

---

<div align="center">

**⭐ 如果这个项目对你有帮助，欢迎 Star！ ⭐**

[⬆ 回到顶部](#-书签导航站)

</div>
