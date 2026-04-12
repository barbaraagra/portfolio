import React, { useRef, useState } from "react";
import "./project-video-gallery.css";

const ProjectVideoGallery = ({ videos = [] }) => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });

    const selectedVideo = videoRefs.current[index];

    if (!selectedVideo) return;

    selectedVideo.play();
    setPlayingIndex(index);
  };

  const handlePause = (index) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    }
  };

  if (!videos.length) return null;

  return (
    <section className="project-video-gallery">
      <div className="container">
        <div className="project-video-gallery__header">
          <p className="project-video-gallery__eyebrow">Video Showcase</p>
          <h2>Selected Videos</h2>
        </div>

        <div className="project-video-gallery__grid">
          {videos.map((videoSrc, index) => (
            <div className="project-video-gallery__item" key={index}>
              <div className="project-video-gallery__video-wrapper">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current[index] = el;
                  }}
                  className="project-video-gallery__video"
                  controls={playingIndex === index}
                  preload="metadata"
                  onPause={() => handlePause(index)}
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {playingIndex !== index && (
                  <button
                    className="project-video-gallery__play"
                    onClick={() => handlePlay(index)}
                    aria-label={`Play video ${index + 1}`}
                    type="button"
                  >
                    <span className="project-video-gallery__play-icon">▶</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectVideoGallery;