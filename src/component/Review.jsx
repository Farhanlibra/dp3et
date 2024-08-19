import React from 'react'
import Rcard from './Rcard'


const Review = () => {
  return (
    <div>
        <div className="review bg-pink-400">
          <div className="heading">
            <h1 className="text-center text-4xl font-bold py-5 pt-10">
              That’s why 100,000+ Love Frame
            </h1>
            <hr className="text-blue-900 font-extrabold w-9 text-center mx-auto py-5" />
            <p className=" min-w-fit text-center mb-16 text-[18px] w-[350px] mx-auto lg:mx-auto lg:w-[650px]">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
          </div>
          <div className="card flex flex-col gap-5  p-7 mx-auto md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
            <Rcard />
            <Rcard />
            <Rcard />
            <Rcard />
            <Rcard />
            <Rcard />
          </div>
        </div>

    </div>
  )
}

export default Review