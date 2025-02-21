import { useState, useEffect } from 'react';
import './Form.css';
import faqsBg from '../assets/faqs-bg.mp4';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    phone: '',
    email: ''
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
    <Header />
    <div className="form-container">
      <video className="background-video absolute top-10 left-[-20] right-30 w-full h-full object-cover z-0 opacity-90" autoPlay loop muted>
        <source src={faqsBg} type="video/mp4" />
      </video>

      <div className={`form-content ${isVisible ? 'fadeIn' : ''}`}>
        <h2 className="text-4xl text-center text-white font-bold mb-6 bg-gradient-to-r from-purple-700 to-pink-700 text-transparent bg-clip-text">
          Contact our team!
        </h2>

        <form className="space-y-6 w-full max-w-lg mx-auto bg-transparent opacity-80 p-8 rounded-3xl border-4 border-purple-700 bg-opacity-50">
          <div className="input-group">
            <label htmlFor="fullName" className="text-white font-semibold">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded-xl text-white bg-transparent border-2 border-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-700 transition-all"
            />
          </div>

          <div className="input-group">
            <label htmlFor="age" className="text-white font-semibold">Email ID</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-3 rounded-xl text-white bg-transparent border-2 border-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-700 transition-all"
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone" className="text-white font-semibold">Message</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-xl text-white bg-transparent border-2 border-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-700 transition-all"
            />
          </div>

          <button type="submit" className="w-full p-3 text-white bg-gradient-to-r from-purple-700 to-pink-700 rounded-xl hover:scale-105 transition-all duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;
