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
git add index.html style.css script.js README.md assets/
git commit -m "Update personal website"
git push origin main
```

作品与随想目前为概念示例；个人账号与联系入口使用真实 GitHub 主页。

## 视觉设计

深色摄影风格：近黑画布（#171721）、石墨卡片（#1e1e2a）、象牙白文字（#ededf3）；钴蓝（#5266eb）仅用于首屏主按钮。

`assets/alpine.jpg` 为本地山景摄影资源，来源：https://images.unsplash.com/photo-1464822759023-fed622ff2c3b 。页面不依赖外部字体或远程图片加载。
