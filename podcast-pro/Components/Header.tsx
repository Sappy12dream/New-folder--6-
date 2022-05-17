import logoImg from '../assets/image 1.png'
import ArrowDown from '../assets/Arrow - Down.png'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md'
import { useState } from 'react'
function Header() {
  const [toggle, settoggle] = useState(false)
  return (
    <>
      <nav className="  mx-auto flex h-24 w-full max-w-[1240px] items-center justify-between px-4">
        <div className="flex items-center justify-center">
          <Link href="/">
            <a className="h-10 w-10 ">
              <Image src={logoImg} alt="logo" />
            </a>
          </Link>
          <div className="ml-4 hidden md:flex">
            <Link href="/episodes">
              <a className="px-4 text-base font-bold	 ">Episodes</a>
            </Link>
            <Link href="/about">
              <a className="px-4 text-base font-bold">About</a>
            </Link>
            <div className="flex items-center gap-1 px-4 text-base font-bold">
              <Link href="/more ">More</Link>{' '}
              <Image src={ArrowDown} alt="arrow-down" />
            </div>
          </div>
        </div>
        <div className="mx-4 flex">
          <button className="rounded-md	border-2 border-black px-2	py-1 text-xs font-bold	md:px-3 md:text-sm">
            Recent Episodes
          </button>
          <button className="ml-2	rounded-md bg-black px-2 py-1 text-xs font-bold text-white md:ml-3 md:px-3 md:text-sm">
            Subscribe
          </button>
          <button
            className="ml-2 text-lg font-bold md:hidden"
            onClick={() => settoggle(true)}
          >
            <MdOutlineMenu />
          </button>
        </div>
      </nav>
      <div className={toggle ? 'fixed inset-0 z-10 	bg-white' : 'hidden'}>
        <MdOutlineClose
          className="absolute right-3 top-3"
          onClick={() => settoggle(false)}
        />
        <div className="mt-20 flex flex-col items-center justify-center">
          <Link href="/episodes">
            <a className="px-4 text-base font-bold	 ">Episodes</a>
          </Link>
          <Link href="/about">
            <a className="px-4 text-base font-bold">About</a>
          </Link>
          <div className="flex items-center gap-1 px-4 text-base font-bold">
            <Link href="/more ">More</Link>{' '}
            <Image src={ArrowDown} alt="arrow-down" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
