import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" text-cyan-700 p-8">
      <div className="container ">
      <section className=" py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-cyan-700">CHIDINMA RESTUARANT</h2>
          
          <Link
            to="/contact"
            className="bg-cyan-700 text-white px-6 py-3 rounded-full inline-block hover:bg-[#082c64] transition duration-300 ease-in-out"
          >
            Get in Touch
          </Link>
        </div>
      </section>
        <div className="grid grid-cols-1 md:text-left text-center md:grid-cols-2 lg:grid-cols-3 gap-8 md:ml-52 ">
          {/* Address Section */}
          <div className=''>
            <h3 className="text-xl font-semibold mb-4">ADDRESS</h3>
            <p>122 Joel Ogunnaike Street, Ikeja GRA</p>
            <p>Lagos, Lagos 100271</p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">CONTACT US</h3>
            <p>Inquiries: +234 908 999 1040</p>
            <p>Email: LOSLG.chidinma@marriott.com</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">CONNECT WITH US</h3>
            <div className="flex space-x-4 md:ml-0 ml-44">
              <p>
                <FaFacebookF />
              </p>
              <p>
                <FaInstagram />
              </p>
            </div>
          </div>
        </div>

        {/* Hours Section */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">HOURS</h3>
          <p>TUE - SUN : 12PM - 4PM AND 6PM - 10.30PM</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-cyan-700 pt-4 text-sm text-center">
        <p>&copy; 2023 All Rights Reserved.</p>
        <p>
          <p>Accessibility</p> | <p>FAQs</p> | <p>Privacy Policy</p> |{' '}
          <p>Site Map</p> | <p>Your Privacy Rights</p> |{' '}
          <p>Tracking Preferences</p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
