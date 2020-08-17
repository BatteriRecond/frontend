import React, { useState } from 'react';
import {  Menu, Row, Col, Drawer, Button, Footer } from 'antd';
import Logo from "../images/logo.png";
import { MenuOutlined } from '@ant-design/icons';
import '../css/mainNav.css';



export default function MainNav (props){

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

    return(
      <>
      <Row>
          <Col xs={{ span:6}} sm={{span:6}} md={{span:0}} lg={{span:0}} style={{color:'white', fontSize:'40px', padding: '0.5em'}} onClick={showDrawer}>
            <MenuOutlined style={{float:'left'}} />
          </Col>
          <Col xs={{ span:18 }} sm={{span:18}} md={{span:11, offset:1}} lg={{span:11, offset:1}}>
            <img src={Logo} className='logo' alt="Smiley face"/>
          </Col>
          <Col xs={{ span:0}} sm={{span:0}} md={{ span:9, offset:3}} lg={{span:9, offset:3}}>
            <Menu style={{ padding: '2em 3em 2em 1em', border: 'none', color:'white', background:'none', fontSize:'20px' }}  mode="horizontal" >
                <Menu.Item key="1">PRODUKTER</Menu.Item>
                <Menu.Item key="2">OM OSS</Menu.Item>
                <Menu.Item key="3">HITTA HIT</Menu.Item>
            </Menu>
          </Col>
        </Row>
        <Drawer
              placement='left'
              closable={true}
              visible={visible}
              key='left'
              onClose={onClose}
              drawerStyle={{textAlign:'left'}}
              footerStyle={{textAlign:'center', background: '#f0f2f5', }}
              footer={
                <div>
                  Copyright © 2020    Batterirecond Trading i Sverige AB, Järnmalmsgatan 1,  417 07 Göteborg, Tel:  031- 51 81 39
                </div>
              }>
              <Menu style={{ border: 'none', background:'none', fontSize:'20px', paddingTop:'1em' }} mode="vertical">
                    <Menu.Item key="1">PRODUKTER</Menu.Item>
                    <Menu.Item key="2">OM OSS</Menu.Item>
                    <Menu.Item key="3">HITTA HIT</Menu.Item>
              </Menu>
            </Drawer>
        </>
    )
}