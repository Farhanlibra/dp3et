import React from 'react';
import { Card } from 'antd';
const Cardp = () => (
  <Card className='border border-stone-500 shadow-2xl'
    
    bordered={false}
    style={{
      width: 330,
    }}
  >
    <p className='text-center text-2xl pt-4'>STARTER</p>
    <p className='text-center font-bold text-[50px] text-blue-900 pt-4 pb-8'> $22.99</p>
    <p className='text-center py-8'>This is a monthly recurring payment.</p>
    <ul className="list-disc leading-6 ">
                  
                  <li className="ml-4 text-lg">Pointing has no control</li>
                  <li className="ml-4 text-lg">A small river named Duden flows
                  </li>
                  <li className="ml-4 text-lg">Roasted parts of sentences fly into your mouth
                  </li>
                </ul>
                <p className='text-center py-6'>
    <button className='px-3 py-3 bg-slate-600 text-white mx-auto'>Get Started</button>
    </p>
  </Card>
);
export default Cardp;