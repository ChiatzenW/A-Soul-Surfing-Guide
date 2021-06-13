# A-Soul 评论区冲浪指南

[![网站状态](https://img.shields.io/website?down_color=red&down_message=%E5%BD%93%E5%89%8D%E7%A6%BB%E7%BA%BF&label=%E5%86%B2%E6%B5%AA%E6%8C%87%E5%8D%97%E7%BD%91%E7%AB%99%E7%8A%B6%E6%80%81&logo=GitBook&logoColor=lightgrey&up_color=brightgreen&up_message=%E5%BD%93%E5%89%8D%E5%9C%A8%E7%BA%BF&url=https%3A%2F%2Fwiki.asoul.org)](https://wiki.asoul.org)
![依赖](https://img.shields.io/node/v/@docusaurus/init)
![GitHub](https://img.shields.io/github/license/A-SOUL-GUIDE/A-Soul-Surfing-Guide?color=brightgreen&label=License&logo=creative%20commons&logoColor=brightgreen)

A-Soul 评论区冲浪指南是一个对 A-Soul 相关梗解释的手册。

使用 [Docusaurus 2](https://docusaurus.io/) 进行静态页面构建。

## 如何贡献

如果你对这本梗指南有兴趣，而且想要尝试编辑，
请先阅读 [A-Soul 评论区冲浪指北](https://wiki.asoul.org/A-Soul_Wiki_Edit_Guide)
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

然后再对文件进行编辑， 编辑时请同时请**注意**几点：

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

该仓库遵循 [CC-BY-SA-4.0](./LICENSE.txt)
