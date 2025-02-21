import Features  from "./Landing/Features"
import MainContainer from "./Landing/MainContainer"
import Faqs from "./Landing/Faqs"
import Header from './Header'
import Footer from './Footer'

const Landing = () => {
  return (
    <>
    <Header />
    <MainContainer />
    <Features />
    <Faqs />
    <Footer />
    </>
  )
}

export default Landing