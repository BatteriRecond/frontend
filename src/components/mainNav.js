import React, { useState } from 'react';
import {
  Link,
  useLocation,
} from "react-router-dom";
import { Menu, Row, Col, Drawer } from 'antd';
import Logo from "../images/logo.png";
import { MenuOutlined } from '@ant-design/icons';
import '../css/mainNav.css';
import ForkLift from '../images/redForklift.jpeg';



export default function MainNav (props) {

  const [ visible, setVisible ] = useState(false);

  const location = useLocation();

  const isActive = (page) => {
    return location.pathname === `/${page}` ? 'ant-menu-item-selected' : '';
  }

  return (
    <Row>
      <Col xs={{ span: 6 }}
        sm={{ span: 6 }}
        md={{ span: 0 }}
        lg={{ span: 0 }}
        style={{ color: 'white', fontSize: '40px', padding: '0.5em' }}
        onClick={() => setVisible(true)}>
        <MenuOutlined style={{ float: 'left' }} />
      </Col>
      <Col xs={{ span: 18 }} sm={{ span: 18 }} md={{ span: 11, offset: 1 }} lg={{ span: 11, offset: 1 }}>
        <Link to="/">
          {true && <>
            <h1 className='logo-text'>BATTERI </h1>
            <h2 className='logo-text'> RECOND AB</h2>
          </>}
          {false && <img src={Logo} className='logo' alt="Smiley face" />}
        </Link>
      </Col>
      <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 12 }} lg={{ span: 12 }}>
        <Menu className='horizontalMenu' mode="horizontal" style={{ float: 'right' }}>
          <Menu.Item className={isActive('')} key="1"><Link to="/">HEM</Link></Menu.Item>
          <Menu.Item className={isActive('products')} key="2"><Link to="/products">PRODUKTER</Link></Menu.Item>
          <Menu.Item className={isActive('contact')} key="3"><Link to="/contact">KONTAKTA OSS</Link></Menu.Item>
        </Menu>
      </Col>

      <Drawer
        placement='left'
        closable={true}
        visible={visible}
        key='left'
        onClose={() => setVisible(false)}
        drawerStyle={{ textAlign: 'left', background: 'rgba(255,255,255,0.6)' }}
        footerStyle={{ textAlign: 'center', background: '#f0f2f5', }}
        title={<Link to="/">
          <>
            <h1 className='drawer-logo-text'> BATTERI </h1>
            <h2 className='drawer-logo-text'> RECOND AB</h2>
          </>
          {false && <img src={Logo} className='logo' alt="Smiley face" />}
        </Link>}
        footer={
          <div>
            Batterirecond <br /> Gjutjärnsgatan 10 <br />  417 07 Göteborg <br /><a href="tel:031-518139">Tel: 031- 51 81 39</a>
          </div>
        }>
        <Menu className='verticalMenu' mode="vertical">
          <Menu.Item className={isActive('')} key="1"><Link to="/">HEM</Link></Menu.Item>
          <Menu.Item className={isActive('products')} key="2"><Link to="/products">PRODUKTER</Link></Menu.Item>
          <Menu.Item className={isActive('contact')} key="3"><Link to="/contact">KONTAKTA OSS</Link></Menu.Item>
        </Menu>
        <img alt="forklift" src={ForkLift} style={{ maxWidth: '100%' }} />
      </Drawer>
    </Row>
  )
}