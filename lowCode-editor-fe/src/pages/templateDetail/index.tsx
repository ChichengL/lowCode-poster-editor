import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Layout, Spin } from "antd";
import styles from "./index.module.scss";

const templateData = [
	{
		id: 1,
		thumbnail:
			"https://static.imooc-lego.com/upload-files/screenshot-889755.png",
		title: "模板1",
	},
	{
		id: 2,
		thumbnail:
			"https://static.imooc-lego.com/upload-files/screenshot-889755.png",
		title: "模板2",
	},
	{
		id: 3,
		thumbnail:
			"https://static.imooc-lego.com/upload-files/screenshot-889755.png",
		title: "模板3",
	},
	{
		id: 4,
		thumbnail:
			"https://static.imooc-lego.com/upload-files/screenshot-889755.png",
		title: "模板4",
	},
];

function TemplateDetail() {
	const { id = "" } = useParams();
	const template = templateData.find((t) => t.id === parseInt(id));
	const navigate = useNavigate();
	const handleDownload = () => {
		if (!template) return;

		// 创建隐藏的a标签实现下载
		const link = document.createElement("a");
		link.href = template.thumbnail;
		link.download = `${template.title}_${template.id}.png`; // 自动添加后缀
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);

		// 或者使用file-saver库（需先安装）
		// saveAs(template.thumbnail, `${template.title}_${template.id}.png`);
	};
	return (
		<div className={styles.templateDetail}>
			<Layout className={styles.layout}>
				<Spin tip="加载中..." spinning={!template}>
					{template && (
						<Layout.Content className={styles.content}>
							<div className={styles.leftPanel}>
								<Card className={styles.templateCard}>
									<img
										alt={template.title}
										src={template.thumbnail}
										className={styles.image}
									/>
								</Card>
							</div>

							<div className={styles.rightPanel}>
								<div className={styles.buttonGroup}>
									<Button
										type="primary"
										size="large"
										block
										onClick={() => navigate(`/editor?${template.id}`)}>
										使用模板
									</Button>
									<Button size="large" block onClick={handleDownload}>
										下载封面
									</Button>
								</div>
							</div>
						</Layout.Content>
					)}
				</Spin>
			</Layout>
		</div>
	);
}

export default TemplateDetail;
