import React from "react";
import { Card, Row, Col, Button } from "antd";
import styles from "./index.module.scss";
import { TemplateItem } from "../../types";
import { useNavigate } from "react-router";

interface TemplateListProps {
	data: TemplateItem[];
}

const TemplateList = ({ data }: TemplateListProps) => {
	const navigate = useNavigate();
	return (
		<Row gutter={[24, 24]}>
			{data.map((item) => (
				<Col key={item.id} xs={24} sm={12} md={8} lg={6} xl={6}>
					<Card
						hoverable
						className={styles.cardWrapper}
						cover={
							<div className={styles.imageContainer}>
								<img
									alt={item.title}
									src={item.coverImg}
									className={styles.image}
								/>
								<div className={styles.overlay}>
									<Button
										type="primary"
										onClick={() => navigate(`/template/${item.id}`)}>
										使用该模版创建
									</Button>
								</div>
							</div>
						}
						actions={[
							<Button
								type="primary"
								className={styles.cardButton}
								key={item.id}
								onClick={() => navigate(`/editor?${item.id}`)}>
								立即使用
							</Button>,
						]}>
						<Card.Meta title={item.title} description={item.description} />
						<div className={styles.cardMeta}>
							<span>作者：{item.author}</span>
							<span>浏览：{item.copiedCount}</span>
						</div>
					</Card>
				</Col>
			))}
		</Row>
	);
};

export default TemplateList;
