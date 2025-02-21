import { Link } from "react-router-dom";

const Header = () => {
  return (
    //bg-gradient-to-b from-purple-700 to-black
    <div className="bg-black flex justify-between items-center p-4 z-30 relative">
      <div className="pl-6 cursor-pointer">
        <h1 className="text-4xl mx-8 text-white font-extrabold "><Link to="/">Beyond Horizon</Link></h1>
      </div>

      <div className="flex items-center font-sans">
        <ul className="flex p-4 space-x-8 items-center justify-center">
          <li className="cursor-pointer px-6 py-3 text-white font-bold hover:bg-gradient-to-l from-purple-500 to-purple-900 hover:text-black rounded-full transition duration-300 ease-in-out">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointerpx-6 py-3 text-white font-bold hover:bg-gradient-to-l from-purple-500 to-purple-900 hover:text-black rounded-full transition duration-300 ease-in-out">
            <Link to="/form">Register</Link>
          </li>
          <li className="cursor-pointer px-6 py-3 text-white font-bold hover:bg-gradient-to-l from-purple-500 to-purple-900 hover:text-black rounded-full transition duration-300 ease-in-out">
            <Link to="/about">About Us</Link>
          </li>
          <li className="cursor-pointer px-6 py-3 text-white font-bold hover:bg-gradient-to-l from-purple-500 to-purple-900 hover:text-black rounded-full transition duration-300 ease-in-out">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
