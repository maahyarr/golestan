import Header from './components/Layout/Header'
import AboutSection from './components/Sections/AboutSection';
import BlogSection from './components/Sections/BlogSection';
import HeroSection from './components/Sections/HeroSection'
import ProductShowcase from './components/Sections/ProductShowcase';
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
  </>
  )
}

export default App
