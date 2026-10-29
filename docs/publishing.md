# 用 GitHub 登录并发布文章

博客地址：https://asfos-thu.github.io/blog/

采用开源 [Pages CMS](https://github.com/pages-cms/pages-cms)，独立后台是
[app.pagescms.org](https://app.pagescms.org/)。文章和图片保存在本仓库，
每次提交到 `main` 后由 GitHub Actions 检查、构建并发布。

## 首次授权

1. 打开 Pages CMS，选择 **Sign in with GitHub**，使用 `asfos-thu` 登录。
2. 按提示安装/授权 Pages CMS GitHub App，选择 **Only select repositories**，
   只选择 `asfos-thu/blog`。
3. 打开 `asfos-thu/blog`，选择 `main`。后台会读取仓库根目录的 `.pages.yml`。

无需在博客里保存密码或 GitHub Token。不要邀请额外的 Pages CMS collaborators；
本配置不开放访客投稿。授权是你自己的 GitHub 账号操作，不应把密码或令牌发给别人。

## 网页写作

在「文章」中新建条目，填写标题和发布日期，在正文的 Editor / Source 模式中
编辑富文本或 Markdown。可从「图片」上传图片并插入正文或设为封面。

新文章默认是草稿。准备公开时关闭「草稿」并保存，等待
[Deploy to GitHub Pages](https://github.com/asfos-thu/blog/actions/workflows/deploy.yml)
显示成功。草稿文件保存在公开的 GitHub 仓库中，只是不显示在博客页面上。

## 上传已有 Markdown

「上传 Markdown（需含标题和日期）」媒体源映射到 `src/content/posts`，只允许 `.md`。
通过此入口上传文件后，它会被文章集合读取，下一次成功构建时生成页面。
这条链路复用 Pages CMS 的文件上传能力；上传不会自动生成缺失的文章元数据。

文件开头至少包含以下 YAML frontmatter：

```markdown
---
title: 我的第一篇文章
published: "2026-10-29"
draft: false
---

这里是正文。
```

使用新的、易识别的文件名，例如 `my-first-post.md`。文章地址将是
`/blog/posts/my-first-post/`。上传 Markdown 时不要把媒体库显示的 `.md` URL
当作公开文章链接；只有构建后的 HTML 文章地址可访问。

上传文件若未指定 `draft`，按博客现有规则公开发布；想暂存时显式设置 `draft: true`。
纯正文文件需要先补标题和日期，或通过「文章」新建条目并粘贴正文。

正文中的图片使用 `/blog/uploads/文件名`。Markdown 上传不会自动上传本地相对路径图片，
应先上传图片并更新引用。高级 Markdown 扩展建议保留在 Source 模式中编辑。

如果 hosted Pages CMS 的文件上传界面不可用，可用 GitHub 的
[Upload files](https://github.com/asfos-thu/blog/upload/main/src/content/posts)
上传同样的 `.md` 文件；仍然通过 GitHub 身份验证、仓库权限和同一发布工作流。

## 验证范围

配置按 Pages CMS 的 [Quick start](https://pagescms.org/docs/quick-start/)、
[Media](https://pagescms.org/docs/configuration/media/)、
[Content](https://pagescms.org/docs/configuration/content/) 文档编写。
实际 GitHub 登录、App 授权和通过后台上传仍需在首次授权后验证。
