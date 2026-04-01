import React from 'react';
import './about.css';
import AboutMe from '../../assets/about_pic1.png';
import { FaAward } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="about__container">
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
  I’m a versatile graphic designer with over 13 years of experience in the digital space, working as a marketing specialist. I create visually compelling designs that are not only aesthetically strong, but also strategically driven to support conversion and business goals.
</p>

<p>
  I hold a degree in Communication and a Master’s in New Media and Web Practices, along with additional training in UX/UI Design and Web Development. This allows me to design and build digital platforms, from websites to applications, with a holistic and practical approach.
</p>

<p>
  My professional journey is diverse, spanning television, advertising and marketing agencies, startups, and freelance projects with my own clients. These experiences have shaped me into a dynamic and adaptable professional, comfortable navigating different contexts and challenges.
</p>
                    {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}
                </div>
            </div>
        </section>
    );
}

export default About;
