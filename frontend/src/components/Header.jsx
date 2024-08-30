import {FaSearch} from 'react-icons/fa'

import { Link } from 'react-router-dom'
function Header() {
  return (
    // styling the items on the navbar
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between
        p-3 items-center max-w-6xl mx-auto '>
{/* styling the logo */}
<Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap '>
            <span className='text-slate-500'>FARMER</span>
            <span className='text-slate-800'>Store</span>
        </h1>
        </Link>
{/* styling the search bar */}
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type='text' placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <FaSearch className='text-slate-500'/>
        </form>
        {/* styling the links */}
        <ul className='flex gap-4'>
          <Link to='/'>
          <li className='hidden sm:inline text-slate-800 hover:underline'>Home</li>
          </Link>
          <Link to='/AboutUs'>
          <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
          </Link>
          <Link to='/SignIn'>
          <li className=' text-slate-700 hover:underline'>Sign In</li>
          </Link>
        </ul>

        </div>
      
    </header>
  )
}

export default Header