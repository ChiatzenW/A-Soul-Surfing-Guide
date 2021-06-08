# A-Soul 上网冲浪指北

为了防止指南被严重破坏，以及帮助对静态页面没有编辑经验的新成员，我制定了
这一份 _A-Soul 上网冲浪指北_ 来规范指南的编辑。

## 目录

- [我想要写新条目！！](#内容维护)
- [我想要维护网页！！](#页面维护)

## 你需要什么

由于我们的内容审核和版本管理依赖 [git](https://git-scm.com/book/zh/v2), 
如果你对我们的指南编辑有兴趣，不论你是想编辑内容还是维护网站，你都
需要了解 [git](https://git-scm.com/book/zh/v2) 和
[GitHub Pull Request](https://docs.github.com/cn/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
的使用方法。

## 内容维护

内容维护并不像在评论区写小作文那样愉悦，我们对指南的内容准确及严谨程度有一定
的要求。

### 内容编辑要求

1. 请使用 Markdown 格式编辑。

如对 Markdown 语法不熟悉，可以查看这篇文章： 
[Markdown语法教程](https://markdown.com.cn/intro.html#markdown-%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F)

Markdown 编辑器非常自由，你可以任意选取，但是本人推荐使用 VSCode 加上预览插件，
可以方便的进行版本管理，也可以对自己如何实现的文本格式有清晰的了解。

2. 请使用如下格式进行百科内容编辑

```markdown
## 梗归类（比如电竞类）

### 梗名字 （比如“含金量”）

**变体**：梗的一些变体 （比如 “知道顶碗人的含金量吗”）

**来源**：梗的来源 （可以是直接的视频地址，或者文字解释渊源。）

**语义**：应该如何使用这个梗 （比如介绍 “含金量” 应该在什么情况下使用）

**应用**：梗的使用范例。
```

3. 请使用正确的中英文文案编辑格式

请查看 
[中文文案排版指北](https://github.com/mzlogin/chinese-copywriting-guidelines/blob/Simplified/README.md)
并依照文章规范进行文案编辑。

4. Commit 的信息必须直观准确

请对每一次修改都进行 commit，不要一次性提交上百行的修改。同时你应该给自己
每一次修改都标注上清晰明了的修改注释。你的 commit 应该能完整的概括你此次修改
的内容。

如果对如何编写清晰的 commit 没有头绪，你可以参考下面的模板：

```text
<type>(optional text): <descriptions>

- type: 修改类型
- optional text: 对修改类型的一些补充
- descriptions: 本次修改的信息
```

例子：

- 修改了一些语法错误：

```text
git commit -m "订正： 修复了圣嘉然条目的语法错误"
```

- 增加了新的条目：

```text
git commit -m "更新： 新增 “欧系给” 条目"
```

- 对条目进行了一些补充：

```text
git commit -m "更新(引用补充): 补充了向晚资料页的引用文章地址"
```

可以参考下列网站来获得更详细描述：

- [Udacity Git Commit Message Style Guide](udacity.github.io/git-styleguide/)
- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)

5. **（推荐，可选）** 一些编辑建议

- 本人推荐每隔 80 个字符即换行。非中文字数，而是字符。使用 VSCode 
或者 Vim 可以方便查阅。
- 推荐在自己编辑的内容页上方使用注释标注作者姓名。
- 所有的条目都最好有来源地址，可以是梗出现的帖子，也可以是视频 URL。

---

## 页面维护

请尽量先 fork， 在本地处理完成后，提交 PR 到仓库。

### 依赖安装

首先需要安装好 nodejs， npm， yarn。
[点击到 Node.js 下载页](https://nodejs.org/en/download/)。

> 也可以使用 docker 进行维护，使用命令： 
> `docker run --name asoul-wiki-page -it -p 3000:3000 node:alpine ash`
> 进入 docker 构建。

使用 [git](https://git-scm.com/book/zh/v2) 拉取仓库之后，执行命令下载依赖：

```bash
npm install
```

然后使用命令检查是否正确安装：

```bash
npx docusaurus --version
```

如果正确安装应该会有版本号显示。

### 如何预览

```bash
npx docusaurus start
```

在自定义的端口和自定义的地址监听：

```bash
npx docusaurus start --port 11451 --host 0.0.0.0
```

### 如何生成静态页面

```bash
npx docusaurus build
```

静态页面会生成在 `site` 文件夹里。
