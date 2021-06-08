/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: "A-Soul 评论区冲浪指南",
	tagline: "A-Soul 评论区冲浪指南",
	url: "https://wiki.asoul.org",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "A-Soul Surfing Guide Editors",
	projectName: "A-Soul 评论区冲浪指南",
	themeConfig: {
		navbar: {
			title: "A-Soul 评论区冲浪指南",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "doc",
					docId: "index",
					position: "left",
					label: "首页",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "成员链接",
					items: [
						{
							label: "嘉然今天吃什么",
							to: "https://space.bilibili.com/672328094",
						},
						{
							label: "乃琳Queen",
							to: "https://space.bilibili.com/672342685",
						},
						{
							label: "贝拉kira",
							to: "https://space.bilibili.com/672353429",
						},
						{
							label: "向晚大魔王",
							to: "https://space.bilibili.com/672346917",
						},
						{
							label: "珈乐Carol",
							to: "https://space.bilibili.com/351609538",
						},
					],
				},
				{
					title: "Reference",
					items: [
						{
							label: "A-Soul_Official",
							to: "https://space.bilibili.com/703007996/dynamic",
						},
						{
							label: "Docusaurus",
							to: "https://docusaurus.io",
						},
						{
							label: "Source Code",
							to: "https://github.com/A-Soul-Guide/A-Soul-Surfing-Guide",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Sakifore. Built with Docusaurus.`,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					path: "./docs",
					routeBasePath: "/",
				},
				blog: false,
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],

	plugins: [
		[
			"@easyops-cn/docusaurus-search-local",
			{
				hashed: true,
				language: ["en", "zh"],
				indexPages: true,
				indexBlog: false,
				highlightSearchTermsOnTargetPage: true,
			},
		],
	],
};
