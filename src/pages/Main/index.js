import React, { useEffect, useState } from "react";
import { Layout, Card, Rate, Row, Col, Statistic, ConfigProvider } from "antd";
import axios from "axios";
import { Comment } from "@ant-design/compatible";
import Menu from "../../components/Menu";
import OpeningHours from "../../components/OpeningHours";
import { MainAd } from "../../components/Advertisement";
import Footer from "../../components/Footer";
import { Container } from "../../components/style";

import "./style.css";

const { Header, Content } = Layout;

const openingHoursUrl =
  "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJsyJ32yv1T0YREQzc2hg_E08&fields=opening_hours,rating&key=AIzaSyA9MK5lsAwzn5md2y9Nnk6_pqk-tcMwWGE&language=sv";

export default class MainPage extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header className="header">
          <Menu />
        </Header>
        <Content className="main-page-content">
          <MainAd />
          <Main />
        </Content>
        <Footer />
      </Layout>
    );
  }
}

const reviews = [
  {
    key: 1,
    text: (
      <>
        "Jag fick tips och goda råd i allmänhet av den trevliga personalen kring
        allt med laddning och underhåll. <br />
        Bra priser och väldigt positivt på alla sätt. Kommer gärna tillbaka."
      </>
    ),
  },
  {
    key: 2,
    text: (
      <>
        "Trevligt folk, bra batterier, bra priser. <br /> Har handlat här i 20
        år till alla bilar, båtar och lastbilar."
      </>
    ),
  },
];

const Main = () => {
  const [openingHours, setOpeningHours] = useState({});
  const [rating, setRating] = useState(4.5);

  useEffect(() => {
    axios
      .get(openingHoursUrl)
      .then(({ data = {} }) => {
        if (data.error_message) {
          console.log(data.error_message);
        }
        setOpeningHours(data.result.opening_hours);
        setRating(data.result.rating);
      })
      .catch((err = {}) => console.log(err.message));
  }, []);

  return (
    <Row gutter={[8, 32]} justify="space-around" className="card-container">
      <Col xs={24} sm={24} md={24} lg={12}>
        <Card className="main-page-card" bodyStyle={{ height: "100%" }}>
          <OpeningHours openingHours={openingHours} />
        </Card>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12}>
        <Card size="default" bordered={false} className="main-page-card">
          <Container>
            <div className="score-container">
              <ConfigProvider
                theme={{
                  token: {
                    fontSize: "30px",
                  },
                }}
              >
                <Statistic value={rating} title="Betyg" />
                <Rate
                  allowHalf
                  defaultValue={Math.round(rating * 2) / 2}
                  disabled
                  style={{ color: "firebrick" }}
                />
              </ConfigProvider>
            </div>
            <div>
              {reviews.map(({ text, key }) => (
                <Comment className="comment" key={key} content={text} />
              ))}
            </div>
          </Container>
        </Card>
      </Col>
    </Row>
  );
};
