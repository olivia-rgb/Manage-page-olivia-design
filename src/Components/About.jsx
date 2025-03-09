import React from 'react'

function About() {
  return (
    <div className='flex w-[90%] max-w-[1400px] mx-auto justify-between  items-start flex-wrap pt-20'>
          <div className='flex flex-[1_1_300px] flex-col'>
            <h1 className='text-3xl pb-2  md:text-4xl font-bold text-center md:text-left'>What is different about <br/> manage?</h1>
            <p className='max-w-[500px] text-md md:text-lg text-[#9095a7] text-center md:text-left'>Manage provides all the functionality your team needs, without complexity. our software is tailor-made for modern digital product team.</p>
          </div>
          <div className='flex flex-[1_1_0] min-w-500px flex-col'>
            <div>
                    <div className='flex flex-col pt-6 md:pt-0 md:hidden '>
                        <div className='flex md:gap-8  gap-4 h-12 items-center  bg-[#ffefeb] md:bg-transparent'>
                        <p className='bg-[#f25f3a] text-white rounded-full   px-6 md:px-0 w-30 h-12 md:h-10 flex items-center justify-center'>01</p>
                            <h3 className=' font-bold text-md :md:text-2xl'> Track Company-wide progress</h3>
                        </div>
                        <p className='text-md md:text-xl text-[#9095a7] pt-3 '>See how your day to day task fits into your wider vision. Go from tracking progress at the milestome level
                                all the way done to the smallest of details. Never lose sight of the big picture again.
                            </p>
                    </div>
                    <div className='md:flex gap-6 hidden '>
                        <p className='bg-[#f25f3a] text-white rounded-full   px-6 md:px-0 w-30 h-12 md:h-10 flex items-center justify-center'>01</p> 
                        <div>
                            <h3 className=' font-bold text-lg md:text-2xl'> Track Company-wide progress</h3>
                            <p className='text-md md:text-lg text-[#9095a7] pt-3 max-w-[500px] '>See how your day to day task fits into your wider vision. Go from tracking progress at the milestome level
                                    all the way done to the smallest of details. Never lose sight of the big picture again.
                                </p>
                        </div>
                    </div>
            </div>

            <div>
                    <div className='flex flex-col pt-6 md:pt-0 md:hidden '>
                        <div className='flex md:gap-8  gap-4 h-12 items-center  bg-[#ffefeb] md:bg-transparent'>
                        <p className='bg-[#f25f3a] text-white rounded-full   px-6 md:px-0 w-30 h-12 md:h-10 flex items-center justify-center'>01</p>
                            <h3 className=' font-bold text-md md:text-xl'> Advanced built-in report</h3>
                        </div>
                        <p className='text-md md:text-lg text-[#9095a7] pt-3  '>See how your day to day task fits into your wider vision. Go from tracking progress at the milestome level
                                all the way done to the smallest of details. Never lose sight of the big picture again.
                            </p>
                    </div>
                    <div className='md:flex gap-6 hidden pt-8 '>
                        <p className='bg-[#f25f3a] text-white rounded-full   px-6 md:px-0 w-30 h-12 md:h-10 flex items-center justify-center'>01</p> 
                        <div>
                            <h3 className=' font-bold text-md md:text-xl'> Advanced built-in report</h3>
                            <p className='text-lg md:text-lg text-[#9095a7] pt-3 max-w-[500px] '>See how your day to day task fits into your wider vision. Go from tracking progress at the milestome level
                                    all the way done to the smallest of details. Never lose sight of the big picture again.
                                </p>
                        </div>
                    </div>
            </div>   
            <div>
                    <div className='flex flex-col pt-6 md:pt-0 md:hidden '>
                        <div className='flex md:gap-8 gap-4 h-12 items-center  bg-[#ffefeb] md:bg-transparent'>
                        <p className='bg-[#f25f3a] text-white rounded-full   px-6 md:px-0 w-30 h-12 md:h-10 flex items-center justify-center'>01</p>
                            <h3 className=' font-bold text-md md:text-xl'> Everything you need in one place</h3>
                        </div>
                        <p className='text-sm md:text-lg text-[#9095a7] pt-3 '>See how your day to day task fits into your wider vision. Go from tracking progress at the milestome level
                                all the way done to the smallest of details. Never lose sight of the big picture again.
                            </p>
                    </div>
                    <div className='md:flex gap-6 hidden pt-8'>
                        <p className='bg-[#f25f3a] text-white rounded-full   px-6 md:px-0 w-30 h-12 md:h-10 flex items-center justify-center'>01</p> 
                        <div>
                            <h3 className=' font-bold text-md md:text-xl'> Everything you need in one place</h3>
                            <p className='text-sm md:text-lg text-[#9095a7] pt-3 max-w-[500px] '>See how your day to day task fits into your wider vision. Go from tracking progress at the milestome level
                                    all the way done to the smallest of details. Never lose sight of the big picture again.
                                </p>
                        </div>
                    </div>
            </div>        
          </div>
    </div>
  )
}

export default About