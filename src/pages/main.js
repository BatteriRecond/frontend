import React from 'react';
import { Layout, Typography, Button, Row, Col, Card } from 'antd';
import ForkLift from "../images/redForklift.jpeg";
import { Carousel } from 'antd';
import { StarFilled } from '@ant-design/icons';
import MainNav from '../components/mainNav.js';
import '../css/mainPage.css';


const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const contentStyle = {
  padding:'2em',
  color: 'grey',
  textAlign: 'center',
  fontSize: '14px',
};

export default class MainPage extends React.Component {

  render(){
    return(
      <Layout className="layout">
      <Header className='mainHeader'>
        <MainNav/>
        <Typography className='typographyContainer'>
          <Title>Vi rekondar, <br/>reparerar och återvinner!</Title>
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
    )
  }
}

const Main = () => {
  return(
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{margin:'-5em 0 0 0'}} justify="space-around" align="middle">
    <Col xs={{order:2, span: 24 }} sm={{ order:2, span: 24}} md={{ order:1, span: 7 }} lg={{ order:1, span: 7 }}>
    <Card size='small' title="KUNDRECENSIONER" className='frontCard'>
        <Carousel autoplay>
          <div>
              <p style={contentStyle}>
                "Jag fick tips och goda råd i allmänhet av den trevliga personalen kring allt med laddning och underhåll.<br/>
                Bra priser och väldigt positivt på alla sätt. <br/>
                Kommer gärna tillbaka" <br/>
                <br/>
                  -Kund <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />
            </p>
          </div>
          <div>
              <p style={contentStyle}>
                "Trevligt folk, bra batterier, bra priser. <br/>
                Har handlat här i 20 år till alla bilar, båtar och lastbilar. 👍👌👏" <br/>
                <br/>
                -Kund <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled /> <StarFilled />
              </p>
          </div>
        </Carousel>
      </Card>
    </Col>
    <Col xs={{order:1, span: 24}} sm={{ order:1, span: 24}} md={{ order:2, span: 7 }} lg={{ order:2, span: 7 }}>
      <Card size="small" title="ÖPPETTIDER" className='frontCard'>
          <p>Mån-Fre 08:00-16:30</p>
          <br/>
          <h4>Avvikande Öppettider:</h4>
          <table>
            <td style={{borderRight: '1px solid lightgrey'}}>
              <tr>
                Trettondagsafton	Stängt
              </tr>
              <tr>
                Skärtorsdag	Stängt
              </tr>
              <tr>
                Valborgmässoafton	Stängt
              </tr>
              <tr>
                Dag före Kristi Himmelfärdsdag	Stängt
              </tr>
            </td>
            <td>
              <tr>
                Midsommarafton	Stängt
              </tr>
              <tr>
                Dag före Alla Helgons dag	Stängt
              </tr>
              <tr>
                Julafton	Stängt
              </tr>
              <tr>
                Nyårsafton	Stängt
              </tr>
            </td>
          </table>
      </Card>
    </Col>
    <Col xs={{order:3, span: 0}} sm={{ order:3, span: 0}} md={{ order:3, span: 7 }} lg={{ order:3, span: 7 }}>
      <Card size='small' title="HITTA HIT" className='frontCard'>
        <img style={{maxWidth:'100%'}} src={ForkLift} alt="forklift" />
      </Card>
    </Col>
  </Row>
  )
}
