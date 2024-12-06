import React from 'react';
import './portfolio.css';
import img1 from '../../assets/gooday.png';
import img2 from '../../assets/moonmagic.png';
import img3 from '../../assets/fuurever_home.png';
import img4 from '../../assets/agradesign.png';
import img5 from '../../assets/portfolio5.png';
import img6 from '../../assets/portfolio1.png';

const data = [
    {
        id: 1,
        image: img1,
        title: "GOODAY MOBILE APP",
        description:
            "A fun game built with HTML, CSS, and JavaScript, where you control a dinosaur navigating through obstacles in a prehistoric world. I designed the game to be visually engaging with smooth animations and an easy-to-play experience.",
        github: "https://github.com/barbaraagra/Dino_Era",
        demo: "https://barbaraagra.github.io/Dino_Era/",
    }
,
    {
        id: 2,
        image: img2,
        title: "MOON MAGIC APPLE WATCH",
        description:
            "Apple Watch app that helps you stay in tune with the moon. It shows the current moon phase and shares daily inspirations based on lunar energy. With a simple and beautiful design, it’s perfect for anyone who loves a little moonlight magic in their day.",
        github: "https://github.com/barbaraagra/WannaGo",
        demo: "https://wannago.cyclic.app/",
    },
    {
        id: 3,
        image: img3,
        title: "Fuurever Home",
        description:
            "app designed to connect pets in need with their forever families. It simplifies the adoption process by matching users with pets based on preferences and lifestyle, making it easier to find the perfect companion.",
        github: "https://github.com/barbaraagra/nomadic-client",
        demo: "https://nomadic-app.netlify.app/",
    },
    {
        id: 4,
        image: img4,
        title: "AGRA DESIGN",
        description:
            "Agra Design is a website created to showcase custom-made furniture with a clean and modern interface. The design emphasizes usability and highlights the quality of the brand's products through clear visuals and intuitive navigation.",
        github: "https://agradesign.com.br/",
        demo: "https://agradesign.com.br/",
    },
    {
        id: 5,
        image: img5,
        title: "OHALO STORE",
        description:
            "Ohalo Store is a fully responsive e-commerce platform built with TypeScript. I designed and developed the interface to provide a seamless shopping experience, with clean layouts, intuitive navigation, and smooth functionality.",
        github: "https://github.com/barbaraagra/Ohalo-Store",
        demo: "https://ohalo-store.netlify.app",
    },
    {
        id: 6,
        image: img6,
        title: "DINO ERA",
        description:
            "A fun game built with HTML, CSS, and JavaScript, where you control a dinosaur navigating through obstacles in a prehistoric world. I designed the game to be visually engaging with smooth animations and an easy-to-play experience.",
        github: "https://github.com/barbaraagra/Dino_Era",
        demo: "https://barbaraagra.github.io/Dino_Era/",
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
                                        Code
                                    </a>
                                    <a
                                        href={demo}
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel='noreferrer'
                                    >
                                        Demo
                                    </a>
                                                                      <a
                                        href={github}
                                        className="btn"
                                    >
                                        Figma
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