import { Button, ConfigProvider, Popover, Typography } from "antd";
import * as R from "ramda";
import React from "react";
import { Container, OpeningHoursContainer } from "../style";
import { UpOutlined, ClockCircleOutlined } from "@ant-design/icons";

import "./style.css";
import { useMediaQuery } from "react-responsive";

const { Title } = Typography;

const capitalizeString = (string = "") => {
  return R.toUpper(string[0]) + R.slice(1, Infinity, string);
};

const specialOpeningHours = [
  "Trettondagen Stängt",
  "Långfredagen Stängt",
  "Annandag Påsk Stängt",
  "1 Maj Stängt",
  "Kristi Himmelfärdsdag Stängt",
  "Nationaldagen Stängt",
  "Midsommarafton Stängt",
  "Julafton Stängt",
  "Juldagen Stängt",
  "Annandag Jul Stängt",
  "Nyårsafton Stängt",
  "Nyårsdagen Stängt",
];

const OpeningHours = ({ openingHours }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <Container>
      {!isMobile && (
        <div className="welcome-message">
          <ConfigProvider
            theme={{
              token: {
                fontSizeHeading1: "24px",
              },
            }}
          >
            <Title
              level={1}
              style={{
                textAlign: "center",
              }}
            >
              VÄLKOMNA TILL <br />
              RINGÖN!{" "}
            </Title>
          </ConfigProvider>
          <p>
            Varmt välkomna till oss på Gjutjärnsgatan 10, ett stenkast från vår
            gamla adress fast med nya fräscha lokaler.
          </p>
          <p>
            Just nu har vi:
            {openingHours.open_now ? (
              <span style={{ color: "green" }}> Öppet</span>
            ) : (
              <span style={{ color: "firebrick" }}> Stängt</span>
            )}
          </p>
        </div>
      )}
      <OpeningHoursContainer>
        <Title level={4}>
          <ClockCircleOutlined /> ÖPPETTIDER
        </Title>
        {(openingHours.weekday_text || []).map((item) => (
          <div key={item}>{capitalizeString(item)}</div>
        ))}

        <Popover
          placement="topLeft"
          content={
            <>
              {specialOpeningHours.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </>
          }
          arrowPointAtCenter
          trigger="click"
        >
          <Button
            type="text"
            icon={<UpOutlined />}
            className="special-opening-hours"
          >
            Avvikande Öppettider
          </Button>
        </Popover>
      </OpeningHoursContainer>
    </Container>
  );
};

export default OpeningHours;
