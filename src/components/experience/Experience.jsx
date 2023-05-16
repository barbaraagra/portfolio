import React from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">

                {/*  FRONTEND */}

                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>HTML</h4>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>CSS</h4>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>JavaScript</h4>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>Bootstrap</h4>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>Tailwind</h4>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>React</h4>
                        </article>

                    </div>
                </div>

                {/*  BACKEND */}
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>MongoDB</h4>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>NodeJS</h4>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>Express</h4>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>RESTful API</h4>
                        </article>
                    </div>
                </div>

                {/*  DESIGN */}

                <div className="experience__design">
                    <h3>Web Design</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>Figma</h4>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>Photoshop</h4>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>Illustrator</h4>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>Canva</h4>
                        </article>
                    </div>
                </div>

                {/*  MARKETING */}

                <div className="experience__marketing">
                    <h3>Digital Marketing</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>WordPress</h4>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>Meta Business</h4>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>Google Analytics</h4>
                        </article>

                        <article className='experience__details'>
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <h4>Hootsuite</h4>
                        </article>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Experience