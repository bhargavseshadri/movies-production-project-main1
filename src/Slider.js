import React, { useRef } from "react";
import "./Slider.css";

const Slider = ({ title, movieData, customStyles }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div
      className="navigation-carousel-wrapper"
      style={customStyles?.wrapper || {}}
    >
      <div className="slider-header">
        <h2 className="slider-title" style={customStyles?.title || {}}>
          {title}
        </h2>
        <div className="slider-controls">
          <button className="slider-btn left" onClick={scrollLeft}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/prev.png`}
              alt="Previous"
              className="slider-icon"
            />
          </button>
          <button className="slider-btn right" onClick={scrollRight}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/next.png`}
              alt="Next"
              className="slider-icon"
            />
          </button>
        </div>
      </div>
      <div className="slider-content">
        <div className="slider" ref={sliderRef}>
          {movieData.map((movie) => (
            <a
              key={movie.id}
              href={movie.link}
              className="movie-card"
              style={customStyles?.card || {}}
            >
              <img
                // src={`${process.env.PUBLIC_URL}/assets/images/${movie.thumbnail}`}
                src={movie.thumbnail}
                alt={`Thumbnail for ${movie.link}`}
                className="movie-image"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
