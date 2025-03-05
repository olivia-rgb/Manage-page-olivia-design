import React, { useState, useRef, useEffect } from 'react';

const testimonials = [
  { id: 1, name: "Anisha Li", img: "/avatar-ali.png", text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused." },
  { id: 2, name: "Ali Bravo", img: "/avatar-anisha.png", text: "Manage has supercharged our team's workflow. The ability to maintain visibility on large milestones at all times keeps everyone motivated." },
  { id: 3, name: "Richard Watts", img: "/avatar-richard.png", text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending it to everyone I talk to!" },
  { id: 4, name: "Shanai Gough", img: "/avatar-shanai.png", text: "Their software allows us to track, manage, and collaborate on our projects from anywhere. It keeps the whole team in sync!" },
  { id: 5, name: "Emma Johnson", img: "/avatar-shanai.png", text: "Incredible tool that has transformed how our team collaborates. The intuitive interface makes project management a breeze." },
  { id: 5, name: "Emma Johnson", img: "/avatar-shanai.png", text: "Incredible tool that has transformed how our team collaborates. The intuitive interface makes project management a breeze." },
  { id: 5, name: "Emma Johnson", img: "/avatar-shanai.png", text: "Incredible tool that has transformed how our team collaborates. The intuitive interface makes project management a breeze." },
  { id: 6, name: "Ali Bravo", img: "/avatar-anisha.png", text: "Manage has supercharged our team's workflow. The ability to maintain visibility on large milestones at all times keeps everyone motivated." },
];

function Slider() {
  const [startIndex, setStartIndex] = useState(0);
  const touchStartX = useRef(null);
  const sliderRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => 
      isMobile 
        ? (prev === testimonials.length - 1 ? 0 : prev + 1)
        : (prev + 1 <= testimonials.length - 3 ? prev + 1 : 0)
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) => 
      isMobile 
        ? (prev === 0 ? testimonials.length - 1 : prev - 1)
        : (prev === 0 ? testimonials.length - 3 : prev - 1)
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;

    let touchEndX = e.touches[0].clientX;
    let diff = touchStartX.current - touchEndX;

    if (diff > 40) {
      nextSlide();
      touchStartX.current = null;
    } else if (diff < -40) {
      prevSlide();
      touchStartX.current = null;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  return (
    <div className='relative'>
    <div className=" bg-[url('/bg-tablet-pattern.svg')]  bg-no-repeat bg-left-top  w-full flex flex-col items-center justify-center py-10 px-4">
      <h1 className="font-bold text-3xl md:text-4xl pb-10 text-center mb-10">What they've said</h1>

      <div 
        ref={sliderRef}
        className="w-full relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-4"
          style={{ 
            transform: isMobile 
              ? `translateX(-${startIndex * 100}%)` 
              : `translateX(-${startIndex * (100 / 3 + 4)}%)`,
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className={`
                flex-shrink-0 
                ${isMobile ? 'w-full' : 'w-[calc(33%-1rem)]'} 
                flex flex-col justify-center items-center 
                bg-[#fafafa] p-6 gap-4 relative 
                transition-all duration-300 rounded-lg shadow-md overflow-visible
              `}
            >
              <div className="absolute overflow-visible top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={item.img} alt={item.name} className="w-20 h-20 rounded-full object-cover" />
              </div>
              <h3 className="pt-10 font-bold">{item.name}</h3>
              <p className="max-w-[500px] text-center pb-5 text-[#9095a7] text-md md:text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {isMobile && (
        <div className="flex space-x-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`h-3 w-3 rounded-full ${startIndex === index ? 'bg-[#f25f3a]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      )}

<button className='bg-[#f25f3a] text-white py-4 rounded-full mt-15  w-40 mx-auto md:mx-0' >Get Started</button>

    </div>
    </div>
  );
}

export default Slider;