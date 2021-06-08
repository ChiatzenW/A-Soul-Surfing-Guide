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
					title: "Docs",
					items: [
						{
							label: "Tutorial",
							to: "/",
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
};
