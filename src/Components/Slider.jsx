import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  { id: 1, name: "Anisha Li", img: "/avatar-ali.png", text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is focused." },
  { id: 2, name: "Ali Bravo", img: "/avatar-anisha.png", text: "Manage has supercharged our team's workflow. The ability to maintain visibility on large milestones at all times keeps everyone motivated." },
  { id: 3, name: "Richard Watts", img: "/avatar-richard.png", text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending it to everyone I talk to!" },
  { id: 4, name: "Shanai Gough", img: "/avatar-shanai.png", text: "Their software allows us to track, manage, and collaborate on our projects from anywhere. It keeps the whole team in sync!" },
  { id: 5, name: "Emma Johnson", img: "/avatar-shanai.png", text: "Incredible tool that has transformed how our team collaborates. The intuitive interface makes project management a breeze." },
  { id: 6, name: "John Smith", img: "/avatar-shanai.png", text: "Incredible tool that has transformed how our team collaborates. The intuitive interface makes project management a breeze." },
  { id: 7, name: "Sarah Davis", img: "/avatar-shanai.png", text: "Incredible tool that has transformed how our team collaborates. The intuitive interface makes project management a breeze." },
  { id: 8, name: "Michael Brown", img: "/avatar-anisha.png", text: "Manage has supercharged our team's workflow. The ability to maintain visibility on large milestones at all times keeps everyone motivated." },
];

function TestimonialSlider() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileSlideIndex, setMobileSlideIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Settings for mobile slider
  const mobileSettings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (current, next) => setMobileSlideIndex(next),
    appendDots: dots => (
      <div>
        <ul style={{ margin: "0px", padding: "0px", display: "flex", justifyContent: "center", gap: "8px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '10px',
          height: '10px',
          backgroundColor: i === mobileSlideIndex ? '#f25f3a' : 'transparent',
          border: '1px #f25f3a solid',
          borderRadius: '50%',
          cursor: 'pointer'
        }}
      />
    )
  };

  // Settings for desktop slider
  const desktopSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Add custom CSS to fix the overflow issues and add the background with ::before
  const customStyles = `
    .testimonial-section {
      position: relative;
      overflow: ;
    }
    
    .testimonial-section::before {
      content: "";
      position: absolute;
      top: -18rem ;
      left: -30rem;
      width: 50rem;
      height: 50rem;
      background-image: url('/bg-tablet-pattern.svg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position:left;
      z-index: -2;
      
    }
    
    .testimonial-content {
      position: relative;
      z-index: 1;
    }
    
    .slick-slide {
      overflow: visible;
    }
    
    .slick-list {
      overflow: visible;
      padding: 20px 0;
    }
    
    .testimonial-card {
      position: relative;
      margin-top: 30px;
    }
    
    .avatar-container {
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
    }
  `;

  return (
    <div className="testimonial-section w-full before:hidden md:before:block">
      {/* Inject custom CSS */}
      <style>{customStyles}</style>
      
      <div className="testimonial-content w-full flex flex-col items-center justify-center py-10 px-4">
        <h1 className="font-bold text-3xl md:text-4xl text-center mb-10">What they've said</h1>

        {/* Mobile Slider (show on small screens) */}
        <div className="w-full max-w-md md:hidden">
          <Slider {...mobileSettings}>
            {testimonials.map((item) => (
              <div key={item.id} className="px-2">
                <div className="testimonial-card bg-[#fafafa] p-6 rounded-lg shadow-md">
                  <div className="avatar-container">
                    <img src={item.img} alt={item.name} className="w-20 h-20 rounded-full object-cover" />
                  </div>
                  <h3 className="pt-10 mt-6 font-bold text-center">{item.name}</h3>
                  <p className="max-w-[600px] text-center pb-5 text-[#9095a7] text-sm md:text-lg">{item.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Slider (show on larger screens) */}
        <div className="hidden w-full md:block">
          <Slider {...desktopSettings}>
            {testimonials.map((item) => (
              <div key={item.id} className="px-2">
                <div className="testimonial-card bg-[#fafafa] p-6 rounded-lg shadow-md">
                  <div className="avatar-container">
                    <img src={item.img} alt={item.name} className="w-20 h-20 rounded-full object-cover" />
                  </div>
                  <h3 className="pt-10 font-bold text-center">{item.name}</h3>
                  <p className="max-w-[500px] text-center pb-5 text-[#9095a7] text-md md:text-lg">{item.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Original Button */}
        <button className='bg-[#f25f3a] text-white py-4 rounded-full mt-10 w-40 mx-auto md:mx-0'>Get Started</button>
      </div>
    </div>
  );
}

export default TestimonialSlider;