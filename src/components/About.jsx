import Header from './Header';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import aboutImage from '../assets/about.webp';
import gsap from 'gsap';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    gsap.from('.about-img', {
      opacity: 0,
      y: -50,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.3,
    });
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white flex flex-col items-center pt-16">
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between px-6">
          <div
            className={`text-box max-w-xl w-full ${isVisible ? 'fade-in' : ''}`}
            style={{
              animation: isVisible ? 'fadeIn 1.5s ease-out' : 'none',
            }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-700 to-pink-700 text-transparent bg-clip-text mb-6 text-center md:text-left">
              About Beyond Horizon
            </h1>
            <p className="text-lg md:text-xl font-medium leading-relaxed mb-6 text-center md:text-left">
              At Beyond Horizon, we are on a mission to make space travel accessible to everyone. Our goal is to
              provide unforgettable experiences in the vastness of space, with cutting-edge technology and
              world-class service. Whether you're looking to visit the International Space Station, explore
              distant planets, or simply float in zero gravity, we offer a range of options to make your dreams a
              reality. Join us on the journey beyond our world!
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img
              src={aboutImage}
              alt="About Us"
              className="about-img w-[350px] md:w-[500px] h-auto rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
