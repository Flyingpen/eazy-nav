# 项目结构说明

## 完整目录结构

```
nav/                                  # 项目根目录
├── 📄 index.html                     # 主页面文件
├── 📄 bookmarks.html                 # Chrome导出的书签数据文件
├── 📄 config.json                    # 配置文件
├── 📄 manifest.json                  # PWA配置文件
├── 📄 service-worker.js              # Service Worker（离线支持）
├── 📄 robots.txt                     # SEO爬虫规则
├── 📄 sitemap.xml                    # SEO网站地图
├── 📄 LICENSE                        # MIT开源许可证
├── 📄 README.md                      # 项目说明文档
├── 📄 PROJECT_STRUCTURE.md           # 本文件 - 项目结构说明
│
├── 📁 css/                           # 样式文件目录
│   ├── 📄 variables.css              # CSS变量（主题色、尺寸等）
│   ├── 📄 components.css             # 组件样式
│   ├── 📄 utilities.css              # 工具类样式
│   ├── 📄 animations.css             # 动画效果
│   └── 📄 responsive.css             # 响应式布局
│
├── 📁 js/                            # JavaScript文件目录（预留）
│   └── 📄 README.md                  # JS目录说明
│
├── 📁 assets/                        # 静态资源目录
│   └── 📄 README.md                  # 资源目录说明
│
├── 📁 images/                        # 图片资源目录
│   ├── 📁 screenshots/               # 截图目录
│   └── 📄 README.md                  # 图片目录说明
│
└── 📁 icons/                         # PWA图标目录
    ├── 📄 README.md                  # 图标目录说明
    ├── 🖼️ icon-72x72.png             # 72x72 图标
    ├── 🖼️ icon-96x96.png             # 96x96 图标
    ├── 🖼️ icon-128x128.png           # 128x128 图标
    ├── 🖼️ icon-144x144.png           # 144x144 图标
    ├── 🖼️ icon-152x152.png           # 152x152 图标
    ├── 🖼️ icon-192x192.png           # 192x192 图标
    ├── 🖼️ icon-384x384.png           # 384x384 图标
    └── 🖼️ icon-512x512.png           # 512x512 图标
```

## 文件类型说明

### 📄 核心文件
- **index.html**: 主页面，负责加载和展示书签数据
- **bookmarks.html**: Chrome导出的原始书签文件（数据源）
- **config.json**: 配置文件，控制页面外观和行为

### 🎨 样式文件 (css/)
- **variables.css**: 定义CSS变量（颜色、字体、尺寸等）
- **components.css**: 各个UI组件的样式定义
- **utilities.css**: 工具类样式（辅助类、通用类）
- **animations.css**: 动画效果定义
- **responsive.css**: 响应式布局和断点

### 🔧 配置文件
- **manifest.json**: PWA应用清单文件
- **service-worker.js**: Service Worker脚本（提供离线功能）
- **robots.txt**: 搜索引擎爬虫规则
- **sitemap.xml**: 网站地图

### 📱 PWA支持 (icons/)
- 各种尺寸的PNG图标文件
- 用于在不同设备和场景下显示应用图标

### 📚 文档文件
- **README.md**: 项目介绍和使用说明
- **LICENSE**: MIT开源许可证
- **PROJECT_STRUCTURE.md**: 本文件，项目结构说明
- **其他文档**: CHANGELOG、贡献指南等

## 目录功能说明

### css/
存放所有样式相关文件，按功能模块化组织：
- 便于维护和查找
- 符合CSS架构最佳实践
- 支持响应式设计和动画效果

### js/
预留的JavaScript目录，当前项目使用CDN引入Alpine.js：
- 如需添加自定义JS，可在此目录创建文件
- 建议按功能模块拆分

### assets/
存放通用的静态资源：
- 如需添加全局使用的图片、字体等
- 与业务逻辑无关的资源

### images/
存放图片相关资源：
- screenshots/: 项目截图展示
- 其他图片资源文件

### icons/
PWA应用图标：
- 包含所有必需的图标尺寸
- 建议使用SVG或高清PNG格式
- 建议统一设计风格

## 最佳实践

### 文件命名规范
- 使用短横线分隔（kebab-case）
- 语义化命名
- 统一使用英文

### 目录组织原则
- 按功能模块划分
- 相关文件放在一起
- 避免深层嵌套（建议不超过3层）

### 可扩展性
- 当前为纯静态项目架构
- 如需添加功能，可新增对应目录
- 保持向后兼容性

## 部署说明

### 静态托管
本项目支持部署到任何静态托管服务：
- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

### 部署文件
部署时需要包含所有文件，但可以省略：
- `.git/` 目录
- `.gitignore` 文件
- 开发相关的临时文件

### 目录结构保持
部署时请保持完整的目录结构，特别是：
- `icons/` 目录（PWA功能必需）
- `css/` 目录（样式文件）
- `manifest.json`（PWA清单）
- `service-worker.js`（离线功能）

---

💡 提示：如需添加新功能，建议先查看现有文件结构，保持风格一致。
