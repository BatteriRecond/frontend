import React from 'react';
import { Layout, Typography, Button } from 'antd';
import './App.css';
import MainNav from './components/mainNav.js';
import Main from './pages/main.js';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <MainNav/>
        <Typography style={{textAlign:'center', color: 'white', paddingTop: '2em'}}>
          <Title style={{ color: 'white'}}>Välkommen!</Title>
          <Paragraph style={{color: 'white'}}>
            Vi recondar, reparerar och återvinner
          </Paragraph>
          <Button ghost>Produkter</Button>
        </Typography>
      </Header>
      <Content className="site-layout-content">
        <Main/>
      </Content>
      <Footer style={{ textAlign: 'center', bottom: 0}}>
        Copyright © 2020    Batterirecond Trading i Sverige AB, Järnmalmsgatan 1,  417 07 Göteborg, Tel:  031- 51 81 39
      </Footer>
    </Layout>
  );
}

export default App;
