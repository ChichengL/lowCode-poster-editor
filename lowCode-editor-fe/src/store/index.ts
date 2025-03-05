import { create } from "zustand";

export interface UserStoreProps {
	isLogin: boolean;
	userName?: string;
}

export interface TemplateStoreProps {
	id: number;
	title: string;
	coverImg: string;
	author: string;
	description: string;
	copiedCount: number;
}

export interface GlobalDataStoreProps {
	user: UserStoreProps;
	templates: TemplateStoreProps[];
	setUser: (user: UserStoreProps) => void;
	setTemplates: (templates: TemplateStoreProps[]) => void;
	login: () => void;
	logout: () => void;
	getTemplateById: (id: number) => TemplateStoreProps | undefined;
}

const templateData = [
	{
		id: 1,
		title: "腾讯影业模板",
		description: "一键生成专业影业海报",
		author: "乐高5632",
		copiedCount: 2838,
		coverImg:
			"https://static.imooc-lego.com/upload-files/screenshot-889755.png",
	},
	{
		id: 2,
		title: "教育课程模板",
		description: "快速创建在线教育课程封面",
		author: "慕课学院",
		copiedCount: 1542,
		coverImg: "http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png",
	},
	{
		id: 3,
		title: "电商促销模板",
		description: "三分钟生成商品促销海报",
		author: "电商达人007",
		copiedCount: 3567,
		coverImg:
			"https://static.imooc-lego.com/upload-files/screenshot-889755.png",
	},
	{
		id: 4,
		title: "招聘海报模板",
		description: "企业招聘会专用模板设计",
		author: "HR联盟",
		copiedCount: 2289,
		coverImg:
			"https://static.imooc-lego.com/upload-files/screenshot-889755.png",
	},
	{
		id: 5,
		title: "每日分享",
		description: "分享模版",
		author: "w",
		copiedCount: 2289,
		coverImg:
			"https://static.imooc-lego.com/upload-files/screenshot-682056.png",
	},
];

const GlobalDataStore = create<GlobalDataStoreProps>((set, get) => ({
	user: {
		isLogin: false,
	},
	templates: templateData,
	setUser: (user: UserStoreProps) => set({ user }),
	setTemplates: (templates: TemplateStoreProps[]) => set({ templates }),
	login: () => set({ user: { isLogin: true, userName: "vvvuk" } }),
	logout: () => set({ user: { isLogin: false } }),
	getTemplateById: (id: number) => get().templates.find((u) => u.id === id),
}));

export default GlobalDataStore;
