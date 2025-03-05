import React, { useState } from 'react'

function Navbar() {
  const [isMenuOpen ,setisMenuOpen] = useState(false)

  const toggleMenu = () =>{
    setisMenuOpen(!isMenuOpen)
  }
  return (
    <div className='w-[90%] max-w-[1400px] mx-auto'>
            <div class={`fixed top-0 left-0 h-full w-full  transition-opacity duration-300  bg-[#45424266] ${isMenuOpen? 'opacity-100':'opacity-0'} `}></div>
          <div className=' w-full flex justify-between pt-10 relative items-center'>
              <img src="/logo.svg" alt="logo" className='z-50'/>
              <div  className={`flex flex-col z-30 md:flex-row gap-6 text-black md:text-[#9095a7] absolute top-25 rounded-md left-0 w-full h-96 justify-center items-center md:static ${isMenuOpen? 'flex':'hidden'} md:flex md:h-0 bg-white md:bg-transparent font-bold `}>          <a href="">Pricing</a>
                <a href="">Product</a>
                <a href="">About Us</a>
                <a href="">Career</a>
                <a href="">Community</a>
              </div>
              
              <button className='hidden md:block bg-[#f25f3a] text-white py-2 rounded-full w-40' >Get Started</button>

              <img src={isMenuOpen? "/icon-close.svg" : "/icon-hamburger.svg"} alt="" className='md:hidden z-50'  onClick={toggleMenu}/>

          </div>
    </div>
  )
}

export default Navbar