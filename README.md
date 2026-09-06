<div align="center">

# 🔖 Eazy Nav

**基于 Chrome 书签文件的静态导航页 —— 无需数据库，开箱即用**

[![Deploy](https://github.com/Flyingpen/eazy-nav/actions/workflows/static.yml/badge.svg)](https://github.com/Flyingpen/eazy-nav/actions/workflows/static.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.1.0-green.svg)](#更新日志)

[在线演示](https://flyingpen.github.io/eazy-nav/) · [快速开始](#-快速开始) · [配置](#-配置) · [参与贡献](#-参与贡献)

</div>

---

## ✨ 这是什么

把 Chrome 导出的书签文件（`bookmarks.html`）直接变成一个美观的导航网站：

- 📂 **自动解析书签结构** —— 文件夹变成分类，书签变成卡片，无需手动整理
- 🔍 **实时搜索** —— 输入关键词即时过滤并高亮匹配结果
- 🌗 **明暗主题** —— 跟随系统 + 手动切换 + localStorage 记忆，无闪烁
- 📱 **响应式设计** —— 桌面、平板、手机都能舒适使用
- ⚡ **PWA 支持** —— 可安装到桌面/主屏幕，离线也能访问
- 🚀 **零构建、零依赖** —— 纯静态 HTML，Fork 后改个文件就能上线

## 🔧 技术栈

| 项 | 说明 |
|---|---|
| [Alpine.js 3](https://alpinejs.dev/) | 轻量响应式框架（CDN 引入） |
| [Tailwind CSS](https://tailwindcss.com/) | 原子化 CSS（Play CDN，配合少量自定义样式） |
| 原生 DOMParser | 解析 Netscape 格式书签文件 |
| Service Worker | PWA 离线缓存（stale-while-revalidate） |

## 🚀 快速开始

### 方式一：直接部署（推荐）

1. **Fork 本仓库**
2. **用 Chrome 导出你的书签**：`chrome://bookmarks` → 右上角 ⋮ → 导出书签
3. **替换仓库根目录的 `bookmarks.html`** 为你导出的文件
4. 完成。推送到 GitHub 后 [GitHub Pages](https://pages.github.com/) 会自动部署
   （或直接启用 **Settings → Pages → GitHub Actions**）

> 想改站名、作者、主题色？编辑 [`config.json`](config.json) 即可，见下方[配置说明](#-配置)。

### 方式二：本地运行

书签数据通过 `fetch` 加载，需要本地 HTTP 服务器（直接双击打开会因浏览器安全策略无法加载数据）：

```bash
git clone https://github.com/Flyingpen/eazy-nav.git
cd eazy-nav

# 任选其一
python -m http.server 8000
npx http-server -p 8000
```

访问 <http://localhost:8000>

## ⚙️ 配置

编辑根目录的 [`config.json`](config.json)：

```jsonc
{
  "site": {
    "title": "浏览器标签页标题",
    "name": "页头显示的站名",
    "description": "站点描述（SEO / meta）",
    "author": "你的名字"
  },
  "theme": {
    "mode": "auto",        // auto：跟随系统 | light | dark
    "primaryColor": "#007AFF"
  },
  "header": {
    "showSearch": true,       // 显示搜索框
    "showThemeToggle": true,  // 显示主题切换按钮
    "showStats": true,        // 显示书签/分类统计
    "showClock": true         // 显示时钟
  },
  "bookmarks": {
    "source": "bookmarks.html"  // 书签数据文件路径
  }
}
```

> 💡 用户手动切换过主题后，选择会存入 localStorage，优先级高于 `theme.mode`。

## 📁 项目结构

```
eazy-nav/
├── index.html          # 主页面（含全部样式与逻辑）
├── bookmarks.html      # Chrome 导出的书签数据 ← 替换这个
├── config.json         # 站点配置
├── manifest.json       # PWA 清单
├── service-worker.js   # Service Worker（离线缓存）
├── icons/icon.svg      # PWA / favicon 图标
├── robots.txt          # 爬虫规则
├── sitemap.xml         # 站点地图
└── .github/workflows/
    └── static.yml      # GitHub Pages 部署工作流
```

## 🧠 工作原理

```
浏览器加载 index.html
        │
        ▼
fetch config.json ──► 应用站点信息与主题
        │
        ▼
fetch bookmarks.html（Netscape 格式）
        │
        ▼
规范化 DOCTYPE ──► DOMParser 解析
        │
        ▼
逐层遍历 <DT>，用 ":scope >" 严格匹配直接子元素
（避免把子文件夹的第一个书签误解析成文件夹）
        │
        ▼
生成分类卡片 + 书签列表（所有动态内容经 HTML 转义）
        │
        ▼
Alpine.js 接管交互：搜索过滤、主题切换、时钟
```

## 🔒 安全说明

书签文件虽由自己生成，但本项目仍按"不可信输入"处理：

- 所有书签标题、URL、图标地址渲染前均经过 **HTML 实体转义**（含引号）
- 图标 URL 仅接受 `http(s):` 与 `data:image:` 协议，`javascript:` 等危险协议会被丢弃
- 外链统一携带 `rel="noopener noreferrer"`

## 📦 部署到其他平台

任何支持静态文件托管的服务都可以：Vercel、Netlify、Cloudflare Pages、自己的服务器……
把仓库内容原样上传即可，没有构建步骤。

## 🤝 参与贡献

欢迎 Issue 和 PR！

1. Fork → 创建分支（`git checkout -b feat/xxx`）
2. 提交遵循 [Conventional Commits](https://www.conventionalcommits.org/)（`feat:` `fix:` `docs:` …）
3. 本地用 HTTP 服务器验证后发起 PR

待实现的想法：书签编辑、批量导入/导出、标签系统、键盘快捷键、多语言。

## 📈 更新日志

### v1.1.0（2026-09-06）

- 🐛 修复书签解析：文件夹数量 12 → 11，书签数量 221 → **210**（与真实数据一致）
  原实现会穿透嵌套层级，把每个子文件夹的第一个书签误解析成"文件夹"
- 🔒 修复 XSS 隐患：`escapeHtml` 补齐引号转义，书签图标 URL 增加协议白名单
- 🐛 修复搜索输入 `(` `[` `+` 等正则特殊字符时的崩溃（特殊字符已转义）
- ✨ 修复主题持久化：手动切换主题后写入 localStorage，刷新后恢复；Tailwind `darkMode` 改为 `class` 策略，切换即时生效且无闪烁
- ✨ PWA 完整可用：注册 Service Worker、修复 manifest `start_url`/`scope`（适配 GitHub Pages 子路径）、新增 SVG 图标
- ⚡ 性能：移除未使用的 CSS 文件与死代码；书签图标懒加载；增加 `[x-cloak]` 防止 Alpine 初始化前闪烁
- 🧹 精简 `config.json` 至实际生效的配置项；清理调试日志
- 📝 重写 README；SEO 文件使用真实站点地址

### v1.0.0（2025-11-01）

- 首个公开版本：Chrome 书签解析 + 搜索 + 明暗主题 + PWA

## 📄 许可证

[MIT](LICENSE) © 2026 Flyingpen
