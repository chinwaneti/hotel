import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import NavBar from './NavBar';
import Footer from './Footer';

const ReservationPage = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    numberOfGuests: '',
    specialRequests: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your reservation submission logic here
    console.log('Reservation submitted:', formData);
    // You may want to send the data to a server or perform other actions
  };

  // if (!user) {
  //   // Redirect to SignIn if user is not authenticated
  //   return <Navigate to="/SignIn" />;
  // }

  return (
    <div className="container mx-auto mt-8">
      <NavBar />
      <h2 className="text-3xl ml-5 mt-32 text-cyan-600 font-bold mb-4">Make a Reservation</h2>

      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700">
              Number of Guests
            </label>
            <input
              type="number"
              id="numberOfGuests"
              name="numberOfGuests"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.numberOfGuests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-span-2 mb-4">
            <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700">
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              rows="4"
              className="mt-1 p-2 border rounded-md w-full"
              value={formData.specialRequests}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-800 transition duration-300"
            >
              Submit Reservation
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ReservationPage;
