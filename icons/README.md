# PWA 图标

此目录包含项目的 PWA（Progressive Web App）图标文件。

## 图标规格

| 尺寸 | 用途 |
|------|------|
| 72x72 | 小图标 |
| 96x96 | 标准图标 |
| 128x128 | 中等图标 |
| 144x144 | 旧版 Android |
| 152x152 | iOS 启动图标 |
| 192x192 | 推荐最小尺寸 |
| 384x384 | 高分辨率显示 |
| 512x512 | 最大尺寸（应用商店） |

## 格式要求

- **格式**: PNG
- **透明背景**: 支持
- **圆角**: 自动处理
- **颜色**: 建议使用主题色（当前为 #007AFF）

## 生成图标

您可以使用在线工具如 [PWA Icon Generator](https://www.pwabuilder.com/imageGenerator) 或使用以下工具生成：

```bash
# 使用 ImageMagick (需要安装)
convert -size 512x512 xc:"#007AFF" -fill white -gravity center -pointsize 200 -annotate 0 "🔖" icon-512x512.png

# 调整大小
convert icon-512x512.png -resize 192x192 icon-192x192.png
convert icon-512x512.png -resize 384x384 icon-384x384.png
# ... 其他尺寸
```

## 当前状态

⚠️ 目前这些是占位符文件。请将实际图标文件放在此目录中以启用 PWA 功能。

## 推荐设计

- 使用书签（📖）或导航相关的图标
- 使用项目主题色（#007AFF）作为主色
- 确保在透明背景上清晰可见
- 避免过于复杂的细节（在小尺寸下会模糊）
