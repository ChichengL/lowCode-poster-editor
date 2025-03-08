import React from "react";
import {
	RouterProvider,
	createBrowserRouter,
	Outlet,
	useMatches,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Layout, Input, Button, message } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import styles from "./index.module.scss";
import Home from "@pages/home";
import Editor from "@pages/editor";
import TemplateDetail from "@pages/templateDetail";
import { useUserStore } from "./store";

const RootLayout = () => {
	// 获取当前匹配的路由信息
	const matches = useMatches();
	const { login, logout, isLogin } = useUserStore();

	// 从最后一个匹配项中获取 meta
	const { meta } =
		(matches[matches.length - 1]?.handle as {
			meta?: { withHeader: boolean };
		}) || {};

	// 使用默认值确保安全
	const withHeader = meta?.withHeader ?? true;

	const handleClick = () => {
		if (isLogin) {
			logout();
			message.success("退出登录");
		} else {
			login();
			message.success("登录成功");
		}
	};

	return (
		<Layout className={styles.appLayout}>
			{withHeader && (
				<Header className={styles.mainHeader}>
					<h2 className={styles.logo}>慕课乐高</h2>
					<div className={styles.searchArea}>
						<Input.Search
							placeholder="搜索一下，快速找模板"
							prefix={<SearchOutlined />}
							className={styles.searchInput}
						/>
						<Button type="primary" onClick={handleClick}>
							{isLogin ? "退出登录" : "登录"}
						</Button>
					</div>
				</Header>
			)}

			<Content className={styles.contentArea}>
				<Outlet /> {/* 使用Outlet代替原来的Routes */}
			</Content>

			<Footer className={styles.mainFooter}>这是页脚</Footer>
		</Layout>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Navigate to="/home" replace />,
			},
			{
				path: "home",
				element: <Home />,
				// 修改这里 ▼
				handle: {
					meta: {
						withHeader: true,
					},
				},
			},
			{
				path: "editor",
				element: <Editor />,
				// 修改这里 ▼
				handle: {
					meta: {
						withHeader: false,
					},
				},
			},
			{
				path: "template/:id",
				element: <TemplateDetail />,
				// 修改这里 ▼
				handle: {
					meta: {
						withHeader: true,
					},
				},
			},
		],
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
