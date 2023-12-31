"use client"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
// import { useAuth } from './AuthContext';
import { motion } from 'framer-motion';


function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sucessMessage, setSucessMessage] = useState('');
  // const { setUser } = useAuth();
  
  const handleSignUp = (e) => {
    e.preventDefault();
    setErrorMessage('')
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        
        setSucessMessage("Congratulations! you are now registered.")
        // setUser(user);

      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  

  return (
    <div className="bg-cyan-900 overflow-hidden min-h-screen flex items-center justify-center relative">
        <div className='absolute top-28 bg-indigo-500 rounded-t-3xl w-full max-w-sm text-center  '>
            {sucessMessage && (
                <span className='  text-white'>{sucessMessage} <span><img src="https://cdn-icons-png.flaticon.com/128/10629/10629607.png?ga=GA1.1.1685298518.1695204527&track=ais" alt="pix" className='h-10 w-10 mx-auto'/></span>  <div className='text-center  '> <Link to='/SignIn' className=' underline'>Sign in</Link> </div></span>
            )}
        </div>
        <div className='fixed top-16 flex text-white font-extrabold text-4xl'>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <span className='flex items-center space-x-2'>
            <img src="https://cdn-icons-png.flaticon.com/128/7059/7059470.png?ga=GA1.1.1685298518.1695204527&track=ais" alt="" className='w-10 h-10' />
            <span>Chid</span>
          </span>
        </motion.div>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          inma
        </motion.div>

      </div>
      


      <div className="bg-white w-full max-w-sm mx-4 mt-20 rounded-br-3xl  shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-1 py-2 px-3 border rounded-lg border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full mt-1 py-2 px-3 border rounded-lg border-gray-300 focus:ring focus:ring-indigo-200 focus:outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        <button
          className="bg-cyan-600 text-white w-full py-2 rounded-lg active:bg-cyan-900 hover:bg-[#083664] transition duration-300 ease-in-out"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
      <Link to="/SignIn">
        <div className="absolute top-2 right-2 bg-[#236fdb] hover:bg-[#082c64]  active:bg-blue-950 p-2 rounded-full">
          <AiOutlineClose />
        </div>
      </Link>
     
    </div>
  );
}

export default SignUp;