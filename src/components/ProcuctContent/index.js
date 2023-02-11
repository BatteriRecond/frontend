import {
  DownOutlined,
  ExclamationCircleOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Button, ConfigProvider, Descriptions, Space } from "antd";
import React, { useState } from "react";
import { Expandable } from "./style";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function ProductContent({ item }) {
  const {
    content,
    details: { newPrices, recycledPrices } = {},
    showMoreBtn = true,
  } = item;
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <Expandable isCollapsed={isCollapsed}>
        {content}
        <br />
        <br />
        {newPrices && (
          <>
            <Descriptions title={newPrices.priceLabel} bordered column={1}>
              {newPrices.prices.map(({ label, value }, index) => (
                <Descriptions.Item key={index} label={label}>
                  {value}
                </Descriptions.Item>
              ))}
            </Descriptions>
            <br />
          </>
        )}
        {recycledPrices && (
          <>
            <Descriptions title={recycledPrices.priceLabel} bordered column={1}>
              {recycledPrices.prices.map(({ label, value }, index) => (
                <Descriptions.Item key={index} label={label}>
                  {value}
                </Descriptions.Item>
              ))}
            </Descriptions>
            <IconText
              icon={ExclamationCircleOutlined}
              text="Med reservation för slutförsäljning"
              key="Reservation"
            />
          </>
        )}
      </Expandable>
      {showMoreBtn && (
        <ConfigProvider theme={{ token: { colorText: "firebrick" } }}>
          <Button
            block
            type="text"
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <DownOutlined /> : <UpOutlined />}
          >
            {`Visa ${isCollapsed ? "mer" : "mindre"}`}
          </Button>
        </ConfigProvider>
      )}
    </>
  );
}
