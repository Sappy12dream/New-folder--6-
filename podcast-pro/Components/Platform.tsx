import Image from 'next/image'
import React from 'react'
import youtubeLogo from '../assets/Youtube.png'
import googleLogo from '../assets/Google Podcast.png'
import spotifyLogo from '../assets/Spotify.png'
function Platform() {
  return (
    <div className=" mx-auto my-10  flex w-fit items-center justify-center gap-1 border-y-2 border-black py-4  md:my-20 md:gap-40 md:py-10">
      <div className="text-xs font-bold	md:text-2xl	">Supported by:</div>
      <Image src={spotifyLogo} alt="Spotify" />
      <Image src={googleLogo} alt="google" />
      <Image src={youtubeLogo} alt="youtube" />
    </div>
  )
}

export default Platform
