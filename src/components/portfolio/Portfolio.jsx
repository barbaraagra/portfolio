import React from 'react';
import './portfolio.css';
import img1 from '../../assets/card-gooday.png';
import img2 from '../../assets/card-woohoo.png';
import img3 from '../../assets/card-fuurever.png';
import img4 from '../../assets/card-agra.png';
import img5 from '../../assets/card-tech1.png';
import img6 from '../../assets/card-socials.png';

const projects = [
  {
    id: 1,
    image: img1,
    title: 'GOODAY MOBILE APP',
    design: 'https://www.behance.net/gallery/213351813/Gooday',
  },
  {
    id: 2,
    image: img2,
    title: 'WOOHOO CHANEL',
    design: 'https://www.behance.net/gallery/114807509/Canal-Woohoo',
  },
  {
    id: 4,
    image: img4,
    title: 'AGRA DESIGN',
    design: 'https://agradesign.com.br/',
  },
  {
    id: 5,
    image: img5,
    title: 'TECH COMPANIES',
    design: 'https://www.behance.net/gallery/223750177/Xquic-Social-Media',
  },
   {
    id: 6,
    image: img6,
    title: 'SOCIAL MEDIA',
    // 👉 troque este link pelo seu design real
    design: 'https://www.behance.net/gallery/138978125/Social-Media-Portfolio',
  },
  {
    id: 3,
    image: img3,
    title: 'FUUREVER HOME',
    design: 'https://www.behance.net/gallery/209850913/Fuurever-Home',
  },
  
 
];

const Portfolio = () => {
  // mantém apenas itens com link de design (todos os 6 agora têm)
  const visible = projects.filter((p) => !!p.design);

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container">
        {visible.map((project) => (
          <article key={project.id} className="portfolio__item" role="group">
            <a
              className="portfolio__link"
              href={project.design}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} — open design`}
              title={project.title}
            >
              <img src={project.image} alt={project.title} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
