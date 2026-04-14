import React from 'react';
import img1 from '../assets/card-gooday.png';
import img2 from '../assets/card-woohoo.png';
import img3 from '../assets/card-fuurever.png';
import img4 from '../assets/card-phd1.png';
import img5 from '../assets/card-xquic.png';
import img6 from '../assets/card-mateshine.png';
import img7 from '../assets/card-agra.png';
import img8 from '../assets/card-livia.png';
import img10 from '../assets/card-torii.png';
import img11 from '../assets/card-moonmagic.png';
import img12 from '../assets/card-realhome.png';
import img13 from '../assets/card-dino.png';

import portwoohoo from '../assets/interiorprojeto/MockupWoohoo.jpg';
import goodaydetail from '../assets/interiorprojeto/gooday-detail.png';
import fuureverdetail from '../assets/interiorprojeto/fuurever-details.png';
import realhomedetail from '../assets/interiorprojeto/realhome-details.png';

import mateshine1 from '../assets/videos/MateShine1.mp4';
import mateshine2 from '../assets/videos/MateShine2.mp4';
import mateshine3 from '../assets/videos/MateShine3.mp4';
import dinoeragame from '../assets/videos/dinoeragame.mp4';

import xquicdetail from '../assets/xquic-details.png';
import agradetail from '../assets/agra-details.png';
import moondetail from '../assets/moonmagic-details.png';
import toriidetail from '../assets/torii-details.png';

