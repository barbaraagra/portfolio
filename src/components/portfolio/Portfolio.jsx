import React, { useState } from 'react';
import './portfolio.css';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';

const categories = [
  'all',
  'graphic design',
  'social media',
  'marketing',
  'motion design',
  'ux ui design',
  'web development',
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={filter === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio__container">
        {filteredProjects.map((project) => (
          <article key={project.id} className="portfolio__item">
            <Link
              to={`/project/${project.slug}`}
              className="portfolio__link"
            >
              <img src={project.image} alt={project.title} />

              <div className="portfolio__info">
                <p className="portfolio__category">{project.category}</p>
                <h3>{project.title}</h3>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;