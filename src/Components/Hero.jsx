import React from 'react'

function Hero() {
  return (
    <div className='relative w-[90%] max-w-[1400px] mx-auto '>
    <div className=' h-full pt-20 md:pt-40 flex md:flex-row-reverse w-full justify-center md:justify-between items-center flex-wrap'>
        <div className='flex-[1_1_0] min-w-[350px]  '>
        <div className='absolute -top-54 md:-top-20 -right-15 md:-right-50 w-full h-full z-[-1] bg-[url("/bg-tablet-pattern.svg")] bg-right bg-contain bg-no-repeat translate-y-[-50px]'></div>
            <img src="/illustration-intro.svg" alt="" className='w-full'/>
        </div>
        <div className='flex-[1_1_350px] pt-5 md:pt-0 text-center md:text-left flex flex-col gap-6 justify-center align-center'>
            <h1 className='text-4xl md:text-6xl font-bold'>Bring everyone <br/> together to build <br/> better products </h1>
            <p className='max-w-[380px] text-md text-center md:text-left mx-auto md:mx-0 md:text-xl text-[#9095a7]'>Manage makes it possible for software teams to plan day to day tasks while keeping the larger team goals in view</p>
            <button className='bg-[#f25f3a] text-white py-2 rounded-full w-40 mx-auto md:mx-0' >Get Started</button>

        </div>  
    </div>
    </div>
  )
}

export default Hero