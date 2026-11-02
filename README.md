# 个人网站

桌面版中文个人网站，使用 HTML、CSS 和 JavaScript，无需安装依赖。

在线访问：https://wanchenghhh.github.io/

## 文件

- `index.html`：姓名、个人介绍、作品列表与联系入口。
- `style.css`：颜色、字体和桌面布局，页面最小宽度 1100px。
- `script.js`：作品详情、随想和联系弹窗。
- `.nojekyll`：让 GitHub Pages 直接发布静态文件。

## 本地预览

```sh
python3 -m http.server 4173
```

打开 http://localhost:4173 。

## 更新网站

修改文件后提交并推送，GitHub Pages 会从 `main` 分支根目录自动发布：

```sh
git add index.html style.css script.js README.md
git commit -m "Update personal website"
git push origin main
```

当前姓名、作品、文章与联系方式为示例内容，可按需替换。
