import React from "react";
import styles from "index.module.scss";
import { Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import TemplateDetail from "../templateDetail";
function Home() {
  return (
    <div className={styles["container"]}>
      <Layout style={{ background: "#fff" }}>
        <Header className={styles["header"]}>
          <div className="page-title">banner</div>
        </Header>
        <Content className={styles["content"]}>
          <div className={styles["content-container"]}>
            <TemplateDetail></TemplateDetail>
          </div>
        </Content>
        <Footer>footer</Footer>
      </Layout>
    </div>
  );
}

export default Home;
