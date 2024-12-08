import React from 'react';
import './portfolio.css';
import img1 from '../../assets/gooday.png';
import img2 from '../../assets/moonmagic.png';
import img3 from '../../assets/fuurever_home.png';
import img4 from '../../assets/agradesign.png';
import img5 from '../../assets/portfolio5.png';
import img6 from '../../assets/portfolio1.png';

const projects = [
{
    id: 1,
    image: img1,
    title: "GOODAY MOBILE APP",
    description:
        "A wellness app connecting people passionate about sports, healthy eating, and active living—build community, share goals, and stay inspired.",
    demo: "https://embed.figma.com/proto/S322tvnhTMc225FMek2CQf/Gooday?page-id=0%3A1&node-id=33-185&node-type=frame&viewport=197%2C200%2C0.08&scaling=scale-down&content-scaling=fixed&starting-point-node-id=87%3A854&embed-host=share",
    design: "https://www.behance.net/gallery/213351813/Gooday",
    btnDesign: "Design",
    btnDemo: "Demo",
},

    {
        id: 2,
        image: img2,
        title: "MOON MAGIC APPLE WATCH",
        description:
            "Apple Watch app that helps you stay in tune with the moon. It shows the current moon phase and shares daily inspirations based on lunar energy. With a simple and beautiful design, it’s perfect for anyone who loves a little moonlight magic in their day.",
        demo: "https://www.figma.com/proto/3dOQFmIpRLlRMuBaPqetJb/Moon-Magic?page-id=0%3A1&node-id=44-28&node-type=frame&viewport=214%2C188%2C0.33&t=ydcPuNmgSCF2GrMz-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11%3A143",
        design: "https://www.behance.net/gallery/209594333/Moon-Magic",
        btnDesign: "Design",
        btnDemo: "Demo",
    },
    {
        id: 3,
        image: img3,
        title: "FUUREVER HOME",
        description:
            "An app designed to connect pets in need with their forever families. It simplifies the adoption process by matching users with pets based on preferences and lifestyle, making it easier to find the perfect companion.",
        design: "https://www.behance.net/gallery/209850913/Fuurever-Home",
        demo: "https://www.figma.com/proto/8AZeoKz3MEtqdKMZWzQj9W/Fuurever-Home?page-id=0%3A1&node-id=1-3&node-type=frame&viewport=322%2C457%2C0.24&t=wBprkKNfbVO0vtYv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4",
        code: "https://github.com/barbaraagra/fuurever-home",
        btnDesign: "Design",
        btnDemo: "Demo",
        btnCode: "Code",
    },
    {
        id: 4,
        image: img4,
        title: "AGRA DESIGN",
        description:
            "Agra Design is a website created to showcase custom-made furniture with a clean and modern interface. The design emphasizes usability and highlights the quality of the brand's products through clear visuals and intuitive navigation.",
        demo: "https://agradesign.com.br/",
        design: "https://figma.com/prototype/Agra-Design",
        btnDesign: "Design",
        btnDemo: "Demo",
    },
    {
        id: 5,
        image: img5,
        title: "OHALO STORE",
        description:
            "Ohalo Store is a fully responsive e-commerce platform built with TypeScript. I designed and developed the interface to provide a seamless shopping experience, with clean layouts, intuitive navigation, and smooth functionality.",
        code: "https://github.com/barbaraagra/Ohalo-Store",
        demo: "https://ohalo-store.netlify.app",
        design: "https://figma.com/prototype/Ohalo-Store",
        btnCode: "Code",
        btnDemo: "Demo",
        btnDesign: "Design",
    },
    {
        id: 6,
        image: img6,
        title: "DINO ERA",
        description:
            "A fun game built with HTML, CSS, and JavaScript, where you control a dinosaur navigating through obstacles in a prehistoric world. I designed the game to be visually engaging with smooth animations and an easy-to-play experience.",
        code: "https://github.com/barbaraagra/Dino_Era",
        demo: "https://barbaraagra.github.io/Dino_Era/",
        btnCode: "Code",
        btnDemo: "Demo",
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="portfolio__container">
                {projects.map((project) => (
                    <article key={project.id} className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="portfolio__item-cta">
                        { project.design &&   <a
                                href={project.design}
                                className="btn"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {project.btnDesign}
                            </a>}
                            {project.demo &&    <a
                                href={project.demo}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {project.btnDemo}


                            </a>}
                       { project.code &&    <a
                                href={project.code}
                                className="btn"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {project.btnCode}
                            </a>}


                            
                        
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
