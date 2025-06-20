import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 p flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
     <Link to={"/"} > <span className="ml-3 text-xl">FoodWithLove</span></Link>
    </a>
    <nav className="hidden md:ml-auto md:mr-32 md:flex flex-wrap items-center text-base justify-center ">
     
      <Link to={"/"} className='mr-10'>Home</Link>
      <Link to={"/about"} className="mr-10">About</Link>
      <Link to={"/contact"} className="mr-10">Contact</Link>
    </nav>
    
  </div>
</header>

  )
}

export default Navbar
