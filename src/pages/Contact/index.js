import React from "react";
import {
  Layout,
  Typography,
  Card,
  ConfigProvider,
  Descriptions,
  Row,
  Col,
} from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import Menu from "../../components/Menu";
import "./style.css";
import Footer from "../../components/Footer";
import { Container } from "../../components/style";

const { Header, Content } = Layout;
const { Title } = Typography;

export default class ContactPage extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="header">
          <Menu />
        </Header>
        <Content className="contact-content">
          <Row className="contact-row">
            <Col xs={24} sm={24} md={24} lg={12} className="contact-container">
              <Card
                title={<h4> Kontakt</h4>}
                bordered={false}
                className="contact-card"
              >
                <p>
                  <PhoneOutlined /> &nbsp;{" "}
                  <i>
                    <a href="tel:031-518139">031- 51 81 39</a>
                  </i>
                </p>
                <p>
                  {" "}
                  <MailOutlined /> &nbsp;{" "}
                  <a href="mailto: info@batterirecond.se">
                    info@batterirecond.se
                  </a>
                </p>
              </Card>
              <Card
                title={<h4> Adress</h4>}
                bordered={false}
                className="contact-card"
              >
                <p>
                  <EnvironmentOutlined /> &nbsp;Gjutjärnsgatan 10
                  <br />
                  417 07 Göteborg
                  <br />
                  Västra Götalands län
                </p>
              </Card>
              <Card
                title={<h4> Om Företaget</h4>}
                bordered={false}
                className="contact-card"
              >
                <p>
                  Batteri Recond Trading i Sverige AB <br />
                  Org.nr: 556571-2360
                </p>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} className="maps-container">
              <iframe
                title="googleMaps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2130.8959886453554!2d11.963068816007741!3d57.71822448112439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff49f0e834d05%3A0x5bea3f4af465aab9!2sGjutj%C3%A4rnsgatan%2010%2C%20417%2007%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1611486472692!5m2!1ssv!2sse"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex="0"
              />
            </Col>
          </Row>
        </Content>
        <Footer />
      </Layout>
    );
  }
}
