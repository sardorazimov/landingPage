

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Work from './components/Work'
import Footer from './components/Footer'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import './index.css'

function App() {
 

  return (
   <>
    <Navbar />
    <div className='max-w-7xl mx-auto pt-20 px-6'>
      <Hero /> 
      <Section />
      <Work />
      <Pricing />
      <Testimonials/>
      <Footer/>
    </div>
   </>
  )
}

export default App
