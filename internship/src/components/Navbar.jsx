import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      
        <div className="flex justify-around bg-blue-400 text-amber-50 text-xl p-4 rounded-2xl mx-3 my-2">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Service</Link>
            <Link to="/">Contact</Link>
        </div>
    </nav>
    
  )
}

export default Navbar