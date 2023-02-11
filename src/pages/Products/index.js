import {
  Card,
  Carousel,
  Col,
  ConfigProvider,
  Grid,
  Layout,
  Row,
  Typography,
} from "antd";
import React from "react";
import { VideoAd } from "../../components/Advertisement";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import ProductContent from "../../components/ProcuctContent";
import { Container } from "../../components/style";
import productList from "./products";
import "./style.css";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const listItemExtra = (imgSrcs) => (
  <Carousel>
    {imgSrcs.map((imgSrc, index) => (
      <div key={index} className="product-img-container">
        <img className="product-img" alt={`img` + index} src={imgSrc} />
      </div>
    ))}
  </Carousel>
);

export default function ProductsPage() {
  const { sm, xl } = useBreakpoint();
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
              fontSizeHeading2: !sm ? "30px" : "40px",
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
          {xl && <VideoAd />}
          <Row gutter={[10, 8]} className="product-container">
            {productList.map((item) => (
              <Col xs={24} sm={24} md={12} lg={12} xl={8} key={item.title}>
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
