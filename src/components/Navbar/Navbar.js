import { React, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const Navbar = () => {
  let location = useLocation();
  useEffect(() => {                //Using UseLocation Hook from react router dom to check for the current route
    // and set the color of navbar links
  }, [location]);

  let navigate=useNavigate();
  const handleLogout = (params) => {
    localStorage.removeItem('token');
    navigate('/login')
  }
  

  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-white">iNotebook</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className={`mr-5 hover:text-white ${location.pathname === "/" ? "text-white" : ""}`} to="/">Home</Link>
          <Link className={`mr-5 hover:text-white ${location.pathname === "/about" ? "text-white" : ""}`} to="/about">About</Link>
          <Link className="mr-5 hover:text-white" to="/">Third Link</Link>
          <Link className="mr-5 hover:text-white" to="/">Fourth Link</Link>
        </nav>
        <div className='sm:flex-row'>
          {!localStorage.getItem('token')?<div className="inline-flex items-center border-[1px] border-white text-white py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0 mx-2" >
            <Link to='login'>Login</Link>
          </div>:
          <button className="inline-flex items-center border-[1px] border-white text-white py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-base mt-4 md:mt-0 mx-2" onClick={handleLogout}>
            Logout
          </button>}
        </div>

      </div>
    </header>
  )
}

export default Navbar
