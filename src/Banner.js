import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Banner.css";

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "RAA RAJA",
      description: "A village chief's son secretly continues his father's mission to end smuggling, while pretending to be weak and maintaining the illusion that his father is still alive.",
      image: "./Raa-Raja-Poster.jpg", // Replace with actual image URLs
    },
    {
      id: 2,
      title: "MAATHRU",
      description: "Some mysterious kidnaps are happening in a town but where ever the kidnap happen the kindaper leaves a code language hint. Due to unusual dreams Vijay (Hero) gets panicked and suffers psycho logically.",
      image: "./HD-Mathru-poster.jpg",
    },
    {
      id: 3,
      title: "RAA RAJA",
      description: "A village chief's son secretly continues his father's mission to end smuggling, while pretending to be weak and maintaining the illusion that his father is still alive.",
      image: "./Raa-Raja-Poster.jpg",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      pagination={{
        // clickable: true,
        type: "custom", // Use progress bar pagination
        el: ".swiper-pagination-custom",
        renderCustom: (swiper, current, total) => {
          const progressBarWidth = 100 / total;
          const progressBar = Array(total)
            .fill('')
            .map((_, index) => {
              const isActive = current - 1 === index;
              return `
                <div class="progress-segment" style="flex: 1; background-color: ${
                  isActive ? '#ff5722' : '#e0e0e0'
                }; height: 6px; margin-right: ${index < total - 1 ? '5px' : '0'};"></div>
                
                <img 
                  src="${process.env.PUBLIC_URL}/assets/icons/clapper-board.png"  
                  alt="Clapboard" 
                  class="clapboard-image" 
                  style="position: absolute; top: -40px; left: ${
                    progressBarWidth * (current)
                  }%; transform: translateX(-50%); width: 30px; height: 30px; transition: left 0.3s ease;" />


                    <div
            class="progress-circle"
            style="position: absolute; left: ${
              (progressBarWidth * current) - 1 // Adjust to position the circle at the end
            }%; width: 15px; height: 15px; background-color: white; border-radius: 50%; top: -4px; transition: left 0.3s ease;">
          </div>
               
              `;
            })
            .join('');
    
          return `
          <div class="swiper-pagination-custom">
            <div class="progress-container" style="display: flex; align-items: center;">
              ${progressBar}
              <div class="progress-indicator" style="position: relative; left: ${
                ((current - 1) / (total - 1)) * 100
              }%; width: 10px; height: 10px;"></div>

            </div>
            </div>
          `;
        },
      }}
      autoplay={{ delay: 5000 }}
      loop
      className="banner-swiper"
    >
      {slides.map((slide) => (
       <SwiperSlide key={slide.id}>
       <div
         className="banner-slide"
         style={{ backgroundImage: `url(${slide.image})` }}
       >
         <div className="banner-content">
           <h1>{slide.title}</h1>
           <p>{slide.description}</p>
           <div className="banner-buttons">
             <button>Watch Trailer</button>
             <button>Learn More</button>
           </div>
         </div>
       </div>
     </SwiperSlide>
      ))}

      {/* Custom navigation buttons */}
      <div className="custom-prev">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/bannerprev.png`} // Image from public folder
          alt="Previous"
        />
      </div>
      <div className="custom-next">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/bannernext.png`} // Image from public folder
          alt="Next"
        />
      </div>
      
      <div className="swiper-pagination-custom"></div> {/* Custom pagination here */}

    </Swiper>
  );
};

export default Banner;
