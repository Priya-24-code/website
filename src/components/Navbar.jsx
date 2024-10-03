import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className=" backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
          <a href="/">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-indigo-600">Emulation</span>
            </div>
 </a>           
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="hacktoberfestregis" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">HacktoberFest Registration</a>
              <a href="members" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Members</a>
              <a href="aboutus" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">About Us</a>
              <a href="contactus" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false" 
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="hacktoberfestregis" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Hacktoberfest Registration</a>
          <a href="members" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Members</a>
          <a href="aboutus" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">About Us</a>
          <a href="contactus" className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
        </div>
      </div>
    </nav>
  )
}