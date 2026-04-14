import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './project-details.css';
import ProjectVideoGallery from '../components/portfolio/ProjectVideoGallery';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="project-details">
        <div className="container">
          <h1>Project not found</h1>
          <Link to="/#portfolio" className="btn">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  const {
    title,
    subtitle,
    description,
    image,
    categories = [],
    client,
    role,
    tools,
    year,
    longImage,
    videos = [],
    heroVideo,
  } = project;

  return (
    <section className="project-details">
      <div className="container">
        <Link to="/#portfolio" className="btn">
          Back to Home
        </Link>

        <div className="project-details__hero">
          <div className="project-details__image">
            <img src={image} alt={title} />
          </div>

          <div className="project-details__content">
            {categories.length > 0 && (
              <p className="project-details__category">
                {categories.join(' • ')}
              </p>
            )}

            <h1>{title}</h1>

            {subtitle && (
              <p className="project-details__subtitle">{subtitle}</p>
            )}

            {description && (
              <div className="project-details__description">
                {description}
              </div>
            )}

            <div className="project-details__meta">
              {client && (
                <div>
                  <h4>Client</h4>
                  <p>{client}</p>
                </div>
              )}

              {role && (
                <div>
                  <h4>Role</h4>
                  <p>{role}</p>
                </div>
              )}

              {tools && (
                <div>
                  <h4>Tools</h4>
                  <p>{tools}</p>
                </div>
              )}

              {year && (
                <div>
                  <h4>Year</h4>
                  <p>{year}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {longImage && (
        <div className="project-details__full-image">
          <img src={longImage} alt={title} />
        </div>
      )}

      {videos.length > 0 && (
        <ProjectVideoGallery videos={videos} />
      )}

      {heroVideo && (
        <div className="project-details__hero-video">
          <video
            src={heroVideo}
            controls
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      )}
    </section>
  );
};

export default ProjectDetails;