export const projects = [
  {
    id: 1,
    slug: 'gooday',
    category: 'ux ui design',
    image: img1,
    title: 'Gooday',
    subtitle: 'Mobile app design focused on experience, usability, and visual consistency.',
    description:
      'Gooday is a mobile app project developed with a strong focus on UX/UI design, usability, and product thinking. The goal was to create a visually engaging and intuitive interface, balancing functionality with a playful and modern aesthetic.',
    client: 'Concept Project',
    role: 'UX/UI Design',
    tools: 'Figma, Adobe Suite',
    year: '2024',
    link: 'https://www.behance.net/gallery/213351813/Gooday',
    longImage: goodaydetail,
  },
  {
    id: 2,
    slug: 'woohoo',
    category: 'marketing',
    image: img2,
    title: 'Woohoo Channel',
    subtitle: 'Communication and digital design for a television channel.',
    description: (
      <>
        This project brings together creative, marketing, and digital communication work
        developed for Woohoo Channel. It includes visual strategy, branded content, and
        digital assets designed to connect with a young and engaged audience.
        <br />
        <a href="https://www.instagram.com/canalwoohoo/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <br />
        <a href="https://www.facebook.com/woohootv/" target="_blank" rel="noreferrer">
          Facebook
        </a>
        <br />
        <a href="https://woohoo.com.br/" target="_blank" rel="noreferrer">
          Website
        </a>
      </>
    ),
    client: 'Woohoo Channel',
    role: 'Graphic Design / Marketing',
    tools: 'Adobe Suite, Meta Business Suite',
    year: '2019',
    link: 'https://www.behance.net/gallery/114807509/Canal-Woohoo',
    longImage: portwoohoo,
  },
  {
    id: 3,
    slug: 'fuurever',
    category: 'ux ui design',
    image: img3,
    title: 'Fuurever Home',
    subtitle: 'A digital product concept with user-centered design.',
    description:
      'Fuurever Home is a digital concept project developed around the experience of finding and adopting pets. The interface was designed to feel friendly, accessible, and emotionally engaging, while maintaining clarity and ease of use.',
    client: 'Concept Project',
    role: 'UX/UI Design',
    tools: 'Figma, Illustrator',
    year: '2025',
    link: 'https://www.behance.net/gallery/209850913/Fuurever-Home',
    longImage: fuureverdetail,
  },
  {
    id: 4,
    slug: 'phd',
    category: 'web development',
    image: img4,
    title: 'PHD Architects',
    subtitle:
      'A clean, modern website project combining UX/UI design and WordPress development for an architecture studio based in California.',
    description:
      'For PHD Architects, I designed and developed a responsive website focused on clean aesthetics, clear navigation, and a refined user experience. The project included UX/UI design in Figma and full implementation in WordPress using Divi, translating the studio’s visual identity into a functional and professional online presence.',
    client: 'PHD Architects',
    role: 'Web Design / Web Development',
    tools: 'WordPress, HTML, CSS, Figma',
    year: '2026',
  },
  {
    id: 5,
    slug: 'xquic',
    category: 'social media | graphic design',
    image: img5,
    title: 'Xquic',
    subtitle: 'Multi-channel design and brand support across digital and physical touchpoints.',
    description: (
      <>
        As a designer for XQUIC, I worked across a variety of projects, including
        presentation design, event backdrops, social media content, and advertising
        campaigns. My role focused on translating the brand’s identity into consistent,
        high-impact visuals across different formats, supporting both marketing initiatives
        and live experiences.
        <br />
        <a href="https://www.linkedin.com/company/x-quic/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <br />
        <a href="https://xquic.com/" target="_blank" rel="noreferrer">
          Website
        </a>
      </>
    ),
    client: 'Xquic',
    role: 'Graphic Design / Marketing',
    tools: 'Photoshop, Illustrator, Canva',
    year: '2025',
    link: 'https://www.behance.net/gallery/223750177/Xquic-Social-Media',
    longImage: xquicdetail,
  },
  {
    id: 6,
    slug: 'mateshine',
    category: 'motion',
    image: img6,
    title: 'Mate Shine',
    subtitle: 'Motion design and social content for a Brazilian beverage brand.',
    description:
      'I created three animated Instagram Reels for Mate Shine, a Brazilian beverage brand, focusing on dynamic visuals that highlight the product’s energy and identity. The goal was to capture attention quickly, reinforce brand presence, and create engaging, scroll-stopping content tailored for social media.',
    client: 'Mate Shine - Beverage Products',
    role: 'Motion Designer',
    tools: 'Canva',
    year: '2025',
    link: 'https://www.behance.net/gallery/138978125/Social-Media-Portfolio',
    videos: [mateshine1, mateshine2, mateshine3],
  },
  {
    id: 7,
    slug: 'agra',
    category: 'web development',
    image: img7,
    title: 'Agra Design',
    subtitle: 'A website project combining branding, design, and digital presence.',
    description: (
      <>
        Agra Design is a web project that combines branding, visual direction, and website
        execution. The project focused on creating a cohesive digital identity and
        translating brand values into an elegant and professional online experience.
        <br />
        <a href="https://www.instagram.com/agra.design_/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <br />
        <a href="https://agradesign.com.br/" target="_blank" rel="noreferrer">
          Website
        </a>
      </>
    ),
    client: 'Agra Design',
    role: 'Branding / Web Design / Web Development',
    tools: 'Adobe Suite, Figma',
    year: '2024',
    link: 'https://agradesign.com.br/',
    longImage: agradetail,
  },
  {
    id: 8,
    slug: 'torii',
    category: 'graphic design | branding',
    image: img10,
    title: 'Torii Restaurant',
    subtitle: 'A curated selection of social and visual communication pieces.',
    description:
      'A portfolio selection of social media projects developed for different brands and contexts. The work highlights visual communication, consistency, and adaptability across formats, campaigns, and audiences.',
    client: 'Torii Restaurant',
    role: 'Graphic Design',
    tools: 'Adobe Suite, Figma',
    year: '2025',
    link: 'https://www.behance.net/gallery/138978125/Social-Media-Portfolio',
    longImage: toriidetail,
  },
  {
    id: 9,
    slug: 'livia-ornellas',
    category: 'social media',
    image: img8,
    title: 'Livia Ornellas',
    subtitle: 'Social media marketing and content production for an interior architect.',
    description: (
      <>
        I led the social media marketing efforts, creating content strategies aligned with
        her brand and audience. I was responsible for planning and scripting posts,
        capturing photos and videos, editing the material, and managing the publishing
        process. The work focused on building a strong visual presence and engaging
        storytelling to showcase her projects and expertise.
        <br />
        <a
          href="https://www.instagram.com/liviaornellas.arq/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <br />
        <a
          href="https://www.liviaornellasarquitetura.com/"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </a>
      </>
    ),
    client: 'Livia Ornellas - Interior Architect',
    role: 'Graphic Design / Social Media / Video Editing',
    tools: 'Premiere, Figma, Canva, Meta Business',
    year: '2025',
    link: 'https://www.liviaornellasarquitetura.com/',
  },
  {
    id: 10,
    slug: 'realhome',
    category: 'ux ui design | social media',
    image: img12,
    title: 'Real Home',
    subtitle: 'End-to-end design case study across digital products and brand identity.',
    description:
      'Real Home is a comprehensive design case study developed for a real estate company, where I created the visual and user experience across multiple touchpoints, including a landing page, Instagram content, branding, and a mobile app. The project focused on building a cohesive and user-centered experience, ensuring consistency between the brand identity and digital interfaces while supporting both marketing and product goals.',
    client: 'Concept Project',
    role: 'UX/UI Design',
    tools: 'Figma',
    year: '2024',
    link: 'https://www.behance.net/gallery/213351813/Gooday',
    longImage: realhomedetail,
  },
  {
    id: 11,
    slug: 'moonmagic',
    category: 'ux ui design',
    image: img11,
    title: 'Moon Magic',
    subtitle: 'UX/UI case study for a cycle tracking app focused on Apple Watch.',
    description:
      'MoonMagic is a design case study for a menstrual cycle tracking app that connects cycle phases with the lunar cycle. The project focused on creating an intuitive and lightweight experience for Apple Watch, prioritizing clarity, quick interactions, and meaningful insights. The design translates complex biological and lunar data into simple, accessible visuals that support daily awareness and personal wellbeing.',
    client: 'Concept Project',
    role: 'UX/UI Design',
    tools: 'Figma',
    year: '2025',
    longImage: moondetail,
  },
  {
    id: 12,
    slug: 'dinoera',
    category: 'web development',
    image: img13,
    title: 'Dino Era',
    subtitle: 'An arcade-style web game built with HTML, CSS, and JavaScript.',
    description: (
      <>
        Dino Era is a web-based arcade game built with HTML, CSS, and JavaScript. Players
        choose one of three dinosaurs and must survive a one-minute asteroid storm. If hit
        three times, the game ends. The project focuses on gameplay logic, collision
        detection, and interactive design.
        <br />
        <a href="https://barbaraagra.github.io/Dino_Era/" target="_blank" rel="noreferrer">
          Play the Game
        </a>
      </>
    ),
    client: 'Concept Project',
    role: 'Game Developer',
    tools: 'HTML, CSS, JavaScript',
    year: '2023',
    heroVideo: dinoeragame,
  },
];