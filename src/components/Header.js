import {
    MenuIcon,
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    ShoppingCartIcon,
  } from '@heroicons/react/outline';
import React from 'react'
import {signIn, signOut, useSession } from "next-auth/react"

function Header() {

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3 md:px-10">
    {/* left */}
    <div
      className="izina relative flex items-center h-10 cursor-pointer my-auto"
    >
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">Cagura</span>
          <span className="grey-color">/&gt;</span>
        </a>
    </div>

    {/* Middle */}
    <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2">
      <input
        type="text"
        placeholder={"Start your search"}
        className="pl-5 flex-grow bg-transparent text-gray-600 focus:outline-none cursor-pointer mx-auto"
      />
      <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2" />
    </div>


        <div className='text-black flex items-center justify-end space-x-4 text-gray5600'>
          <div onClick={signIn} className='cursor-pointer link'>
            <p>Hello</p>
            <p className='font-extrabold md:text-sm'>Accounts & Lists</p>
          </div>

          <div className='relative link flex items-center'
          >
            <span className='absolute top-0 right-0 md:right-10 h-5 w-5 bg-yellow-400 rounded-full text-center text-black font-bold'>
              0
            </span>
            <ShoppingCartIcon className='h-10' />
            <p className='hidden md:inline font-extrabold md:text-sm mt-2'>
              Basket
            </p>
          </div>
        </div>
  </header>
  )
}

export default Header