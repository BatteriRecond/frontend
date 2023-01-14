import { Menu, ConfigProvider, Drawer } from "antd";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { MenuOutlined } from "@ant-design/icons";

import "./style.css";

import ForkLift from "../../images/redForklift.jpeg";

const menuItems = [
  {
    label: <Link to="/">HEM</Link>,
    key: "/",
  },
  {
    label: <Link to="/products">PRODUKTER</Link>,
    key: "/products",
  },
  {
    label: <Link to="/contact">KONTAKTA OSS</Link>,
    key: "/contact",
  },
];

const getMenu = (selectedKey, mode, theme, width) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#B22222",
        fontSize: "20px",
        fontFamily: "Quicksand",
      },
    }}
  >
    <Menu
      className="main-menu"
      mode={mode}
      style={{ width }}
      theme={theme}
      items={menuItems}
      selectedKeys={[selectedKey]}
    />
  </ConfigProvider>
);

export default function MainNav() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const toggleMenu = () => setVisible((prevVsible) => !prevVsible);

  return (
    <>
      <Link to="/" className="logo">
        <span className="first">BATTERI</span>
        <span className="second">RECOND AB</span>
      </Link>
      {isMobile ? (
        <>
          <MenuOutlined
            className="menu-button"
            onClick={toggleMenu}
            style={{ color: "white" }}
          />
          <Drawer
            bodyStyle={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            width="auto"
            placement="right"
            open={visible}
            key="left"
            onClose={() => setVisible(false)}
          >
            {getMenu(location.pathname, "vertical", "light", "auto")}

            <img alt="forklift" src={ForkLift} style={{ maxWidth: "200px" }} />
          </Drawer>
        </>
      ) : (
        getMenu(location.pathname, "horizontal", "dark", "450px")
      )}
    </>
  );
}
