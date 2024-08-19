import React from 'react'
import Cardp from './Cardp'

const Price = () => {
  return (
    <div>
         <div className="price flex flex-col mx-auto">
          <div className="heading">
            <h1 className="text-center text-2xl font-bold  mx-auto py-5">
              Choose the plan that’s right for your business
            </h1>
            <hr className="text-blue-900 font-extrabold w-9 text-center mx-auto py-5" />
            <p className="text-center w-[280px] mb-16 text-[18px] mx-auto">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
          </div>
          <div className="card flex flex-col gap-5 p-3 mx-auto md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
            <Cardp />
            <Cardp />
            <Cardp />
          </div>
        </div>

    </div>
  )
}

export default Price