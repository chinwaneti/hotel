import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChefImage from './images/chef.png'; // Assuming you have a ChefImage component
import { useAuth } from './AuthContext'; // Assuming you have an AuthContext for Firebase authentication
import Form from './Form';
import NavBar from './NavBar';

const SignInPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Redirect to the reservation page upon successful login
  React.useEffect(() => {
    if (user) {
      navigate('/reservationPage');
    }
  }, [user, navigate]);

  return (
    <div className=''>
      <NavBar />
    <div className="md:flex mt-16 ">
      <div className="md:w-1/2 p-8 md:py-28 py-20 bg-gray-100">
        <p className='font-bold text-3xl text-cyan-600 mb-7 md:ml-14'>Sign In To Make Reservations</p>
        <Form />
      </div>
      <div className="md:w-1/2 md:p-8">
        {/* Right side: Chef image */}
        <img src={ChefImage} alt="chef" />
        <div className='h-10 bg-cyan-600'></div>
      </div>
    </div></div>
  );
};

export default SignInPage;
