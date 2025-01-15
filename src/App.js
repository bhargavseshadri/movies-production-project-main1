// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Banner';
import FilmDisplay from './FilmDisplay';
import Footer from './Footer';
import Navbar from './Navbar';
import Slider from './Slider';
import Subscribe from './Subscribe';
import VideoGrid from './VideoGrid';
import AboutUs from './Pages/AboutUsPage';

function App() {

  const movieData1 = [
    { id: 1, thumbnail:"Raaraja.png", link: "your-video-link-1" },
  { id: 2, thumbnail: "mathru.png", link: "your-video-link-2" },
  { id: 3, thumbnail: "Raaraja.png", link: "your-video-link-3" },
  { id: 4, thumbnail: "mathru.png", link: "your-video-link-4" },
  { id: 5, thumbnail: "Raaraja.png", link: "your-video-link-5" },
  { id: 6, thumbnail: "mathru.png", link: "your-video-link-6" },
  { id: 7, thumbnail: "Raaraja.png", link: "your-video-link-7" },
  { id: 8, thumbnail: "mathru.png", link: "your-video-link-8" },
  ];

  // Custom styles for the first slider
  const customStyles1 = {
    wrapper: {  },
    title: {  },
    card: { },
  };

  // Data for the second slider
  const movieData2 = [
    { id: 1, thumbnail: "Raarajacmp2.png", link: "your-video-link-1" },
  { id: 2, thumbnail: "mathrucmp2.png", link: "your-video-link-2" },
  { id: 3, thumbnail: "Raarajacmp2.png", link: "your-video-link-3" },
  { id: 4, thumbnail: "mathrucmp2.png", link: "your-video-link-4" },
  { id: 5, thumbnail: "Raarajacmp2.png", link: "your-video-link-5" },
  { id: 6, thumbnail: "mathrucmp2.png", link: "your-video-link-6" },
  { id: 7, thumbnail: "Raarajacmp2.png", link: "your-video-link-7" },
  { id: 8, thumbnail: "mathrucmp2.png", link: "your-video-link-8" },
  ];

  // Custom styles for the second slider
  const customStyles2 = {
    wrapper: { },
    title: {  },
    card: { },
  };


  return(
    <Router>
      <Navbar/>
          <Routes>
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/" element={
              <>
                
                <Banner/>
                <Slider
                title="Recent Trailers"
                movieData={movieData1}
                customStyles={customStyles1}/>
                <Slider
                title="Upcoming Movies"
                movieData={movieData2}
                customStyles={customStyles2}/>
                <FilmDisplay/>

                <VideoGrid/>
                <Footer />
                <Subscribe/>
              </>
            } />
        </Routes>
  </Router>
  
  );
 
}

export default App;
