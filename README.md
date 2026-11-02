# 杨椀程 · AI 产品经理

以文字阅读为中心的桌面版个人主页，使用 HTML、CSS 和 JavaScript，无需安装依赖。

在线访问：https://wanchenghhh.github.io/

## 页面与维护源

- `index.html`：个人介绍、文章摘要、分类筛选、站内搜索、AI 工具和侧栏。
- `posts/`：三篇可直接访问、分享的静态文章；基于实际建站、Pi 安装和技能排查整理。
- `style.css`：浅色双栏博客布局，最小页面宽度 1100px。
- `script.js`：文章关键词搜索、主题筛选、空结果与重置交互。
- `.nojekyll`：让 GitHub Pages 直接发布静态文件。
- `assets/alpine.jpg`：保留的旧版山景资源，当前页面不使用。

姓名为「杨椀程」，职业为「AI 产品经理」。联系入口使用已确认的 GitHub 账号，不包含未提供的工作经历、项目成绩或联系方式。

## 本地预览

```sh
python3 -m http.server 4173
```

打开 http://localhost:4173 。

## 更新网站

编辑页面后提交并推送，GitHub Pages 会从 `main` 分支根目录自动发布：

```sh
git add index.html style.css script.js posts/ README.md
git commit -m "Update personal website"
git push origin main
```

新增文章时，在 `posts/` 添加 HTML 文件，同时更新首页文章卡片、搜索关键词、分类数量和侧栏入口。文章卡片通过 `data-category` 指定分类，`data-search` 提供检索内容。

## 视觉方向

参考 https://rui.juzi.bot/ 的内容组织方式：文字优先、双栏阅读、文章摘要、分类与搜索。本站使用暖白底色、灰绿色文字与陶土色强调；不依赖外部字体或远程图片。
