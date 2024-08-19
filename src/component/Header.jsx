import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className="header w-full  bg-gray-500 flex  
         justify-between  text-white py-2 mx-auto">
          <a href="/">FRAME</a>
          <a className="lg:hidden" href="/">
            Drop
          </a>
          
          <ul className=" text-white  lg:visible flex space-x-4 mr-3">
              <li><Link to='/'>Home</Link></li>
              
              <li><Link to='/feature'>Feature</Link></li>
              <li><Link to='/review'>Review</Link></li>
              <li><Link to='/price'>Price</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              
            </ul>
            
          
        </div>
        <div className="flex flex-col bg-[url('/public/hero.jpg')] h-[500px] text-center   px-4">
          <div className="text-center">
            <p className="text-white py-[84px] px-11 w-[320px]  text-2xl font-semibold sm:w-[290px] text-center lg:w-[800px] lg:text-[50px] lg:text-center lg:ml-72 lg:leading-[60px]">
              uicookies.com Creates High Quality Bootstrap Template For Free
            </p>
            <a href='https://uicookies.com/'>
            <button className="bg-blue-900 px-2 py-4 text-white w-[300px] text-xl lg:w-[250px] mb-3 lg:mr-4">
              Get Them Now
            </button>
            </a>
            <button className="px-2 py-4 border border-solid w-[300px] text-xl text-white lg:w-[250px]">
             <Link to='/feature'>Sea Feature</Link> 
            </button>
          </div>
        </div>

    </div>
  )
}

export default Header