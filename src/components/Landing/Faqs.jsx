import { useState, useEffect, useRef } from "react";
import './Faqs.css';
import faqsBg from "../../assets/faqs-bg.mp4"; 

const faqsData = [
  {
    question: "What is the process for booking a space travel ticket?",
    answer: "You can book a space travel ticket through our website by selecting your desired destination and travel date, then proceeding with payment and registration for the required pre-launch training.",
  },
  {
    question: "How long does a space journey typically take?",
    answer: "Space journeys vary depending on the destination. A trip to the International Space Station typically takes 24 hours, while interplanetary journeys may take several months.",
  },
  {
    question: "Is space tourism safe for civilians?",
    answer: "Yes, space tourism is equipped with state-of-the-art technology and thorough safety measures. All travelers undergo extensive training, and flights are monitored by experienced astronauts and mission control teams.",
  },
  {
    question: "What should I expect during the zero-gravity experience?",
    answer: "During the zero-gravity experience, you will feel weightless and free to float around in the spacecraft. It’s an exhilarating experience, offering you a unique perspective of space and the Earth below.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [inView, setInView] = useState(new Array(faqsData.length).fill(false));

  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleScroll = () => {
    faqRefs.current.forEach((faq, index) => {
      if (faq) {
        const rect = faq.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setInView((prevState) => {
            const newState = [...prevState];
            newState[index] = true;
            return newState;
          });
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="faqs-component relative px-8 py-20 flex flex-col items-center bg-black">
      <video
        className="absolute top-0 left-[-30] right-30 w-full h-full object-cover z-0 opacity-20"
        autoPlay
        loop
        muted
      >
        <source src={faqsBg} type="video/mp4" />
      </video>

      <h1 className="title big-text font-bold text-4xl text-center mb-20 bg-gradient-to-r from-purple-700 to-purple-400 text-transparent bg-clip-text z-10">
        <span className="text-white">F</span>requently
        <span className="text-white"> A</span>sked 
        <span className="text-white"> Q</span>uestion<span className="text-white">s</span>
      </h1>

      <div className="px-10 w-7/12 ques-container z-10">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item mb-5 rounded-full transition-transform transform hover:-translate-y-3 hover:shadow-lg duration-300 text-white border ${
              openIndex === index ? "border-pink-400" : "border-purple-800"
            } ${inView[index] ? "fade-in" : ""}`}
            ref={(el) => (faqRefs.current[index] = el)}
          >
            <div
              className="ques-box flex justify-between px-6 py-1 m-4 cursor-pointer space-y-3"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="font-bold text-lg flex-1 text-left my-auto">{faq.question}</h2>
              <span className="text-2xl text-white font-bold mx-4">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`px-6 py-3 overflow-hidden transition-all duration-900 ease-in-out ${
                openIndex === index ? "max-h-screen opacity-100 animate-fadeIn" : "max-h-0 opacity-0"
              }`}
            >
              <p className="font-semibold m-3">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;

