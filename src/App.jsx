import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header'
import ScrollTop from './components/Layout/ScrollTop';
import AboutSection from './components/Sections/AboutSection';
import BlogSection from './components/Sections/BlogSection';
import HeroSection from './components/Sections/HeroSection'
import ProductShowcase from './components/Sections/ProductShowcase';
import SocialResponsibility from './components/Sections/SocialResponsibility';
import StatsSection from './components/Sections/StatsSection';
import VideoSection from './components/Sections/VideoSection';
import './index.css'
import 'animate.css';
function App() {


  return (
    <>
  <Header/>
  <HeroSection/>
  <AboutSection/>
  <ProductShowcase/>
  <BlogSection/>
  <VideoSection/>
  <SocialResponsibility/>
  <StatsSection/>
  <Footer/>
  <ScrollTop/>
  </>
  )
}

export default App
