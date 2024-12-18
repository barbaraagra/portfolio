import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/profile pictures.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="header__container">
                <h5>Hello I'm</h5>
                <h1>Bárbara Agra</h1>
                <h5 className="text-light">UX UI Designer | Product Designer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;
