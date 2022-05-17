import Image from 'next/image'
import React from 'react'
import cover1 from '../assets/cover.png'
import cover2 from '../assets/cover (1).png'
import cover3 from '../assets/cover (2).png'
import cover4 from '../assets/cover (3).png'
import cover5 from '../assets/cover (4).png'
function Covers() {
  return (
    <div className="mt-10 flex gap-3">
      <Image src={cover4} alt="cover1" />
      <Image src={cover3} alt="cover1" />
      <Image src={cover1} alt="cover1" />
      <Image src={cover2} alt="cover1" />
      <Image src={cover5} alt="cover1" />
    </div>
  )
}

export default Covers
