import React from 'react';
import './about.css';
import AboutMe from '../../assets/aboutme.png';
import { FaAward } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md'


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={AboutMe} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaGraduationCap className='about__icon' />
                            <h5>Master's Degree</h5>
                            <small>New Media & Web Practices</small>
                        </article>

                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Programming Certification</h5>
                            <small>Ironhack Linbon</small>
                        </article>

                        <article className='about__card language'>
                            <MdLanguage className='about__icon' />
                            <h5>Languages</h5>
                            <small>Portuguese & English</small>
                        </article>
                    </div>

                    <p>I see web development as a natural progression of my experience in digital marketing. During my Master's in New Media and Web Practices, I was able to explore my passion for web development, building websites with Figma, HTML and CSS. Following that, I enrolled in a programming bootcamp where I honed my skills in JavaScript, Node.js, React, and other web development technologies.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About