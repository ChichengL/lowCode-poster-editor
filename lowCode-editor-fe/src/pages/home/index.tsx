import React from "react";
import TemplateList from "@components/template-list";

const templateData = [
	{
		id: 1,
		title: "腾讯影业模板",
		description: "一键生成专业影业海报",
		author: "乐高5632",
		views: 2838,
		thumbnail:
			"https://static.imooc-lego.com/upload-files/screenshot-889755.png",
	},
	{
		id: 2,
		title: "教育课程模板",
		description: "快速创建在线教育课程封面",
		author: "慕课学院",
		views: 1542,
		thumbnail:
			"https://static.imooc-lego.com/upload-files/screenshot-889755.png",
	},
	{
		id: 3,
		title: "电商促销模板",
		description: "三分钟生成商品促销海报",
		author: "电商达人007",
		views: 3567,
		thumbnail:
			"https://static.imooc-lego.com/upload-files/screenshot-889755.png",
	},
	{
		id: 4,
		title: "招聘海报模板",
		description: "企业招聘会专用模板设计",
		author: "HR联盟",
		views: 2289,
		thumbnail:
			"https://static.imooc-lego.com/upload-files/screenshot-889755.png",
	},
];

const App: React.FC = () => {
	return <TemplateList data={templateData} />;
};

export default App;
