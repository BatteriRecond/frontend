import React from 'react';
import { Layout, Menu, Typography, Button, Row, Col, Drawer } from 'antd';
import './App.css';
import Logo from "./images/logo.png";
import Main from './pages/main.js';
import { MenuOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const onClose = () => {
  this.setState({
    visible: false,
  });
};

function App() {
  return (
    <Layout className="layout">
      <Header>
        <Row>
          <Col span={12}>
            <img src={Logo} className='logo' alt="Smiley face"/>
          </Col>
          <Col xs={{ span:0}} sm={{span:0}} md={{ span:12}} lg={{span:12}} >
            <Menu style={{ padding: '2em 3em 2em 1em', borderBottom: 'none', color:'white', background:'none', fontSize:'20px' }}  mode="horizontal" >
                <Menu.Item style={{float:'right'}} key="1">PRODUKTER</Menu.Item>
                <Menu.Item style={{float:'right'}} key="2">OM OSS</Menu.Item>
                <Menu.Item style={{float:'right'}} key="3">HITTA HIT</Menu.Item>
            </Menu>
          </Col>
          <Col xs={{ span:12}} sm={{span:12}} md={{span:0}} lg={{span:0}} style={{color:'white', fontSize:'40px', padding: '0.5em'}}>
            <MenuOutlined style={{float:'right'}}/>
          </Col>
        </Row>
        <Drawer
          placement='left'
          closable={true}
          visible={false}
          key='left'>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
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
