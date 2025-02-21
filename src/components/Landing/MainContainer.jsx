import { useEffect } from "react";
import { Link } from "react-router-dom";
import './MainContainer.css'; 
import mainBgVideo from "../../assets/main-bg.mp4";   

const MainContainer = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const parallax = document.querySelector(".parallax");
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      parallax.style.transform = `translate(${x * 50}px, ${y * 50}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <video
        className="absolute bg-black top-0 left-0 w-full h-full object-cover opacity-40 parallax"
        src={mainBgVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-white">
        <h2 className="text-6xl font-extrabold mb-6 animate-fadeIn">Explore the Universe</h2>
        <p className="text-2xl text-center mb-8 animate-fadeIn">Join us on an extraordinary journey through space, discovering the wonders of the cosmos.</p>
        <Link to="/form">
          <button className="bg-gradient-to-r from-purple-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition duration-300 animate-fadeIn">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainContainer;
