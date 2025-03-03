import React from "react";
import { Layout, Input, Button, Card, Col, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import TemplateList from "@/components/TemplateList";
import styles from "./App.module.scss";

const { Header, Content, Footer } = Layout;

const templateData = [
  {
    id: 1,
    title: "腾讯影业模板",
    description: "一键生成专业影业海报",
    author: "乐高5632",
    views: 2838,
    thumbnail: "https://place-holder.com/300x200",
  },
  {
    id: 2,
    title: "教育课程模板",
    description: "快速创建在线教育课程封面",
    author: "慕课学院",
    views: 1542,
    thumbnail: "https://place-holder.com/300x200",
  },
  {
    id: 3,
    title: "电商促销模板",
    description: "三分钟生成商品促销海报",
    author: "电商达人007",
    views: 3567,
    thumbnail: "https://place-holder.com/300x200",
  },
  {
    id: 4,
    title: "招聘海报模板",
    description: "企业招聘会专用模板设计",
    author: "HR联盟",
    views: 2289,
    thumbnail: "https://place-holder.com/300x200",
  },
];

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
        <div className={styles.contentHeader}>
          <h3>海量精彩设计一键生成</h3>
          <p className={styles.subText}>只需替换文字和图片，一键自动生成H5</p>
        </div>

        <TemplateList data={templateData} />
      </Content>

      <Footer className={styles.mainFooter}>{/* 页脚实现... */}</Footer>
    </Layout>
  );
};

export default App;
