import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { SiBehance } from 'react-icons/si';


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/barbaraagra/" target='_blank'><BsLinkedin /></a>
            <a href="https://github.com/barbaraagra" target='_blank'><BsGithub /></a>
            <a href="https://www.behance.net/barbaraagra1" target='_blank'><SiBehance /></a>
        </div>
    )
}

export default HeaderSocials