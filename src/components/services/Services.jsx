import React from 'react';
import './services.css';
import { BsCheck } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className='service'>
                    <div className="service__head">
                        <h3>UX/UI Design</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Creating user personas, user flows, and information architecture.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Designing wireframes, prototypes, and interactive mockups using Figma.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Creating visually appealing and engaging user interfaces.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Applying branding and maintaining design consistency throughout the product.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UX/UI */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Translating design mockups into functional web pages.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Building server-side logic and databases to support the functionality of a website.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Developing APIs for communication between the front-end and back-end components.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Conducting regular maintenance tasks and debugging.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF WEB DEV */}
                <article className='service'>
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Developing and implementing a content strategy.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Planning and scheduling content calendars to ensure consistent posting.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Monitoring and responding to comments, messages, and mentions.</p>
                        </li>
                        <li>
                            <BsCheck className='service__list-icon' />
                            <p>Analyzing social media metrics, such as engagement, reach, and conversion rates.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF CONTENT CREATION */}
            </div>
        </section>
    )
}

export default Services