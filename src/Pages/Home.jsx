import React from "react";
import { MobileOutlined } from "@ant-design/icons";
import Cardp from "../component/Cardp";
import Rcard from "../component/Rcard";

import Header from '../component/Header'
import Feature from "../component/Feature";
import Price from "../component/Price";
import Review from "../component/Review";
import Contact from '../component/Contact'
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <main className=" min-h-screen px-4 sm:w-full mx-auto">
      

        <div className="intro flex flex-col lg:flex-row gap-8 lg:p-28">
          <div className="mb-4">
            <div className="icon py-6">
              <MobileOutlined className="text-8xl" />
            </div>
            <h1 className="text-blue-900 text-2xl py-6">Mobile Optimize</h1>
            <p className="w-[330px] leading-8 text-md sm:w-[340px]">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <a className="text-blue-800 mt-48 text-2xl" href="">
              Learn more
            </a>
          </div>
          <div>
            <div className="icon mt-6 mb-4">
              <MobileOutlined className="text-8xl" />
            </div>
            <h1 className="text-blue-900 text-2xl py-6">Increase Revenue</h1>
            <p className="w-[330px] leading-8 text-md">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <a className="text-blue-800 mt-48 text-2xl" href="">
              Learn more{" "}
            </a>
          </div>
          <div className="mt-6">
            <div className="icon">
              <MobileOutlined className="text-8xl" />
            </div>
            <h1 className="text-blue-900 text-2xl py-6">Smart Idea</h1>
            <p className="w-[330px] leading-8 text-md">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <a className="text-blue-800 mt-48 text-2xl" href="">
              Learn more{" "}
            </a>
          </div>
        </div>
        <Feature/>
       <Price/>
        <Review/>
        <div className="try my-8">
          <div className="heading">
            <h1 className="text-center text-4xl font-bold py-5 pt-10">
              Try It Today
            </h1>
            <hr className="text-blue-900 font-extrabold w-9 text-center mx-auto py-5" />
            <p className="text-center mb-16 text-[18px] w-[350px] mx-auto lg:mx-auto lg:w-[650px]">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.
            </p>
          </div>
          <div className="image">
            <img src="try1.jpg"></img>
          </div>
          <div className="desc flex mx-auto flex-col lg:grid lg:grid-cols-2 gap-8">
            <div className="p">
              <h1 className="font-bold text-2xl py-4">What is Instant?</h1>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
            <div className="p">
              <h1 className="font-bold text-2xl py-4">What is Instant?</h1>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
            <div className="p">
              <h1 className="font-bold text-2xl py-4">What is Instant?</h1>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
            <div className="p">
              <h1 className="font-bold text-2xl py-4">What is Instant?</h1>
              <p className="mx-auto">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
          </div>
        </div>
        <div className="join bg-blue-700 flex flex-col text-white mx-auto text-center px-4">
          <h1 className="font-bold text-2xl py-4 pt-12">
            Join With Over 100K Members
          </h1>
          <p className="text-lg mx-auto lg:w-[700px]">
            But nothing the copy said could convince her and so it didn’t take
            long until a few insidious Copy Writers ambushed her, made her drunk
            with Longe and Parole and dragged her into their agency, where they
            abused her for their.
          </p>
          <div className="py-6">
            <button className="py-3 px-2 bg-purple-300 text-white w-48 text-lg">
              Get Started
            </button>
          </div>
        </div>
       <Contact/>
       
      </main>
    </>
  );
};

export default Home;
