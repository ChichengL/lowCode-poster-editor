import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Layout, Spin } from "antd";
import styles from "./index.module.scss";
import GlobalDataStore from "../../store";

function TemplateDetail() {
	const { id = "" } = useParams();
	const template = GlobalDataStore().getTemplateById(Number(id));
	const navigate = useNavigate();
	const handleDownload = () => {
		if (!template) return;

		// 创建隐藏的a标签实现下载
		const link = document.createElement("a");
		link.href = template.coverImg;
		link.download = `${template.title}_${template.id}.png`; // 自动添加后缀
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);

		// 或者使用file-saver库（需先安装）
		// saveAs(template.coverImg, `${template.title}_${template.id}.png`);
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
										src={template.coverImg}
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
