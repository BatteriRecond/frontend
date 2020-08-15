import React from 'react';
import { Row, Col, Card } from 'antd';
import ForkLift from "../images/redForklift.jpeg";
import { Carousel } from 'antd';
import { StarFilled } from '@ant-design/icons';

const contentStyle = {
  height: '250px',
  color: 'grey',
  textAlign: 'center',
  fontSize: '16px',
};

export default class Main extends React.Component {

  render(){
    return(
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-around" align="middle">
        <Col xs={{order:2, span: 12}} sm={{ order:2, span: 12}} md={{ order:1, offset:2, span: 6}} lg={{ order:1, span: 6, offset:2}}>

          <Card style={{borderRadius: '5px'}}>
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
        <Col xs={{order:1, span: 24}} sm={{ order:1, span: 24}} md={{ order:2, offset:1, span: 6}} lg={{ order:2, span: 6, offset:1}}>
          <Card size="small" title="ÖPPETIDER" style={{overflow: 'hidden', textAlign:'center', borderRadius: '5px'}}>
              <p>Mån-Fre 08:00-16:30</p>
              <br/>
              <h4>Avvikande Öppettider:</h4>
              <p>
                Trettondagsafton	Stängt <br/>
                Skärtorsdag	Stängt <br/>
                Valborgmässoafton	Stängt <br/>
                Dag före Kristi Himmelfärdsdag	Stängt <br/>
                Midsommarafton	Stängt <br/>
                Dag före Alla Helgons dag	Stängt <br/>
                Julafton	Stängt <br/>
                Nyårsafton	Stängt
              </p>
          </Card>
        </Col>
        <Col xs={{order:3, span: 12}} sm={{ order:3, span: 12}} md={{ order:3, offset:1, span: 6}} lg={{ order:3, span: 6, offset:1}}>
          <img style={{maxWidth:'100%'}} src={ForkLift} alt="forklift"/>
        </Col>
      </Row>
    )
  }
}