import React from 'react'

const Contact = () => {
  return (
    <div>
         <div className="contact  m flex flex-col  lg:flex-row lg:ml-64">
          <div className="left ">
            <form className="shadow-2xl border-solid px-6  my-12 bg-white ">
              <h1 className="font-bold text-2xl py-6">Get In Touch</h1>
              <input
                className="border-solid my-2 sm:w-[370px] lg:w-[400px]"
                type="text"
                placeholder="Name"
              ></input>
              <br></br>
              <input
                className="border-solid my-2 sm:w-[370px] lg:w-[400px]"
                type="text"
                placeholder="Email"
              ></input>
              <br></br>
              <input
                className="border-solid my-2 sm:w-[370px] lg:w-[400px]"
                type="text"
                placeholder="Phone"
              ></input>
              <br></br>
              <input
                className="border-solid my-2 sm:w-[370px] lg:w-[400px] h-60"
                type="text"
                placeholder="Enter Message Here"
              ></input>
              <br></br>
              <button className="bg-slate-700 text-white w-[170px] h-[35px] mb-8">
                Send Message
              </button>
            </form>
          </div>
          <div className="right lg:my-20 lg:ml-20 px-4">
            <p className="text-pink-600">Email</p>
            <p>probootstrap@gmail.com</p>
            <p className="text-pink-600 mt-6">Phone</p>
            <p>+30 976 1382 9921</p>
            <p className="text-pink-600 mt-6">Fax</p>
            <p>+30 976 1382 9922</p>
            <p className="text-pink-600 mt-6">Address</p>
            <p>San Francisco, CA</p>
            <p>4th Floor8 Lower</p>
            <p>San Francisco street, M1 50F</p>
          </div>
        </div>
    </div>
  )
}

export default Contact