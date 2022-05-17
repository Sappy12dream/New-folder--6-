import Image from 'next/image'
import React from 'react'
import img1 from '../assets/Group 48095792.png'
import img2 from '../assets/Hero Shape Swirl.png'
function Hero() {
  return (
    <div className=" relative mx-auto flex w-full flex-col  items-center px-4 md:mb-60">
      <h1 className="md:mt-30 mt-24	 flex	flex-col items-center	text-center text-6xl	font-bold md:text-8xl	">
        Your Daily <span className="text-[#CD4631]">Podcast</span>
      </h1>
      <p className="mt-6 flex flex-col items-center text-sm md:mt-10	md:text-base">
        We cover all kinds of categories
        <span>and a weekly special guest.</span>
      </p>
      <button className=" mt-10 rounded-md	bg-black px-4 py-4 text-xs  font-bold text-white md:mt-14 md:ml-3 md:px-3 md:text-sm">
        SUBSCRIBE
      </button>
      <div className="left-0 top-1/4 hidden md:visible   md:absolute md:inline-block">
        <Image src={img2} alt="SUBSCRIBE" />
      </div>
      <div className=" right-0 top-1/4  hidden md:visible md:absolute md:inline-block">
        <Image src={img1} alt="SUBSCRIBE" />
      </div>
    </div>
  )
}

export default Hero
