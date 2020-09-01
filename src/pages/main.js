import React from 'react';
import { Layout, Typography, Button, Row, Col, Card, Carousel, Rate } from 'antd';
import { Link } from "react-router-dom";
import { ClockCircleOutlined, CommentOutlined } from '@ant-design/icons';
import MainNav from '../components/mainNav.js';
import '../css/mainPage.css';


const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const contentStyle = {
  color: 'grey',
  textAlign: 'center',
  fontSize: '18px',
};

export default class MainPage extends React.Component {

  render(){
    return(
      <Layout className="layout">
      <Header className='mainHeader'>
        <MainNav/>
        <Typography className='typographyContainer'>
          <Title>Vi rekondar, <br/>reparerar och återvinner!</Title>
          <Link to="/products"><Button ghost>Produkter</Button></Link>
        </Typography>
      </Header>
      <Content className="site-layout-content mobileCss">
        <Main/>
      </Content>
      <Footer style={{ textAlign: 'center', bottom: 0}}>
        Copyright © 2020    Batterirecond Trading i Sverige AB, Järnmalmsgatan 1,  417 07 Göteborg, Tel:  031- 51 81 39
      </Footer>
    </Layout>
    )
  }
}

const Main = () => {
  return(
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },32]} style={{margin:'-5em 0 0 0'}} justify="space-around" align="bottom">
    <Col xs={{order:2, span: 24 }} sm={{ order:2, span: 24}} md={{ order:1, span: 11 }} lg={{ order:1, span: 11 }}>
    <Card size='default' title={<> <CommentOutlined /> &nbsp; KUNDRECENSIONER </> } className='frontCard'>
        <Carousel autoplay>
          <div>
              <p style={contentStyle}>
                "Jag fick tips och goda råd i allmänhet av den trevliga personalen kring allt med laddning och underhåll.<br/>
                Bra priser och väldigt positivt på alla sätt. <br/>
                Kommer gärna tillbaka" <br/>
                <br/>
                  -Kund <Rate disabled defaultValue={5} />
            </p>
          </div>
          <div>
              <p style={contentStyle}>
                "Trevligt folk, bra batterier, bra priser. <br/>
                Har handlat här i 20 år till alla bilar, båtar och lastbilar. 👍👌👏" <br/>
                <br/>
                -Kund <Rate disabled defaultValue={5} />
              </p>
          </div>
        </Carousel>
      </Card>
    </Col>
    <Col xs={{order:1, span: 24}} sm={{ order:1, span: 24}} md={{ order:2, span: 11 }} lg={{ order:2, span: 11 }}>
      <Card size="default" title={<><ClockCircleOutlined /> &nbsp; ÖPPETTIDER</> } className='frontCard'>
          <p style={{fontSize:'18px'}}>Mån-Fre 08:00-16:00</p>
          <br/>
          <h4 style={{fontWeight:'bold'}}>Avvikande Öppettider:</h4>
          <Row>
            <Col span={12}>
            Trettondagsafton Stängt <br/>
            Skärtorsdag Stängt <br/>
            Valborgmässoafton Stängt <br/>
            Dag före Kristi Himmelfärdsdag Stängt <br/>
            </Col>
            <Col span={12}>
            Midsommarafton Stängt <br/>
            Dag före Alla Helgons dag Stängt <br/>
            Julafton Stängt <br/>
            Nyårsafton Stängt <br/>
            </Col>
          </Row>
      </Card>
    </Col>
  </Row>
  )
}
