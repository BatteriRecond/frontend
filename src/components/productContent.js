import React, { useState } from 'react';
import { Button, Descriptions } from 'antd';

export default function ProductContent ( { item } ) {
  const { content, detailTitle, details, showMoreBtn = true } = item;
  const [ isCollapsed, setIsCollapsed] = useState( true );

  return <>
    <div style={{ height: isCollapsed ? '100px' : 'auto', overflow:'hidden'}}>
      {content}
      <br/>
      <br/>
      <br/>
      { details && <Descriptions title={ detailTitle } bordered column={1}>
        { details.map( ( { label, value }, index ) =>
          <Descriptions.Item label={ label }>{ value }</Descriptions.Item>
        )}
      </Descriptions> }
    </div>
    { showMoreBtn && <Button
      block
      className="show-more-btn"
      style={{marginTop: isCollapsed ? '-1em' : 0 }}
      onClick={() => setIsCollapsed( !isCollapsed )}
    >
      Visa { isCollapsed ? 'mer' : 'mindre' }
    </Button>}
  </>
}