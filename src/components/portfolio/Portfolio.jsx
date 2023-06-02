import React from 'react';
import './portfolio.css';
import img1 from '../../assets/portfolio1.png';
import img2 from '../../assets/portfolio2.png';
import img3 from '../../assets/portfolio3.png';
import img4 from '../../assets/portfolio4.png';
import img5 from '../../assets/portfolio5.png';
import img6 from '../../assets/portfolio6.png';


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img1} alt="game" />
                    </div>
                    <h3>DINO ERA</h3>
                    <h4>HTML | CSS | JavaScript</h4>
                    <div className="portfolio__item-cta">
                        <a href="http://github.com/barbaraagra" className='btn'>Github</a>
                        <a href="https://www.behance.net/barbaraagra1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img2} alt="game" />
                    </div>
                    <h3>WANNAGO</h3>
                    <h4>JavaScript | MongoDB | NodeJS | Bootstrap | CSS</h4>
                    <div className="portfolio__item-cta">
                        <a href="http://github.com/barbaraagra" className='btn'>Github</a>
                        <a href="https://www.behance.net/barbaraagra1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img3} alt="game" />
                    </div>
                    <h3>NOMADIC</h3>
                    <h4>React | CSS | Axios</h4>
                    <div className="portfolio__item-cta">
                        <a href="http://github.com/barbaraagra" className='btn'>Github</a>
                        <a href="https://www.behance.net/barbaraagra1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img4} alt="game" />
                    </div>
                    <h3>PRADO DECOR</h3>
                    <h4>WordPress</h4>
                    <div className="portfolio__item-cta">
                        <a href="http://github.com/barbaraagra" className='btn'>Github</a>
                        <a href="https://www.behance.net/barbaraagra1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img5} alt="game" />
                    </div>
                    <h3>OHALO STORE</h3>
                    <h4>TypeScript</h4>
                    <div className="portfolio__item-cta">
                        <a href="http://github.com/barbaraagra" className='btn'>Github</a>
                        <a href="https://www.behance.net/barbaraagra1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>

                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={img6} alt="game" />
                    </div>
                    <h3>UDRIVE</h3>
                    <h4>Figma | Photoshop | Illustrator</h4>
                    <div className="portfolio__item-cta">
                        <a href="http://github.com/barbaraagra" className='btn'>Github</a>
                        <a href="https://www.behance.net/barbaraagra1" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio