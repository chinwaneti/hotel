import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiPhoneCall } from 'react-icons/bi';
import { RiMenu2Fill, RiStarSLine } from 'react-icons/ri';
import { BsExclamationCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { LuLogOut } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [Nav, setNav] = useState(false);
    const route = useNavigate()
  const logout =()=>{
    route("/SignIn")
  }

  return (
    <div className="flex flex-col  items-end p-4">
      <p><div onClick={() => setNav((prev) => !prev)}>
          <RxHamburgerMenu size={30} className=' hover:scale-100 transition duration-300' />
        </div>
        <div
          className={`fixed left-0 top-0 md:w-[30%] z-50 h-screen bg-gray-100  p-10 ease-in duration-300 transform ${
            Nav ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className='flex justify-end mb-4 '>
            <div onClick={() => setNav((prev) => !prev)}>
              <AiOutlineClose className='text-cyan-700 hover:text-cyan-900 transition duration-300' />
            </div>
          </div>

          <div className='flex flex-col gap-4 overflow-auto  text-cyan-700 hover:text-cyan-900'>
            <p className=''>
              <Link to='/contact'>
                <li
                  onClick={() => setNav(false)}
                  className='py-2 flex space-x-4 cursor-pointer items-center text-lg  transition duration-300'
                >
                  <BiPhoneCall />Contact Us
                </li>
              </Link>

              <Link to="/lounge"
                onClick={() => setNav(false)}
                className='py-2 flex space-x-4 items-center cursor-pointer text-lg text-cyan-700 hover:text-cyan-900 transition duration-300'
              >
                <RiStarSLine />Lounge
              </Link>
              <Link to="/menu"
                onClick={() => setNav(false)}
                className='py-2 flex space-x-4 items-center cursor-pointer text-lg text-cyan-700 hover:text-cyan-900 transition duration-300'
              >
                <RiMenu2Fill />Menu
              </Link>
              <Link to='/about'
                onClick={() => setNav(false)}
                className='py-2 flex space-x-4 items-center cursor-pointer text-lg text-cyan-700 hover:text-cyan-900 transition duration-300'
              >
                <BsExclamationCircle />About Us
              </Link>
              <button
                onClick={() => {setNav(false); logout()}}
                
                className='py-2 flex space-x-4 items-center cursor-pointer text-lg text-cyan-700 hover:text-cyan-900 transition duration-300'
              >
                <LuLogOut />Logout
              </button>
            </p>
          </div>
        </div>
      </p>
    </div>
  );
};

export default HamburgerMenu;
