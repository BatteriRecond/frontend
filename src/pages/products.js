import React from 'react';
import { Layout, Typography } from 'antd';
import MainNav from '../components/mainNav.js';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default class ProductsPage extends React.Component {

  render(){
    return(
      <Layout className="layout">
      <Header>
        <MainNav/>
        <Typography>
          <Title>Produkter</Title>
        </Typography>
      </Header>
      <Content className="site-layout-content">
        Produkter
      </Content>
      <Footer style={{ textAlign: 'center', bottom: 0}}>
        Copyright © 2020    Batterirecond Trading i Sverige AB, Järnmalmsgatan 1,  417 07 Göteborg, Tel:  031- 51 81 39
      </Footer>
    </Layout>
    )
  }
}