import React, { useState } from 'react';
import { Layout, Typography, Row, Col, Card, List, Avatar, Button, Carousel } from 'antd';
import MainNav from '../components/mainNav.js';
import ProductContent from '../components/productContent.js'
import '../css/productPage.css'
import ForkLift from '../images/forklift.jpeg';
import AgmBattery from '../images/AGM_Batteries.gif'
import CarStartBattery from '../images/car-battery.jpeg';
import CarBattery from '../images/car_battery.jpeg';
import TruckStartBattery from '../images/truck_battery.jpeg';
import ForkLiftBattery from '../images/forklift_battery.jpeg';
import ForkLiftBatteries from '../images/forklift_batteries.jpeg';
import BatteriRecondVideoDesktop from '../images/BatteriRecond-video-test.mp4';
import BatteriRecondVideoMobile from '../images/BatteriRecond-video.mp4';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Meta } = Card;

const productList = [
  {
    title : 'Startbatterier till bil',
    description : 'Beskrivning',
    content : 'Vi har nya och rekondade bilbatterier, 45 Ah - 110 Ah',
    detailTitle : '',
    details : [
      { label: '45 - 65 Ah' , value : '400 kr' },
      { label: '65 - 85 Ah' , value : '500 kr' },
      { label: '85 - 100 Ah' , value : '600 kr' },
      { label: '100 - 110 Ah' , value : '700 kr' },
    ],
    imgSrcs : [ CarStartBattery, CarBattery ],
  },
  {
    title : 'Startbatterier till lastbil',
    description : 'Beskrivning',
    content : 'Vi har nya och rekondade lastbilsbatterier, 130 Ah - 230 Ah',
    detailTitle : '',
    details : [
      { label: '130 - 145 Ah' , value : '900 kr' },
      { label: '145 - 185 Ah' , value : '1000 kr' },
      { label: '185 - 230 Ah' , value : '1100 kr' },
    ],
    imgSrcs : [ TruckStartBattery ],
  },
  {
    title : 'AGM/GEL Förbrukningsbatterier',
    description : 'Beskrivning',
    content : 'Vi har rekondade förbrukningsbatterier, 7 Ah - 200 Ah',
    imgSrcs : [ AgmBattery ],
    details : [
      { label: '7 - 200 Ah' , value : '15kr/Ah' },
      { label: 'Prisexempel:' , value : 'Batteri 100Ah x 15kr = 1500kr' },
    ],
  },
  {
    title : 'Truckbatterier',
    description : 'Beskrivning',
    content : 'Vi monterar nya eller begagnade celler i ditt gamla trucktråg och anpassar priset efter dina behov och resurser.',
    imgSrcs : [ ForkLiftBattery, ForkLiftBatteries ],
    details : [
      { label: '150 - 3000 Ah' , value : 'Ring eller maila för prisförslag' },
    ],
  },
  {
    title : 'Truckar',
    description : 'Beskrivning',
    showMoreBtn : false,
    content : <>
      Vi har ett stort utbud av begagnade truckar. 
      <br/>
      <br/>
      Ring eller maila för mer info.
    </>,
    imgSrcs : [ ForkLift ],
  },
  ];

  const listItemExtra = ( imgSrcs ) =>
  <Carousel>
    { imgSrcs.map( ( imgSrc, index ) =>
      <div
      key={index}>
      <img
        className="product-img"
        alt={`img`+index}
        src={imgSrc}
      />
      </div>
    ) }
  </Carousel>;

  export default function ProductsPage (props) {

    return(
      <Layout className="layout product-layout">
      <Header className="product-header">
        <MainNav/>
        <Typography className="typography-products">
          <Title>Produkter</Title>
        </Typography>
      </Header>
      <Content className="site-layout-content mobileCss">
        <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },32]} justify="space-around" style={{margin: 0}} align='baseline'>
        <Col xs={{ span: 0 }} sm={{ span: 0}} md={{ span: 0 }} lg={{ span: 6 }}>
          <div className='side-ad'>
          <div style={{padding:'2em'}}>
            <h1><i>
              BATTERI RECOND, <br/>
              WATT YOU NEED!<br/>
            </i></h1>
              Hos oss finner ni kunnig personal och prisvärda produkter. Vi har de mesta inom branschen.
          </div>
          <video width="100%" autoPlay muted loop src={ BatteriRecondVideoDesktop } type="video/mp4" className='video-ad'/>
          </div>
          </Col>
           <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 22 }} lg={{ span:18 }}>
           { false && <List
              className='product-list'
              itemLayout="vertical"
              size="large"
              dataSource={productList}
              renderItem={item => (
                <List.Item
                  key={item.title}
                  extra={listItemExtra(item.imgSrcs)}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.title}
                    description={item.description}
                  />
                  <ProductContent item={ item }/>
                </List.Item>
                    )}
              /> }

          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 24 },24]} className="product-container">
          { true && productList.map( ( item, index ) =>
            <Col xs={{ span: 24 }} sm={{ span: 24}} md={{ span: 12 }} lg={{ span: 8 }} key={index}>
              <Card
                bordered={false}
                className="product-card"
                cover={listItemExtra(item.imgSrcs)}>
                <Meta title={ item.title } description={ item.description } />
                <ProductContent item={ item }/>
              </Card>
            </Col>
          ) }
          </Row>
          </Col>

        <Col xs={{ span: 22 }} sm={{ span: 22 }} md={{ span: 22 }} lg={{ span: 0 }}>
          <video autoPlay muted loop src={ BatteriRecondVideoMobile } type="video/mp4" className='video-ad-mobile'/>
        </Col>
        </Row>
      </Content>
      <Footer >
        Copyright © 2021    Batterirecond Trading i Sverige AB, Gjutjärnsgatan 10,  417 07 Göteborg, Tel:  031- 51 81 39
      </Footer>
    </Layout>
    )
}