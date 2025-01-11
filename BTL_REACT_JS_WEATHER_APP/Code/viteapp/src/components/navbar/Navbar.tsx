import React from 'react'
import { Link } from 'react-router-dom'
// import { ModeToggle } from './mode-toggle'

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold">Weather App</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/settings" className="hover:underline">Settings</Link>
          {/* <ModeToggle /> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar