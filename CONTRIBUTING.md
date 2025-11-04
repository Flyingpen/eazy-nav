# 贡献指南

感谢您对本项目的兴趣！我们欢迎所有形式的贡献。

## 📋 目录

- [行为准则](#行为准则)
- [我能如何贡献？](#我能如何贡献)
- [开发环境搭建](#开发环境搭建)
- [项目结构](#项目结构)
- [开发流程](#开发流程)
- [代码规范](#代码规范)
- [提交规范](#提交规范)
- [Pull Request 指南](#pull-request-指南)
- [问题报告](#问题报告)
- [功能建议](#功能建议)

## 行为准则

请阅读并遵守我们的 [行为准则](CODE_OF_CONDUCT.md)。

## 我能如何贡献？

### 🐛 报告错误

如果您发现了 bug，请创建一个 Issue 并包含以下信息：

- 使用环境（浏览器、操作系统）
- 详细描述问题
- 复现步骤
- 预期行为
- 实际行为
- 截图（如果适用）
- 错误信息

### 💡 提出新功能

我们欢迎新功能建议！请：

1. 先查看现有的 [Issues](../../issues) 和 [Discussions](../../discussions)
2. 创建 [Feature Request Issue](../../issues/new?template=feature_request.md)
3. 详细描述功能和用例
4. 说明为什么这个功能有用

### 📝 改进文档

文档改进同样重要：
- 修正错别字
- 改进说明
- 添加示例
- 翻译文档

### 🔧 贡献代码

可以直接修复 bug 或实现新功能。

## 开发环境搭建

### 前置要求

- Git
- 现代浏览器（Chrome 90+ / Firefox 88+ / Safari 14+）
- 本地 HTTP 服务器（Python 或 Node.js）

### 克隆仓库

```bash
git clone https://github.com/your-username/bookmarks-navigation.git
cd bookmarks-navigation
```

### 启动开发服务器

#### 使用 Python
```bash
python -m http.server 8000
```

#### 使用 Node.js
```bash
npx http-server -p 8000
```

然后访问 `http://localhost:8000`

## 项目结构

```
nav/
├── index.html              # 主页面
├── bookmarks.html          # 书签数据
├── config.json             # 配置文件
├── css/                    # 样式目录
│   ├── variables.css       # CSS 变量
│   ├── components.css      # 组件样式
│   ├── utilities.css       # 工具类
│   ├── animations.css      # 动画
│   └── responsive.css      # 响应式
├── icons/                  # PWA 图标
├── assets/                 # 静态资源
└── images/                 # 图片资源
```

详细说明请查看 [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)

## 开发流程

### 1. 创建分支

```bash
# 从主分支创建新分支
git checkout -b feature/your-feature-name

# 或修复 bug
git checkout -b fix/bug-description
```

### 2. 开发

- 遵循代码规范
- 添加必要的注释
- 测试你的更改

### 3. 提交更改

```bash
git add .
git commit -m "feat: add new bookmark sorting feature"
```

### 4. 推送到远程

```bash
git push origin feature/your-feature-name
```

### 5. 创建 Pull Request

在 GitHub 上创建 Pull Request。

## 代码规范

### HTML

- 使用语义化标签
- 合理的缩进（2 或 4 个空格）
- 添加必要的注释
- 保持结构清晰

示例：
```html
<!-- 好的示例 -->
<main class="bookmarks-container">
  <header class="header">
    <h1 class="title">我的书签</h1>
  </header>
</main>
```

### CSS

- 使用 CSS 变量（`variables.css` 中定义）
- 优先使用实用工具类（`utilities.css`）
- 保持选择器简洁
- 遵循 BEM 命名规范（可选）

示例：
```css
/* 好的示例 */
.bookmark-card {
  background: var(--card-color);
  border-radius: var(--border-radius);
  transition: transform 0.2s ease;
}

.bookmark-card:hover {
  transform: translateY(-2px);
}
```

### JavaScript

- 使用 ES6+ 语法
- 添加有意义的变量和函数名
- 保持函数简洁单一职责
- 添加必要的注释

示例：
```javascript
// 好的示例
async loadBookmarksData() {
  try {
    const response = await fetch(this.config.bookmarks.source);
    const htmlText = await response.text();
    return this.parseBookmarkHTML(htmlText);
  } catch (error) {
    console.error('Failed to load bookmarks:', error);
    this.showError('无法加载书签数据');
  }
}
```

### 文件命名

- 使用短横线分隔（kebab-case）
- 语义化命名
- 英文命名

```
✅ 正确：bookmark-parser.js, theme-switcher.css
❌ 错误：bookmarkparser.js, ThemeSwitcher.css
```

## 提交规范

我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### 类型 (type)

- `feat`: 新功能
- `fix`: bug 修复
- `docs`: 文档更改
- `style`: 代码格式（不影响代码运行的变动）
- `refactor`: 重构（即不是新增功能，也不是修改 bug 的代码变动）
- `test`: 增加测试
- `chore`: 构建过程或辅助工具的变动

### 示例

```bash
feat: add search filter functionality
fix: resolve bookmark loading issue in Safari
docs: update installation instructions
style: fix code formatting in components.css
refactor: improve bookmark parsing logic
test: add unit tests for search function
chore: update dependencies
```

## Pull Request 指南

### 创建 PR 前

- [ ] 更新了相关文档
- [ ] 运行了本地测试
- [ ] 确保代码符合规范
- [ ] 提交信息符合规范
- [ ] 分支是从最新代码创建的

### PR 模板

创建 PR 时请填写模板中的所有部分：

```markdown
## 📝 更改说明

简要描述此 PR 的更改内容

## ✅ 检查清单

- [ ] 功能测试
- [ ] 代码规范检查
- [ ] 相关文档更新

## 📸 截图（如果适用）

添加界面更改的截图

## 🔗 相关 Issue

Closes #issue-number
```

### PR 审查流程

1. 自动化检查（CI）必须通过
2. 至少一名维护者审查
3. 所有讨论解决后合并
4. 合并使用 Squash and Merge

## 问题报告

### Bug 报告模板

```markdown
**Bug 描述**
清晰简洁地描述 bug

**复现步骤**
1. 打开...
2. 点击...
3. 滚动到...
4. 看到错误

**预期行为**
你预期会发生什么

**实际行为**
实际发生了什么

**屏幕截图**
如果适用

**环境信息**
- 浏览器: [e.g. Chrome 91]
- 操作系统: [e.g. macOS Big Sur]
- 项目版本: [e.g. 1.0.0]
```

### 功能请求模板

```markdown
**功能描述**
清晰简洁地描述你希望的功能

**问题背景**
这个功能解决了什么问题？

**预期解决方案**
你希望这个功能如何工作？

**替代方案**
你考虑过其他解决方案吗？

**其他信息**
添加其他上下文或截图
```

## 功能建议

### 待实现功能

如果您想贡献，以下是一些待实现的功能：

- [ ] 书签编辑功能
- [ ] 批量导入/导出书签
- [ ] 书签标签系统
- [ ] 搜索历史记录
- [ ] 键盘快捷键
- [ ] 多语言支持
- [ ] 主题编辑器
- [ ] 书签分组管理
- [ ] 导入其他浏览器书签
- [ ] 书签图标自定义

### 如何选择

1. 选择您感兴趣的功能
2. 查看相关 Issue 是否已存在
3. 在 Issue 中留言表示您将实现
4. 开发完成后提交 PR

## 感谢

感谢所有为本项目做出贡献的开发者！您的贡献让这个项目变得更好 🙏

如果您有任何疑问，欢迎：

- 创建 [Issue](../../issues/new)
- 加入讨论 [Discussions](../../discussions)
- 联系维护者

再次感谢您的贡献！ 🎉
