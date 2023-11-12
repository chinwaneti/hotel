import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import HamburgerMenu from './Hamburger';
import { motion } from 'framer-motion';


const NavLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <div className="relative group cursor-pointer">
       
        <motion.p
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="relative   group-hover:underline hide"
        >
          {children}
        </motion.p>
      </div>
    </Link>
  );
};


export default function NavBar() {
  const { logout } = useAuth();
  const history = useNavigate();

  const handleLogout = () => {
    logout();
    history('/SignIn');
  };

  return (
    <nav className="fixed w-full bg-white top-0  z-50 p-4 text-cyan-700 flex justify-between items-center">
      <div className='flex justify-between items-center'>
        <p className='lg:hidden md:hidden'> <HamburgerMenu /></p>
        <Link to="/home" className="hover:text-gray-300 hidden sm:block nav-link">
        <div className="text-xl font-bold">Chidinma</div>
        </Link>
        </div>

      <div className="space-x-6 flex items-center ">
        <Link to="/home" className="hover:text-cyan-700 sit cursor-pointer ">
          Home
        </Link>
        <NavLink to="/menu" className="hover:text-gray-300 cursor-pointer">
          Menu
        </NavLink>
        <NavLink to="/about" className="hover:text-gray-300 hidden sm:block cursor-pointer nav-link">
          About
        </NavLink>
          <>
            <NavLink to="/contact" className="hover:text-gray-300 hidden sm:block cursor-pointer nav-link">
              Contact
            </NavLink>
        <NavLink to="/lounge" className="hover:text-gray-300 hidden sm:block cursor-pointer nav-link">
          Lounge
        </NavLink>
            <button 
              onClick={handleLogout}
              className="hover:text-cyan-800 bg-cyan-600 px-4 text-white py-2 rounded-xl cursor-pointer focus:outline-none"
            >
              Logout
            </button>
          </>
      </div>
    </nav>
  );
}
