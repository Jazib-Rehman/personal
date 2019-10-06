import React from 'react'
import Link from 'next/link'

class Header extends React.Component {

  render() {
    return (
      <header className="bg-prim font-prim text-white text-sm flex fixed w-full px-4 py-8 cursor-pointer items-center z-50 invisible md:visible">
        <div className="flex-1">
          <span className="px-2 border-r">عربي</span>
          <span className="px-2">JOIN OUR FAMILY</span>
        </div>
        <div className="flex-1 flex justify-center">
          <a href="index.html">
            <img src="static/assets/logo-3.png" alt="logo" className=" h-10" />
          </a>
        </div>
        <div className="menu flex-1 flex justify-end">
          <a href="/">HOME</a>
          <a href="/menu" className="px-6">OUR FOOD</a>
          {/* <a href="/aboutus.">ABOUT US</a> */}
        </div>
      </header>
    )
  }

}

export default Header