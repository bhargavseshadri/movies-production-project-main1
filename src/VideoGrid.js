// VideoGrid.js
import React from "react";
import "./VideoGrid.css";

const videos = [
  { id: 1, thumbnail: "RaarajaVideos.png", link: "your-video-link-1" },
  { id: 2, thumbnail: "RaarajaVideos.png", link: "your-video-link-2" },
  { id: 3, thumbnail: "RaarajaVideos.png", link: "your-video-link-3" },
  { id: 4, thumbnail: "RaarajaVideos.png", link: "your-video-link-4" },
  { id: 5, thumbnail: "RaarajaVideos.png", link: "your-video-link-5" },
  { id: 6, thumbnail: "RaarajaVideos.png", link: "your-video-link-6" },
  { id: 7, thumbnail: "RaarajaVideos.png", link: "your-video-link-7" },
  { id: 8, thumbnail: "RaarajaVideos.png", link: "your-video-link-8" },
];

const VideoGrid = () => {
  return (
    <div className="video-section">
      <h3 className="video-section-title">Videos</h3>
      <div className="video-grid">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="video-item"
          >
            <img
              src={video.thumbnail}
              alt="Video Thumbnail"
              className="video-thumbnail"
            />
            {/* <div className="play-icon-overlay">
              <img
                src="your-play-icon-url.png"
                alt="Play Icon"
                className="play-icon"
              />
            </div> */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
