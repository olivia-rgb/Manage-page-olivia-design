import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-black'>
        <div className='w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row-reverse  md:justify-between items-center hover:text-[#f25f3a] cursor-pointer  text-white py-10'>
            <div className='flex items-center gap-4 w-full md:1/3 justify-between md:justify-end'>
                <input type="email" className='bg-white rounded-full outline-none py-2 w-50 text-[#f25f3a] px-4' placeholder='johnmadden/mail' />
                <button className=' w-20 bg-[#f25f3a] py-2 rounded-full'>Go</button>
            </div>
            <div className='flex w-full md:w-1/3 justify-center md:justify-between gap-40 py-10 md:py-0 hover:text-[#f25f3a]'>
              <div className='flex flex-col cursor-pointer '>
                 <a href="">Home</a>
                 <a href="">Pricing</a>
                 <a href="">Products</a>
                 <a href="">About Us</a>
              </div>
              <div className='flex flex-col '>
                 <a href="">Careers</a>
                 <a href="">Community</a>
                 <a href="">Privacy Policy</a>
              </div>
            </div>
            <div className='flex flex-col md:flex-col-reverse justify-between h-20 w-full md:1/3'>
              <div className='flex justify-between md:justify-start gap-4'>
              <img src="/icon-pinterest.svg" alt="" />
              <img src="/icon-twitter.svg" alt="" />
              <img src="/icon-youtube.svg" alt="" />
              <img src="icon-instagram.svg" alt="" />
              <img src="/icon-facebook.svg" alt="" />
              </div>
              <div>
                <img src="/logo.svg" alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer