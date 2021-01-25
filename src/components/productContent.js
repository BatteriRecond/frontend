import React, { useState } from 'react';
import { Button, Descriptions, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function ProductContent ({ item }) {
  const {
    content,
    details: { newPrices, recycledPrices } = {},
    showMoreBtn = true
  } = item;
  const [ isCollapsed, setIsCollapsed ] = useState(true);

  return <>
    <div style={{ height: isCollapsed ? '90px' : 'auto', overflow: 'hidden' }}>
      {content}
      <br />
      <br />
      {newPrices && <>
        <Descriptions title={newPrices.priceLabel} bordered column={1}>
          {newPrices.prices.map(({ label, value }, index) =>
            <Descriptions.Item label={label}>{value}</Descriptions.Item>
          )}
        </Descriptions>
        <br />
      </>}
      {recycledPrices && <>
        < Descriptions title={recycledPrices.priceLabel} bordered column={1}>
          {recycledPrices.prices.map(({ label, value }, index) =>
            <Descriptions.Item label={label}>{value}</Descriptions.Item>
          )}
        </Descriptions>
        <IconText icon={ExclamationCircleOutlined} text="Med reservation för slutförsäljning" key="Reservation" />
      </>}
    </div >
    {
      showMoreBtn && <Button
        block
        className="show-more-btn"
        style={{ marginTop: isCollapsed ? '-1em' : 0 }}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        Visa {isCollapsed ? 'mer' : 'mindre'}
      </Button>
    }
  </>
}