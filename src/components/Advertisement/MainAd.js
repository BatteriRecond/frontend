import { Button, ConfigProvider, Typography } from "antd";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import "./style.css";

const { Title } = Typography;

const MainAd = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "white",
          fontSize: isMobile ? "30px" : "50px",
        },
        components: {
          Button: { fontSize: "20px" },
        },
      }}
    >
      <Typography className="typography">
        <Title>
          Vi rekondar, säljer <br /> och köper batterier & truckar!
        </Title>
        <Link to="/products">
          <Button ghost>Produkter</Button>
        </Link>
      </Typography>
    </ConfigProvider>
  );
};

export default MainAd;
