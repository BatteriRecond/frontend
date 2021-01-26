import React from 'react';
import { Layout, Row, Col, Typography, Card } from 'antd';
import { MailOutlined, PhoneOutlined, HomeOutlined, EnvironmentOutlined } from '@ant-design/icons';
import MainNav from '../components/mainNav.js';
import '../css/contactPage.css'
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default class ContactPage extends React.Component {

  render () {
    return (
      <Layout className="layout">
        <Header className="contact-header">
          <MainNav />
          <Typography className="typography-contact">
            <Title className="typography-contact-title">Kontakta oss</Title>
          </Typography>
        </Header>
        <Content className="site-layout-content mobileCss contact-content">
          <Row gutter={[ 0, 8 ]} justify="center" align="top">
            <Col xs={{ span: 24 }} sm={{ span: 23 }} md={{ span: 11 }} lg={{ span: 7 }}>
              <Card title={<h4> Kontakt</h4>} bordered={false} className="contact-card">
                <p><PhoneOutlined /> &nbsp; <i><a href="tel:031-518139">031- 51 81 39</a></i></p>
                <p> <MailOutlined /> &nbsp; <a href="mailto: info@batterirecond.se">info@batterirecond.se</a></p>
              </Card>
            </Col>
            <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 7 }}>
              <Card title={<h4>  Besöksadress</h4>} bordered={false} className="contact-card">
                <p> <HomeOutlined /> &nbsp; Gjutjärnsgatan 10 <br />
                  Ringön
              </p>
              </Card>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 23 }} md={{ span: 11 }} lg={{ span: 7 }}>
              <Card title={<h4>  Adress</h4>} bordered={false} className="contact-card">
                <p> <EnvironmentOutlined /> &nbsp; Batterirecond Trading i Sverige AB <br />
                  Gjutjärnsgatan 10 <br />
                  417 07 Göteborg
              </p>
              </Card>
            </Col>
          </Row>
          <Row style={{ bottom: 0 }} align="bottom">
            <Col span={24} className='mapcontainer'>
              <iframe
                title="googleMaps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2130.8959886453554!2d11.963068816007741!3d57.71822448112439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff49f0e834d05%3A0x5bea3f4af465aab9!2sGjutj%C3%A4rnsgatan%2010%2C%20417%2007%20G%C3%B6teborg!5e0!3m2!1ssv!2sse!4v1611486472692!5m2!1ssv!2sse"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex="0" />
            </Col>
          </Row>
        </Content>
        <Footer>
          Copyright © 2021    Batterirecond Trading i Sverige AB, Gjutjärnsgatan 10,  417 07 Göteborg, Tel:  031- 51 81 39
      </Footer>
      </Layout>
    )
  }
}