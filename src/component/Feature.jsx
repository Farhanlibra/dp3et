import React from 'react'

const Feature = () => {
  return (
    <div>
        <div className="features flex flex-col gap-3 bg-indigo-400 p-4 mt-5 ">
          <h1 className="text-center text-4xl font-bold py-5">Features</h1>
          <hr className="text-white w-9 text-center mx-auto py-5" />
          <p className="text-center mb-16 text-[18px] lg:w-[600px] lg:mx-auto">
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </p>
          <div className="flex flex-col lg:flex-row  gap-10">
            <div className="left">
              <img src="f1.jpg"></img>
            </div>
            <div className="right">
              <h1 className="text-gray-50 text-3xl py-6">
                Big Benefits for Small Business
              </h1>
              <p className="py-3">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <ul className="list-disc">
                <li className="ml-4">Pointing has no control</li>
                <li className="ml-4">A small river named Duden flows</li>
                <li className="ml-4">
                  Roasted parts of sentences fly into your mouth
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col  gap-10 lg:flex-row-reverse">
            <div className="left">
              <img src="f1.jpg"></img>
            </div>
            <div className="right">
              <h1 className="text-gray-50 text-3xl py-6">
                How Frame is different
              </h1>
              <p className="py-3">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <ul className="list-disc">
                <li className="ml-4">Pointing has no control</li>
                <li className="ml-4">A small river named Duden flows</li>
                <li className="ml-4">
                  Roasted parts of sentences fly into your mouth
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  gap-10">
            <div className="left">
              <img src="f1.jpg"></img>
            </div>
            <div className="right">
              <h1 className="text-gray-50 text-3xl py-6">All in One Place</h1>
              <p className="py-3">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <ul className="list-disc">
                <li className="ml-4">Pointing has no control</li>
                <li className="ml-4">A small river named Duden flows</li>
                <li className="ml-4">
                  Roasted parts of sentences fly into your mouth
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Feature