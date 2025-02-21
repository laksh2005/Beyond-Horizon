import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="container mx-auto px-8 py-10 flex flex-wrap justify-between items-start p-2 border-t border-t-gray-100">
        <div className="w-full md:w-1/4 mb-6">
          <h2 className="font-extrabold text-2xl mb-4">Beyond Horizon</h2>
          <p className="text-gray-400 text-lg">
            Embark on a Journey Through the Cosmos.
          </p>
        </div>

        <div className="w-full md:w-1/4 mb-6">
          <h3 className="font-bold text-lg mb-4">Explore</h3>
          <ul>
            <li className="mb-2">
              <Link to="/" className="text-gray-400 font-semibold hover:text-white hover:underline transition duration-300 ease-in-out">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/form" className="text-gray-400 font-semibold hover:text-white hover:underline transition duration-300 ease-in-out">Register</Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="text-gray-400 font-semibold hover:text-white hover:underline transition duration-300 ease-in-out">About Us</Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="text-gray-400 font-semibold hover:text-white hover:underline transition duration-300 ease-in-out">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-6">
          <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
          <form className="flex mt-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-lg w-full text-white bg-gray-900 hover:border border-white transition-all duration-300 ease-in-out"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-black font-semibold px-6 py-3 rounded-r-lg hover:opacity-80 transition-all duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-white mt-6">
        ©2024 Beyond Horizon, All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
