import React from 'react';
import './about.css';
import AboutMe from '../../assets/aboume_pic.png';
import { FaAward } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={AboutMe} alt="Barbara Agra" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <a href="https://www.fcsh.unl.pt/en/courses/new-media-and-web-practices/" target="_blank" rel="noopener noreferrer" className="about__card">
                            <FaGraduationCap className="about__icon" />
                            <h5>Master's Degree</h5>
                            <small>New Media & Web Practices</small>
                        </a>

                        <a href="https://www.ironhack.com/pt-en/web-development/lisbon" target="_blank" rel="noopener noreferrer" className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Programming Certification</h5>
                            <small>Web Development</small>
                        </a>

                        <article className='about__card language'>
                            <MdLanguage className='about__icon' />
                            <h5>Languages</h5>
                            <small>Portuguese & English</small>
                        </article>
                    </div>

                    <p>
                        I’m a versatile professional with 10 years of experience in <b>marketing and graphic design</b>. 
                        Over the last 3 years, I've been refining my skills in web design, completing a <b>web development</b> bootcamp that taught me coding skills needed to build websites and apps. 
                        I also earned my Master’s Degree in New Media and Web Practices, and now I´m capable of designing and programming a digital product. 
                        I built this portfolio website myself. <br/> My background in marketing has given me a strong foundation in user research, allowing me to better understand and address user needs.
                    </p>
                    {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
                </div>
            </div>
        </section>
    );
}

export default About;
