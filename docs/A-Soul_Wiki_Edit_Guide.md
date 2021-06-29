---
sidebar_position: 99
---
# A-Soul 上网冲浪编辑指北

为了防止指南被严重破坏，以及帮助对静态页面没有编辑经验的新成员，我制定了
这一份 _A-Soul 上网冲浪指北_ 来规范指南的编辑。

## 如果你只想提交内容...

因为网站编辑需要的门槛较高，如果你只是想写新条目，我们现在提供下述方法：

你可以点击 GitHub 上方 issues 页面，点击右边的 New issues 绿色按钮。在弹出的新菜单
中，选择新条目选项，你会看到一个页面编辑框，请在标题的 “【新条目】”
后方空一格，填写你要补充的内容名字。

然后请不要删除 `****` 里面的内容，你只需要修改每个小标题底下的解释文字就可以了。

例如：

```text
**语义**（这里不要碰）

这个梗是什么意思......（你只需要删除这行解释文字就行，然后加上自己的内容）
```

最后点击右下角的 `Submit new issues` 按钮提交即可，我们会在有空的时候增加内容。

## 在你贡献之前...

由于我们的内容审核和版本管理依赖 [git](https://git-scm.com/book/zh/v2), 
如果你想对我们仓库直接修改，不论你是想编辑内容还是维护网站，你都
需要了解 [git](https://git-scm.com/book/zh/v2) 和
[GitHub Pull Request](https://docs.github.com/cn/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
的使用方法。

修改前依照如下步骤进行贡献：

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

## 你想做什么

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="entry"
  values={[
    {label: '我想写新条目！', value: 'entry'},
    {label: '我想维护网页！', value: 'pages'},
  ]}>
<TabItem value="entry">

## 内容维护

内容维护并不像在评论区写小作文那样愉悦，我们对指南的内容准确及严谨程度有一定
的要求。

目录：

- [要求](#内容编辑要求)
- [教程](#内容编辑教程)

### 内容编辑要求

1. 请使用 Markdown 格式编辑。

如对 Markdown 语法不熟悉，可以查看这篇文章： 
[Markdown语法教程](https://markdown.com.cn/intro.html#markdown-%E6%98%AF%E4%BB%80%E4%B9%88%EF%BC%9F)

Markdown 编辑器如何选择我们没有限制，你可以任意选取，如果你是第一次使用你可以尝试 
[typora](https://typora.io)。 但是本人推荐使用 VSCode 加上预览插件，
可以方便的进行版本管理，也可以对文本样式的实现有清晰的了解。

2. 请使用如下格式进行百科内容编辑(请注意换行是两次回车)

```markdown
# 梗名字 （比如“含金量”）

## 来源

梗的来源 （可以是直接的视频地址，或者文字解释渊源。）

## 变体

梗的一些变体 （比如 “知道顶碗人的含金量吗”）

## 语义

这个梗是什么意思，是贬义还是褒义

## 应用

梗的使用范例。
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

- [Udacity Git Commit Message Style Guide](https://udacity.github.io/git-styleguide/)
- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)

5. **（推荐，可选）** 一些编辑建议

- 本人推荐每隔 80 个字符即换行。非中文字数，而是字符。使用 VSCode 
或者 Vim 可以方便查阅。
- 推荐在自己编辑的内容页上方使用注释标注作者姓名。
- 所有的条目都最好有来源地址，可以是梗出现的帖子，也可以是视频 URL。

### 内容编辑教程

#### 文件结构

条目都应该放在 `docs` 文件夹下， 并对你的条目进行分类, 放进次级文件夹里，还可以继续
给条目分类，比如： 含金量可以属于 LOL 分类，同时 LOL 属于电竞分类，那么你的条目就应该
放在：

```text
docs/
  |--电竞/
    |--LOL/
      |--含金量.md
```

#### 文件抬头

在 markdown 文件的开头加入两个 `---` 来加入对这个文件的更多描述。

为了声明你的条目编辑名义权，我推荐你在条目的抬头备注上你的名字。不要写真名，请注意
保护隐私，写上昵称就可以了。也可以附注电子邮箱。

用如下例子的格式进行编写，即 YAML 语法：

```yaml
Author: Avava Ava(example@example.com)
```

其次，请附注创建日期以及最后一次编辑日期：

```yaml
CreateAt: '2021/06/07 13:30'
LastEditAt: '2021/06/08 14:28'
```

请务必写上文章的标题：

```yaml
title: 口水黄豆
```

如果你愿意，加上该条目的描述就更加完美了：

```yaml
descriptions: 口水黄豆是顶碗人很喜欢用的一个表情...
```

最后你可以再加上一些标签帮助别人找到这个条目（不要加太多，一定要相关）：

```yaml
keywords:
	- 向晚
	- 下雨了
	- 口水黄豆
```

完成后你的文件应该像这样：

```markdown
---
Author: Avava Ava(example@example.com)
CreateAt: '2021/06/07 13:30'
LastEditAt: '2021/06/08 14:28'
title: 口水黄豆
descriptions: 口水黄豆是顶碗人很喜欢用的一个表情...
keywords:
	- 向晚
	- 下雨了
	- 口水黄豆
---
# 口水黄豆

## 来源
正文...
```

### 提交修改

修改完之后你需要使用 git 把修改存好并提交到你自己的仓库，然后在 GitHub 
发起 Pull Request 请求，我们会尽快检查你的文字并合并到网站中。

```console
git add ./docs/口水黄豆.md
git commit -m "更新： 新增口水黄豆条目"
git push origin master
```
</TabItem>
<TabItem value="pages">

## 页面维护

:::caution

请尽量先 fork， 在本地处理完成后，提交 PR 到仓库。

:::

:::tip

提交 commit 之前先运行测试，确认测试成功后再提交 commit，这是一个好习惯。
这样就不用反复提交再修复。

:::

你可以选择 [本地构建](#本地构建)，或者使用 [docker](#docker-构建) 构建：

<Tabs
  defaultValue="local"
  values={[
    {label: '本地构建', value: 'local'},
    {label: 'Docker', value: 'docker'},
  ]}>

<TabItem value="local">

### 本地构建

首先需要安装好 nodejs， npm， yarn。
[点击到 Node.js 下载页](https://nodejs.org/en/download/)。

> 也可以使用 docker 进行维护，使用命令： 
> `docker run --name asoul-wiki-page -it -p 3000:3000 node:alpine ash`
> 进入 docker 构建。。

使用 [git](https://git-scm.com/book/zh/v2) 拉取仓库之后，执行命令下载依赖：

```bash
npm install
```

然后使用命令检查是否正确安装：

```bash
npx docusaurus --version
```

如果正确安装应该会有版本号显示。

#### 如何预览

```bash
npx docusaurus start
```

在自定义的端口和自定义的地址监听：

```bash
npx docusaurus start --port 11451 --host 0.0.0.0
```

#### 如何生成静态页面

```bash
npx docusaurus build
```

可以运行命令检查渲染后的页面：

```bash
npm run serve
```

静态页面会生成在 `site` 文件夹里。
</TabItem>
<TabItem value="docker">

### Docker 构建

:::note

此处使用的是 node:alpine 镜像，在本文撰写时详细版本号为 node:16.3-alpine。

:::

如果想要快速测试及构建，你可以尝试使用 [docker](https://docker.com)。

根据官网的指引下载安装好 docker 之后， 使用下面的命令拉取 node 镜像：

```console
docker pull node:alpine
```

然后运行 node 镜像：

```console
docker run --name asoul-guide-book -it -p 3000:3000 node:alpine ash
```

> 命令解释： 
> 
> - `docker`: 运行 docker 的 cli 软件
> - `run`: 传递 run 参数，让 docker 的 cli 启动镜像
> - `--name asoul-guide-book` : 给当前我们运行的这个实例命名为 `asoul-guide-book`
> - `-it`: 让这个镜像给我们提供一个可以交互的终端
> - `-p 3000:3000`： 把我们宿主机的 3000 端口绑定到内部的 3000 端口，你可以想象
一条隧道，当我们访问本地 3000 端口时，会通过这条管道把数据传输到镜像里面的 3000
端口。
> - `node:alpine`： 我们要用到的镜像
> - `ash`： 启动镜像时打开 `ash` 这个程序。`ash` 是一个终端程序，通过他才能进行
下面的其他操作。

进入 docker 之后，如果没有错误，你应该会看到下面这样的提示符：

```console
/#
```

然后输入命令：

```console
apk add git python3 build-base
```

等东西安装好之后，使用 git 把我们的仓库源码拉取下来并进入文件夹：

```console
git clone https://github.com/A-Soul-Guide/A-Soul-Surfing-Guide

cd A-Soul-Surfing-Guide
```

然后我们安装 Node.js 依赖：

```console
npm install
```

安装好之后就可以继续像上述的 [本地构建](#本地构建) 章节中继续构建操作了。

如果你想操作本地的目录的话，在启动镜像时加入一个新的参数：

```console
docker run \
    --name asoul-guide-book \
    -it \ 
    -p 3000:3000 \ 
    -v $PWD:/data \ 
    node:alpine ash
```

这里的 $PWD 可以获取你的当前所在目录，你也可以自己写进去，但是
必须是绝对路径。docker 会把冒号左边的路径挂在到镜像里的 /data
文件夹里，你对 /data 的操作也会同步到宿主机的文件夹里。

然后运行：

```
apk add python3 build-base
```

不需要再拉取仓库所以不用下载 git 了。

---

如果你觉得每次 build 特别慢的话，我们有已经
[构建好缓存的镜像](https://hub.docker.com/r/avimitin/asoul-guide-build-env)
提供使用。

使用方法和如上描述类似，只是你不能挂载 `node_modules` 进入镜像，否则会
编译失败。

### Docker-Compose

为了让网页检查更加简单，我们也提供了 
[docker-compose 配置文件](https://github.com/A-Soul-Guide/A-Soul-Surfing-Guide/blob/master/docker-compose.yml)。

你需要安装 [docker-compose](https://docs.docker.com/compose/install/)。然后
在项目路径下执行命令：

```console
docker-compose up
```

就会自动的下载好依赖，进入目录，并且编译静态文件，启动服务器了。等待编译
结束，访问 `http://localhost:3000` 即可。

#### 自定义

因为镜像并不会随时更新，如果有遇到 node 版本与镜像不匹配的情况，你可以修改
`docker-compose.yml` 来进行本地编译。

首先删除下面这行

```diff
- image: avimitin/asoul-guide-build-env:latest
```

然后在这一行同样的位置，补充上

```diff
+ build: ./
```

然后执行 `docker-compose build --no-cache` 来运行编译任务。

编译结束后继续使用 `docker-compose up` 即可。

</TabItem>
</Tabs>
</TabItem>
</Tabs>

