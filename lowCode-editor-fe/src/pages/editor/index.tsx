import { Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";

const Editor: React.FC = () => {
	return (
		<Layout className={styles["container"]}>
			<Layout.Header className={styles["header"]}>编辑器</Layout.Header>
			<Layout className={styles["content"]}>
				{/* 左侧边栏 */}
				<Layout.Sider width={200} className={styles["sider-left"]}>
					组件列表
				</Layout.Sider>
				{/* 中间内容区域 */}
				<Layout.Content className={styles["canvas"]}>
					<p>画布区域</p>
					<div id="canvas-area" className="preview-list"></div>
				</Layout.Content>
				{/* 右侧边栏 */}
				<Layout.Sider width={200} className={styles["sider-right"]}>
					属性配置
				</Layout.Sider>
			</Layout>
		</Layout>
	);
};

export default Editor;
