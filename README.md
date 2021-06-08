# A-Soul 评论区冲浪指南

[![网站状态](https://img.shields.io/website?down_color=red&down_message=%E7%BD%91%E7%AB%99%E6%97%A0%E6%B3%95%E9%93%BE%E6%8E%A5&style=plastic&up_color=green&up_message=%E7%BD%91%E7%AB%99%E9%93%BE%E6%8E%A5&url=https%3A%2F%2Fwiki.asoul.org)](https://wiki.asoul.org)
![依赖](https://img.shields.io/node/v/@docusaurus/init)
![许可](https://img.shields.io/github/license/sakifore/ASoul_meme_explanation)

A-Soul 评论区冲浪指南是一个对 A-Soul 相关梗解释的手册。

使用 [Docusaurus 2](https://docusaurus.io/) 进行静态页面构建。

## 如何贡献

如果你对这本梗指南有兴趣，而且想要尝试编辑，
请先阅读 [A-Soul 评论区冲浪指北](./docs/A-Soul_Wiki_Edit_Guide.md)
了解编辑要求和编辑依赖。

对要求有所了解后，可以依照如下步骤进行贡献：

1. `fork` 仓库

点击右上角的 `fork` 按钮将该仓库 fork 到你的账户下。

2. 拉取仓库到本地并编辑

拉取仓库:

```bash
git clone https://github.com/{{你的用户名}}/ASoul-Surfing-Guide
```

新建分支：

```bash
git checkout -b {{NEW_CHANGE}}

# 例子
git checkout -b new-artical
```

然后对 `asoul.md` 文件进行编辑， 编辑时请尽量依照下章梗百科格式的要求。

同时请**注意**几点：

- 请不要编辑 `README.md`。
- 如果你是内容编辑人员，请在 `./docs` 文件夹内工作，不要编辑其他文件
- 如果有必要编辑网站的设置，请先发起 issues 进行讨论。
- 请不要编辑 `LICENSE.txt`

3. 提交

```bash
git add . && git commit -m "你做了什么修改"
git push origin master
```

4. 提交 PR

点击 Pull Request, 将分支提交到这个仓库。

## 许可声明

该仓库遵循 [MIT LICENSE](./LICENSE.txt)
