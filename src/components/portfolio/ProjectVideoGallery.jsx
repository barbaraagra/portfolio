import React, { useEffect, useRef, useState } from 'react';
import './project-video-gallery.css';

const ProjectVideoGallery = ({ videos = [] }) => {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, [videos]);

  const handlePlay = async (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
        video.currentTime = 0;
      }
    });

    const selectedVideo = videoRefs.current[index];

    if (!selectedVideo) return;

    try {
      await selectedVideo.play();
      setPlayingIndex(index);
    } catch (error) {
      console.error('Error playing video:', error);
    }
  };

  const handlePause = (index) => {
    setPlayingIndex((current) => (current === index ? null : current));
  };

  if (!videos.length) return null;

  return (
    <section className="project-video-gallery">
      <div className="container">
        <div className="project-video-gallery__header">
          <p className="project-video-gallery__eyebrow">Video Showcase</p>
          <h2>Instagram Reels</h2>
        </div>

        <div className="project-video-gallery__grid">
          {videos.map((videoSrc, index) => (
            <div className="project-video-gallery__item" key={`${videoSrc}-${index}`}>
              <div className="project-video-gallery__video-wrapper">
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el || null;
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