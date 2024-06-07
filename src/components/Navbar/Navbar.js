import { React, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {
  let location = useLocation();
  useEffect(() => {                //Using UseLocation Hook from react router dom to check for the current route
                                    // and set the color of navbar links
  }, [location]);

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">iNotebook</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className={`mr-5 hover:text-black ${location.pathname==="/"?"text-black":""}`} to="/">Home</Link>   
          <Link className={`mr-5 hover:text-black ${location.pathname==="/about"?"text-black":""}`} to="/about">About</Link>
          <Link className="mr-5 hover:text-black" to="/">Third Link</Link>
          <Link className="mr-5 hover:text-black" to="/">Fourth Link</Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar
