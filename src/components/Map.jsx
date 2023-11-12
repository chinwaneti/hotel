import React, { useState } from 'react';

const Map = () => {
  const [destination, setDestination] = useState('23 Road, T close, Festac');
  const [destination1, setDestination1] = useState('');

  const handleGetDirections = () => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(destination1)}&destination=${encodeURIComponent(destination)}`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <div className="md:flex my-20">
      <div className=" md:w-[50%] ml-10 map-container md:ml-20">
        <iframe
          width="90%"
          height="400"
          src="https://maps.google.com/maps?width=620&amp;height=400&amp;hl=en&amp;q=23%20Road,%20T%20close+(Chidinma)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
        >
        </iframe>
      </div>
      <div className="md:w-[40%] form  mt-8 p-4">
        <div className="p-6 o">
          <h2 className="text-2xl font-bold mb-4 text-cyan-600">Get Directions</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="from" className="block text-xl font-medium text-cyan-600">From:</label>
              <input
                type="text"
                id="from"
                className="mt-1 p-2 w-full border-b-cyan-600 border-b-2"
                value={destination1}
                onChange={(e) => setDestination1(e.target.value)}
                placeholder="Enter your starting location"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="to" className="block text-xl font-medium text-cyan-600">To:</label>
              <input
                type="text"
                id="to"
                className="mt-1 p-2 w-full border-b-cyan-600 border-b-2"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter your destination"
              />
            </div>
            <button
              type="button"
              onClick={handleGetDirections}
              className="bg-cyan-600 text-white p-2 mt-7 rounded-md hover:bg-cyan-800"
            >
              Get Directions
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Map;
