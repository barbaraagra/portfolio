import React, { useState } from 'react';
import './navbar.css';

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#header');

  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActiveNav('#header')}
        className={activeNav === '#header' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <BiBook />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;