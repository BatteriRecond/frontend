import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import MainNav from '../components/mainNav.js';
const { Header, Content, Footer } = Layout;

export default class ContactPage extends React.Component {

  render(){
    return(
      <Layout className="layout">
      <Header>
        <MainNav/>
      </Header>
      <Content className="site-layout-content">
        <Row>
          <Col>
            <Card title="ADDRESS">
              <p>
              Batterirecond Trading i Sverige AB <br/>
              Järnmalmsgatan 1 <br/>
              417 07 Göteborg
              </p>
            </Card>
          </Col>
          <Col>
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