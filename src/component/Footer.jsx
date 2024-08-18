import React from 'react'
import { TwitterOutlined, WhatsAppOutlined,YoutubeOutlined,LinkedinOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div>
        <div className="join mt-4 bg-blue-700 flex flex-col text-white mx-auto text-center px-4">
          <h1 className="font-bold text-2xl py-4 pt-12">
          <TwitterOutlined className='mr-7' /><WhatsAppOutlined className='mr-7' /><YoutubeOutlined className='mr-7' /><LinkedinOutlined />
          </h1>
          <p className="text-lg mx-auto lg:w-[700px] pb-6">
          © 2019 Frame. All Rights Reserved.
Designed & Bootstrap templates by uiCookies
Demo Images by Unsplash
          </p>
         
          
        </div>
    </div>
  )
}

export default Footer