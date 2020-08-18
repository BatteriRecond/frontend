import React from 'react';
import { Layout, Row, Col, Card, Typography } from 'antd';
import MapContainer from '../components/googleMaps.js'
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
      <Content className="site-layout-content contactContent">
        <Row>
          <Col span={24} className='mapcontainer'>
            <MapContainer />
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{margin:'auto'}} justify="space-around" align="middle">
          <Col span={12} >
            <Card title="ADDRESS" className='contactCard'>
              <p>
              Batterirecond Trading i Sverige AB <br/>
              Järnmalmsgatan 1 <br/>
              417 07 Göteborg
              </p>
            </Card>
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