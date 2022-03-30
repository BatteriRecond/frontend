import React from 'react';
import { Layout, Typography, Button, Row, Col, Card, Carousel, Rate, Comment, Avatar } from 'antd';
import { Link } from "react-router-dom";
import { ClockCircleOutlined } from '@ant-design/icons';
import MainNav from '../components/mainNav.js';
import '../css/mainPage.css';


const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default class MainPage extends React.Component {

  render () {
    return (
      <Layout className="layout">
        <Header className='mainHeader'>
          <MainNav />
          <Typography className='typographyContainer'>
            <Title>Vi rekondar, säljer <br /> och köper batterier & truckar!</Title>
            <Link to="/products"><Button ghost>Produkter</Button></Link>
          </Typography>
        </Header>
        <Content className="site-layout-content">
          <Main />
        </Content>
        <Footer>
          Copyright © 2021    Batterirecond Trading i Sverige AB, Gjutjärnsgatan 10,  417 07 Göteborg, <a href="tel:031-518139">Tel: 031- 51 81 39</a>
        </Footer>
      </Layout>
    )
  }
}

const reviews = [
  {
    text: <>Jag fick tips och goda råd i allmänhet av den trevliga personalen kring allt med laddning och underhåll. <br />Bra priser och väldigt positivt på alla sätt. Kommer gärna tillbaka.</>
  },
  {
    text: <>Trevligt folk, bra batterier, bra priser. <br /> Har handlat här i 20 år till alla bilar, båtar och lastbilar. 👍👌👏</>
  },
]

const Main = () => {
  return (
    <Row gutter={[ 0, 32 ]} justify="space-around" align="middle" style={{ margin: 0 }}>
      <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }} lg={{ order: 1, span: 5, offset: 1 }}>
        <h1>VÄLKOMNA TILL <br />GJUTJÄRNSGATAN! </h1>
        <p>
          Vi har flyttat! Därmed hälsar vi er varmt välkomna till oss på Gjutjärnsgatan 10, ett stenkast från vår gamla adress fast med nya fräscha lokaler.
      </p>
      </Col>
      <Col xs={{ order: 2, span: 24 }} sm={{ order: 2, span: 24 }} md={{ order: 2, span: 24 }} lg={{ order: 3, span: 6, }}>
        <Card size='default' bordered={false} className='front-card'>
          <Carousel autoPlay>
            {reviews.map((review, index) =>
              <Comment
                key={index}
                author='Kund'
                avatar={
                  <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Customer"
                  />
                }
                content={
                  <>
                    <p style={{ textAlign: 'left' }}>{review.text} </p>
                    <Rate disabled defaultValue={5} />
                  </>
                }
              />
            )}
          </Carousel>
        </Card>
      </Col>
      <Col xs={{ order: 1, span: 24 }} sm={{ order: 1, span: 24 }} md={{ order: 1, span: 24 }} lg={{ order: 2, span: 9 }}>
        <Card size="default" title={<><ClockCircleOutlined /> &nbsp; ÖPPETTIDER</>} className='front-card'>
          <Row align='middle' justify="space-between">
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }}>
              <p style={{ fontSize: '18px' }}>Vardagar <br /> 08:00-16:00</p>
              <p style={{ fontSize: '18px' }}>Helger <br /> Stängt </p>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 16 }}>
              <h4 style={{ fontWeight: 'bold' }}>Avvikande Öppettider:</h4>
              <Row>
                <Col span={12}>
                  Trettondagen Stängt <br />
                  Långfredagen Stängt <br />
                  Annandag Påsk <br />
                  1 Maj Stängt <br />
                  Kristi Himmelfärdsdag Stängt <br />
                  Nationaldagen Stängt <br />
                </Col>
                <Col span={12}>
                  Midsommarafton Stängt <br />
                  Julafton Stängt <br />
                  Juldagen Stängt <br />
                  Annandag Jul Stängt <br />
                  Nyårsafton Stängt <br />
                  Nyårsdagen Stängt <br />
                </Col>
              </Row>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  )
}
