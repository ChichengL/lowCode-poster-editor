import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import Home from "@pages/home";
import Editor from "@pages/editor";
import TemplateDetail from "@pages/templateDetail";
import { SearchOutlined } from "@ant-design/icons";
import { Layout, Input, Button } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import styles from "./index.module.scss";
const App: React.FC = () => {
	return (
		<Layout className={styles.appLayout}>
			<Header className={styles.mainHeader}>
				<h2 className={styles.logo}>慕课乐高</h2>
				<div className={styles.searchArea}>
					<Input.Search
						placeholder="搜索一下，快速找模板"
						prefix={<SearchOutlined />}
						className={styles.searchInput}
					/>
					<Button type="primary">登录</Button>
				</div>
			</Header>

			<Content className={styles.contentArea}>
				<Router>
					<Routes>
						<Route path="/" element={<Navigate to="/home" replace />} />
						<Route path="/home" element={<Home />} />
						<Route path="/editor" element={<Editor />} />
						<Route path="/template/:id" element={<TemplateDetail />} />
					</Routes>
				</Router>
			</Content>

			<Footer className={styles.mainFooter}>这是页脚</Footer>
		</Layout>
	);
};

export default App;
