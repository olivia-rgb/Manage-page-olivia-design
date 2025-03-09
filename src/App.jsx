import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Slider from './Components/Slider'
import Footer from './Components/Footer'
import Merge from './Components/Merge'


function App() {
  return (
    
    <div className=' '>
      <Merge />
      <About />
      <Slider />
      <div className='w-full bg-[url("/bg-simplify-section-mobile.svg")] md:bg-[url("/bg-simplify-section-desktop.svg")] bg-no-repeat bg-cover bg-center bg-[#f25f3a] py-20'>
        <div className='w-[90%] max-w-[1400px] mx-auto flex  gap-6 flex-col md:flex-row   items-center text-center md:text-left justify-between '>
           <h1 className='text-white text-3xl md:text-4xl font-bold'>Simplify how your team <br/> works today.</h1>
           <button className='text-[#f25f3a] bg-white py-2 rounded-full w-40 mx-auto md:mx-0' >Get Started</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App