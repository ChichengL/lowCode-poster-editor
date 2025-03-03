import React from "react";
import styles from "./index.module.scss";
import { Col, Row } from "antd";

interface TemplateListProps {
  list: any[];
}
function TemplateList({ list }: TemplateListProps) {
  return (
    <div className={styles["list"]}>
      <Row gutter={16}>
        {list.map((item, key) => (
          <Col span={6} key={key}></Col>
        ))}
      </Row>
    </div>
  );
}

export default TemplateList;
