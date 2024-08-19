import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const Rcard = () => (
  <Card className='my-5 w-full'
    hoverable
    style={{
      width: 340,
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
export default Rcard;