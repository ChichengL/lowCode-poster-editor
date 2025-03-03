import { Layout } from "antd";
import React from "react";
import styles from "./index.module.scss";

function Editor() {
  return (
    <Layout className={styles["container"]}>
      <Layout.Header>编辑器</Layout.Header>
      <Layout.Content>
        <Layout.Content>
          <Layout.Sider>组件列表</Layout.Sider>
          <Layout.Content>编辑器</Layout.Content>
          <Layout.Sider>属性配置</Layout.Sider>
        </Layout.Content>
      </Layout.Content>
    </Layout>
  );
}

export default Editor;
