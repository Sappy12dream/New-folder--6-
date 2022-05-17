import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Covers from '../Components/Covers'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Platform from '../Components/Platform'
import scribble from '../assets/Scribble.png'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Podcast-pro</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative h-full w-full bg-[#F7EDE8] pb-10 font-montserrat">
        <Header />
        <Hero />
        <Covers />
        <Platform />
        <div className="top-3/5 absolute left-1/2 h-10 w-10 -translate-x-2/4 -translate-y-1/4 pt-10 md:h-full md:w-full md:pt-0">
          <Image src={scribble} alt="Scribble" />
        </div>
      </div>
      <div>hello</div>
    </div>
  )
}

export default Home
