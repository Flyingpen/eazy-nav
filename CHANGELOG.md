# 更新日志

本文件记录项目的所有重要更改。

本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/) 规范。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
版本号遵循 [语义化版本](https://semver.org/lang/zh-CN/) 规范。

## [Unreleased]

### 计划中
- 支持书签编辑功能
- 添加书签导入/导出功能
- 支持多标签页管理
- 添加书签分享功能
- 多语言支持
- 书签图标缓存优化
- 键盘快捷键支持

## [1.0.0] - 2025-11-01

### 新增 ✨
- 🎉 初始版本发布
- 🎨 现代化 UI 设计，支持浅色/深色/自动主题模式
- 🔍 实时搜索功能，支持书签标题和 URL 匹配
- 📁 智能分组，自动按文件夹层级展示书签
- 🖼️ 自动获取并展示网站 favicon
- 📊 统计面板，显示书签总数和分类数量
- 🕐 实时时钟显示
- 💬 Toast 操作反馈提示
- 📱 完全响应式设计，适配桌面/平板/移动端
- ✨ 流畅的入场动画和悬停效果
- 🌈 毛玻璃效果和精美视觉设计
- 🔒 MIT 开源协议

### 技术特性 ⚙️
- 非侵入式设计，不修改原始 bookmarks.html
- 基于 Alpine.js 的轻量级响应式框架
- Tailwind CSS 驱动的现代化样式系统
- 纯静态架构，无需后端服务器
- 支持任何静态托管平台部署

### SEO 优化 📈
- 完整的 meta 标签配置
- Open Graph 协议支持
- Twitter Card 支持
- robots.txt 文件
- sitemap.xml 网站地图

### PWA 支持 📲
- Web App Manifest 配置
- Service Worker 离线缓存
- 可安装到桌面
- 图标多尺寸适配

### 文件结构 📁
- 规范化的项目目录结构
- CSS 模块化组织（variables, components, utilities, animations, responsive）
- 详细的文档说明

### 文档 📚
- 完整的 README.md
- 项目结构说明 (PROJECT_STRUCTURE.md)
- 配置选项详细说明
- 部署指南（GitHub Pages, Vercel, Netlify）
- 常见问题解答

### 已知问题 🐛
- 部分浏览器可能因安全策略限制本地文件加载（建议使用 HTTP 服务器）
- Chrome 以外浏览器的书签格式兼容性待测试

---

## 版本说明

### 版本号格式

版本号采用 `主版本号.次版本号.修订号` 的格式：

- **主版本号**：不兼容的 API 修改
- **次版本号**：向下兼容的功能性新增
- **修订号**：向下兼容的问题修正

### 变更类型

- `新增` (Added) - 新功能
- `修改` (Changed) - 对现有功能的变更
- `弃用` (Deprecated) - 即将移除的功能
- `移除` (Removed) - 已移除的功能
- `修复` (Fixed) - 问题修复
- `安全` (Security) - 安全相关修复

## 贡献

如果您发现错误或想要提出改进建议，请：

1. 查看 [CONTRIBUTING.md](CONTRIBUTING.md)
2. 创建 [Issue](../../issues/new) 描述问题
3. 提交 [Pull Request](../../compare) 贡献代码

## 订阅更新

Watch 本仓库或关注发布页面，第一时间获取更新通知：

- [点击订阅发布通知](https://github.com/your-username/bookmarks-navigation/watch)
- [查看所有版本](https://github.com/your-username/bookmarks-navigation/releases)

---

感谢所有用户的支持！ 🙏
