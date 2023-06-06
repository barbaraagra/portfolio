import React from 'react';
import './portfolio.css';
import img1 from '../../assets/portfolio1.png';
import img2 from '../../assets/portfolio2.png';
import img3 from '../../assets/portfolio3.png';
import img4 from '../../assets/portfolio4.png';
import img5 from '../../assets/portfolio5.png';
import img6 from '../../assets/portfolio7.png';

const data = [
    {
        id: 1,
        image: img1,
        title: "Dino Era",
        description:
            "HTML | CSS | JavaScript",
        github: "https://github.com/barbaraagra/Dino_Era",
        demo: "https://barbaraagra.github.io/Dino_Era/",
    },
    {
        id: 2,
        image: img2,
        title: "WANNAGO",
        description:
            "JavaScript | MongoDB | NodeJS | Bootstrap",
        github: "https://github.com/barbaraagra/WannaGo",
        demo: "https://wannago.cyclic.app/",
    },
    {
        id: 3,
        image: img3,
        title: "NOMADIC",
        description:
            "React | CSS | Axios",
        github: "https://github.com/barbaraagra/nomadic-client",
        demo: "https://nomadic-app.netlify.app/",
    },
    {
        id: 4,
        image: img4,
        title: "PRADO DECOR",
        description:
            "WordPress",
        github: "https://pradodecor.com.br/",
        demo: "https://pradodecor.com.br/",
    },
    {
        id: 5,
        image: img5,
        title: "OHALO STORE",
        description:
            "TypeScript",
        github: "https://github.com/barbaraagra/Ohalo-Store",
        demo: "https://ohalo-store.netlify.app",
    },
    {
        id: 6,
        image: img6,
        title: "TEXT SUMMARIZER",
        description:
            "React | Tailwind",
        github: "https://github.com/barbaraagra/ai-text_summarizer",
        demo: "https://ai-text-summarizer-pq17ymf2l-barbaraagra.vercel.app/",
    }
];

function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent work</h5>
            <h2>Portfolio</h2>

            <div className="portfolio__container">
                {
                    data.map(({ id, image, title, description, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <div className="portfolio__item-cta">
                                    <a
                                        href={github}
                                        className="btn"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={demo}
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel='noreferrer'
                                    >
                                        Demo
                                    </a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Portfolio