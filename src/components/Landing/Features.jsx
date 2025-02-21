import { useEffect, useRef } from 'react';
import F1 from '../../assets/F1.jpg';
import F2 from '../../assets/F2.png';
import F3 from '../../assets/F3.jpg';
import F4 from '../../assets/F4.jpg';
import './Features.css'

const Features = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fadeInUp");
        }
      });
    }, {
      threshold: 0.5
    });

    cardsRef.current.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="px-8 py-20 font-sans bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="card-container flex flex-col z-10 space-y-16">
        <div
          className="card flex flex-col md:flex-row items-center w-full space-y-10 transition-all transform hover:scale-101 bg-opacity-70 rounded-3xl fadeInUp"
          ref={(el) => cardsRef.current[0] = el}
        >
          <div className="feature-img flex w-full md:w-1/2 mx-8 justify-center transition-all transform hover:scale-105 rounded-xl">
            <div className="w-96 aspect-square rounded-xl overflow-hidden">
              <img src={F1} alt="Interplanetary Travel" className="object-cover w-full h-full hover:scale-101 transition-all" />
            </div>
          </div>
          <div className="feature-card transform transition-transform duration-300 hover:-translate-y-1 border border-custom1 hover:border-purple-500 w-full md:w-1/2 p-8 text-center rounded-3xl bg-transparent">
            <h2 className="text-4xl p-2 md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-pink-500 text-transparent bg-clip-text mb-8 leading-tight">
              Interplanetary Travel
            </h2>
            <p className="feature-desc text-white text-lg md:text-xl opacity-90">
              Embark on a journey to distant planets with cutting-edge spacecraft.
            </p>
          </div>
        </div>

        <div
          className="card flex flex-col md:flex-row-reverse items-center w-full space-y-10 transition-all transform hover:scale-101 bg-opacity-70 rounded-3xl fadeInUp"
          ref={(el) => cardsRef.current[1] = el}
        >
          <div className="feature-img flex w-full md:w-6/12 mx-8 justify-center items-center transition-all transform hover:scale-105 rounded-xl">
            <div className="w-96 aspect-square rounded-xl overflow-hidden">
              <img src={F2} alt="Space Tourism Packages" className="object-cover w-full h-full hover:scale-101 transition-all" />
            </div>
          </div>
          <div className="feature-card transform transition-transform duration-300 hover:-translate-y-1 border border-custom2 hover:border-pink-200 w-full md:w-6/12 p-8 text-center rounded-3xl bg-transparent">
            <h2 className="text-4xl p-2 md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-pink-500 text-transparent bg-clip-text mb-8 leading-tight">
              Space Tourism Packages
            </h2>
            <p className="feature-desc text-white text-lg md:text-xl opacity-90">
              Various tourism packages for those wanting to explore space, including luxury stays.
            </p>
          </div>
        </div>

        <div
          className="card flex flex-col md:flex-row items-center  w-full space-y-10 transition-all transform hover:scale-101 bg-opacity-70 rounded-3xl fadeInUp"
          ref={(el) => cardsRef.current[2] = el}
        >
          <div className="feature-img flex w-full md:w-5/12 mx-8 justify-center transition-all transform hover:scale-101 rounded-xl">
            <div className="w-96 aspect-square rounded-xl overflow-hidden ">
              <img src={F3} alt="Lunar Base Exploration" className="object-cover w-full h-full hover:scale-101 transition-all" />
            </div>
          </div>
          <div className="feature-card transform transition-transform duration-300 hover:-translate-y-1 border border-custom1 hover:border-purple-500 w-full md:w-1/2 p-8 text-center rounded-3xl bg-transparent">
            <h2 className="text-4xl p-2 md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-pink-500 text-transparent bg-clip-text mb-8 leading-tight">
              Lunar Base Exploration
            </h2>
            <p className="feature-desc text-white text-lg md:text-xl opacity-90">
              Visit and explore the lunar base, experiencing life on the Moon.
            </p>
          </div>
        </div>

        <div
          className="card flex flex-col md:flex-row-reverse items-center w-full space-y-10 transition-all transform hover:scale-101 bg-opacity-70 rounded-3xl fadeInUp"
          ref={(el) => cardsRef.current[3] = el}
        >
          <div className="feature-img flex w-full md:w-1/2 mx-8 justify-center items-center transition-all transform hover:scale-105 rounded-xl">
            <div className="w-96 aspect-square rounded-xl overflow-hidden ">
              <img src={F4} alt="Zero Gravity Experience" className="object-cover w-full h-full hover:scale-101 transition-all" />
            </div>
          </div>
          <div className="feature-card transform transition-transform duration-300 hover:-translate-y-1 border border-custom2 hover:border-pink-200 w-full md:w-1/2 p-8 text-center rounded-3xl bg-transparent">
            <h2 className="text-4xl p-2 md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-pink-500 text-transparent bg-clip-text mb-8 leading-tight">
              Zero Gravity Experience
            </h2>
            <p className="feature-desc text-white text-lg md:text-xl opacity-90">
              Experience weightlessness in space, just like astronauts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
