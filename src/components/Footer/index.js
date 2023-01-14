import { Layout } from "antd";
import React from "react";

const { Footer: LayoutFooter } = Layout;

const Footer = () => {
  return (
    <LayoutFooter className="footer">
      Copyright © 2023 Batterirecond Trading i Sverige AB, Gjutjärnsgatan 10,
      417 07 Göteborg, <a href="tel:031-518139">Tel: 031- 51 81 39</a>
    </LayoutFooter>
  );
};

export default Footer;
