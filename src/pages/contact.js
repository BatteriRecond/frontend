import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { MailOutlined, PhoneOutlined, HomeOutlined, EnvironmentOutlined } from '@ant-design/icons';
import MainNav from '../components/mainNav.js';
import '../css/contactPage.css'
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default class ContactPage extends React.Component {

  render(){
    return(
      <Layout className="layout">
      <Header>
        <MainNav/>
        <Typography>
          <Title>Kontakta oss</Title>
        </Typography>
      </Header>
      <Content className="site-layout-content mobileCss">
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },24]} justify="space-around" align="middle" style={{margin: '1em'}}>
          <Col xs={{ span: 24 }} sm={{ span: 24}} md={{ span: 11 }} lg={{ span: 11 }} className='colContactInfo'>
            <div className='cardContactInfo'>
              <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },24]} justify="space-around">
                <Col xs={{ span: 24 }} sm={{ span: 24}} md={{ span: 11 }} lg={{ span: 11 }} >
                  <h3> <PhoneOutlined /> &nbsp; Ring oss</h3>
                  <a href="tel:031-518139">Tel: 031- 51 81 39</a> <br/>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24}} md={{ span: 11 }} lg={{ span: 11 }} >
                  <h3> <MailOutlined /> &nbsp; Maila oss</h3>
                  <a href = "mailto: info@batterirecond.se">info@batterirecond.se</a> <br/>
                </Col>
              </Row>
            </div>
          </Col >
          <Col xs={{ span: 24 }} sm={{ span: 24}} md={{ span: 11 }} lg={{ span: 11 }} className='colContactInfo'>
          <div  className='cardContactInfo'>
            <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },24]} justify="space-around">
              <Col xs={{ span: 24 }} sm={{ span: 24}} md={{ span: 11 }} lg={{ span: 11 }} >
                <h3><HomeOutlined /> &nbsp; Besöksadress</h3>
                Järnmalmsgatan 1 <br/>
                Ringön
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 24}} md={{ span: 11 }} lg={{ span: 11 }} >
                <h3><EnvironmentOutlined /> &nbsp; Postadress</h3>
                Batterirecond Trading i Sverige AB <br/>
                Järnmalmsgatan 1 <br/>
                417 07 Göteborg
              </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row style={{bottom: 0}}>
          <Col span={24} className='mapcontainer'>
          <iframe
            title="googleMaps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8523.31586875771!2d11.9712984!3d57.7193629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2804896508cbe1dc!2sBatteri%20Recond%20Trading%20i%20Sverige%20AB!5e0!3m2!1ssv!2sse!4v1597842861621!5m2!1ssv!2sse"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen={true}
            aria-hidden="false"
            tabIndex="0"/>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center', bottom: 0}}>
        Copyright © 2020    Batterirecond Trading i Sverige AB, Järnmalmsgatan 1,  417 07 Göteborg, Tel:  031- 51 81 39
      </Footer>
    </Layout>
    )
  }
}