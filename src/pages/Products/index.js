import React from "react";
import {
  Card,
  Carousel,
  Col,
  ConfigProvider,
  Layout,
  Row,
  Typography,
} from "antd";

import Menu from "../../components/Menu";
import ProductContent from "../../components/ProcuctContent";
import Footer from "../../components/Footer";

import "./style.css";
import productList from "./products";
import { useMediaQuery } from "react-responsive";
import { VideoAd } from "../../components/Advertisement";
import { Container } from "../../components/style";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const listItemExtra = (imgSrcs) => (
  <Carousel>
    {imgSrcs.map((imgSrc, index) => (
      <div key={index}>
        <img className="product-img" alt={`img` + index} src={imgSrc} />
      </div>
    ))}
  </Carousel>
);

export default function ProductsPage() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <Layout className="layout">
      <Header className="header">
        <Menu />
      </Header>
      <Content className="content">
        <ConfigProvider
          theme={{
            token: {
              colorText: "white",
              fontSizeHeading2: isMobile ? "30px" : "40px",
            },
          }}
        >
          <Typography className="typography-products">
            <Title level={2}>WATT YOU NEED!</Title>
            <Paragraph>
              Hos oss finner ni kunnig personal och prisvärda produkter. <br />
              Vi har de mesta inom branschen.
            </Paragraph>
          </Typography>
        </ConfigProvider>
        <Container>
          {!isMobile && <VideoAd />}
          <Row gutter={[10, 8]} className="product-container">
            {productList.map((item) => (
              <Col xs={24} sm={24} md={8} lg={8} key={item.title}>
                <Card
                  bordered={false}
                  className="product-card"
                  cover={listItemExtra(item.imgSrcs)}
                >
                  <ConfigProvider
                    theme={{ token: { fontSizeHeading4: "22px" } }}
                  >
                    <Title level={4}>{item.title}</Title>
                  </ConfigProvider>
                  <ProductContent item={item} />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Content>
      <Footer />
    </Layout>
  );
}
