import React, { useState } from 'react';
import { Layout, Typography, Row, Col, Card, List, Avatar, Button, Carousel } from 'antd';
import MainNav from '../components/mainNav.js';
import ProductContent from '../components/productContent.js'
import '../css/productPage.css'
import ForkLift from '../images/forklift.jpeg';
import StartBattery from '../images/battery-start.png';
import RegularBatteries from '../images/batteries-regular.png';
import BatteriRecondVideoDesktop from '../images/BatteriRecond-video-test.mp4';
import BatteriRecondVideoMobile from '../images/BatteriRecond-video.mp4';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Meta } = Card;

const productList = [
  {
    title : 'Startbatterier',
    description : 'Beskrivning',
    content : 'Vi har alla startbatterier, 20 Ah - 230 Ah',
    detailTitle : '',
    details : [
      { label: '40 - 60 Ah' , value : '240 kr' },
      { label: '62 - 75 Ah' , value : '320 kr' },
      { label: '80 - 100 Ah' , value : '400 kr' },
      { label: '105 - 140 Ah' , value : '640 kr' },
      { label: '150 - 180 Ah' , value : '720 kr' },
      { label: '200 - 230 Ah' , value : '1000 kr' },
    ],
    imgSrcs : [ StartBattery, StartBattery ],
  },
  {
    title : 'Truckbatterier',
    description : 'Beskrivning',
    content : <>Stort sortiment
              <br/>Alla spänningar
              <br/>Vi monterar nya eller begagnade celler i ditt gamla trucktråg
              <br/>Färdiga batterier för leverans omgående
              <br/>Vi anpassar priset efter dina behov och resurser'
              </>,
    imgSrcs : [ 'https://lh3.googleusercontent.com/proxy/HQPYOr7JxMh2CbFSRLoeyTm540D5cvA-KrhA-hliAI5CwjbJd-cjGsvy6T81pEQ5psWzZPTKYzRq0e7bQQuaSEI2z_ViXde9dYu3cFFA0LJ2wA', 'https://cdn.klaravik.se/uploads/extrabilder3530344_large.jpg' ],
    details : [
      { label: '40 - 60 Ah' , value : '240 kr' },
      { label: '62 - 75 Ah' , value : '320 kr' },
      { label: '80 - 100 Ah' , value : '400 kr' },
      { label: '105 - 140 Ah' , value : '640 kr' },
      { label: '150 - 180 Ah' , value : '720 kr' },
      { label: '200 - 230 Ah' , value : '1000 kr' },
    ],
  },
  {
    title : 'Marinbatterier',
    description : 'Nya och Begagnade',
    content : <>
              50 - 2000 Ah, ubåtsbatterier
              <br/>Start- och förbrukningsbatterier (servicebatterier)
              <br/> Belysningsbatterier - alla spänningar
              <br/> Vi bygger och specialanpassar batteribanker
              </>,
    imgSrcs : [ 'https://www.bauhaus.se/media/catalog/product/cache/06447b731d1cbff22138e7150384a1c9/2/5/2519887A.jpg', 'https://rabatterier.se/wp-content/uploads/2016/07/Marinbatteri-300x232.jpg' ],
    details : [
      { label: '40 - 60 Ah' , value : '240 kr' },
      { label: '62 - 75 Ah' , value : '320 kr' },
      { label: '80 - 100 Ah' , value : '400 kr' },
      { label: '105 - 140 Ah' , value : '640 kr' },
      { label: '150 - 180 Ah' , value : '720 kr' },
      { label: '200 - 230 Ah' , value : '1000 kr' },
    ],
  },
  {
    title : 'Truckar',
    description : '',
    imgSrcs : [ ForkLift ],
  },
  {
    title : 'Sälj dina battrier till oss',
    description : '',
    imgSrcs : [ RegularBatteries ],
  },
  ];
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

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
          <div style={{padding:'2em', wordBreak:'break-all'}}>
            <h1>
              DET HÄR EN <br/>
              LÅNG LÅNG <br/>
              LTEXT
              </h1>
              hallå hallå haklå hdgdajjshdgdgidbkjbfwelhfi
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
        Copyright © 2020    Batterirecond Trading i Sverige AB, Järnmalmsgatan 1,  417 07 Göteborg, Tel:  031- 51 81 39
      </Footer>
    </Layout>
    )
}