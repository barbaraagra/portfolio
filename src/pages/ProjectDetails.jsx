import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './project-details.css';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="project-details">
        <div className="container">
          <h1>Project not found</h1>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="project-details">
      <div className="container">
        <Link to="/" className="btn">
          Back to Home
        </Link>

        <div className="project-details__hero">
          <div className="project-details__image">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="project-details__content">
            <p className="project-details__category">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="project-details__subtitle">{project.subtitle}</p>
            <p>{project.description}</p>

            <div className="project-details__meta">
              <div>
                <h4>Client</h4>
                <p>{project.client}</p>
              </div>

              <div>
                <h4>Role</h4>
                <p>{project.role}</p>
              </div>

              <div>
                <h4>Tools</h4>
                <p>{project.tools}</p>
              </div>

              <div>
                <h4>Year</h4>
                <p>{project.year}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;