import img1 from '../assets/card-gooday.png';
import img2 from '../assets/card-woohoo.png';
import img3 from '../assets/card-fuurever.png';
import img4 from '../assets/card-phd1.png';
import img5 from '../assets/card-xquic.png';
import img6 from '../assets/card-mateshine.png';
import img7 from '../assets/card-agra.png';
import img8 from '../assets/card-livia.png';
import img9 from '../assets/card-socials.png';
import img10 from '../assets/card-torii.png';
import img11 from '../assets/card-moonmagic.png';
import img12 from '../assets/card-realhome.png';
import img13 from '../assets/card-dino.png';
import portwoohoo from "../assets/interiorprojeto/MockupWoohoo.jpg"
import goodaydetail from "../assets/interiorprojeto/gooday-detail.png"
import fuureverdetail from "../assets/interiorprojeto/fuurever-details.png"
import realhomedetail from "../assets/interiorprojeto/realhome-details.png"
import mateshine1 from "../assets/videos/MateShine1.mp4"
import mateshine2 from "../assets/videos/MateShine2.mp4"
import mateshine3 from "../assets/videos/MateShine3.mp4"
import dinoeragame from "../assets/videos/dinoeragame.mp4"




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
    year: '2025',
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
    description:
      'This project brings together creative, marketing, and digital communication work developed for Woohoo Channel. It includes visual strategy, branded content, and digital assets designed to connect with a young and engaged audience.',
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
    subtitle: 'A clean, modern website project combining UX/UI design and WordPress development for an architecture studio based in California.',
    description:
      'For PHD Architects, I designed and developed a responsive website focused on clean aesthetics, clear navigation, and a refined user experience. The project included UX/UI design in Figma and full implementation in WordPress using Divi, translating the studio’s visual identity into a functional and professional online presence.',
    client: 'PHD Architects',
    role: 'Web Design / Web Development',
    tools: 'WordPress, HTML, CSS, Figma',
    year: '2025',
  },
  {
    id: 5,
    slug: 'xquic',
    category: 'social media | graphic design',
    image: img5,
    title: 'Xquic',
    subtitle: 'Social media design for technology-focused brands.',
    description:
      'This project presents a collection of social media pieces created for tech companies, with a focus on clarity, strong visual hierarchy, and communication tailored to digital platforms and brand tone.',
    client: 'Xquic and other brands',
    role: 'Graphic Design / Social Media',
    tools: 'Photoshop, Illustrator, Canva',
    year: '2025',
    link: 'https://www.behance.net/gallery/223750177/Xquic-Social-Media',
  },
  {
    id: 6,
    slug: 'mateshine',
    category: 'motion',
    image: img6,
    title: 'Mate Shine',
    subtitle: 'A curated selection of social and visual communication pieces.',
    description:
      'A portfolio selection of social media and visual communication projects developed for different brands and contexts, highlighting consistency, adaptability, and strong visual direction.',
    client: 'Mate Shine - Beverage Products',
    role: 'Motion Designer',
    tools: 'Canva',
    year: '2025',
    link: 'https://www.behance.net/gallery/138978125/Social-Media-Portfolio',
      videos: [
    mateshine1,
    mateshine2,
    mateshine3
  ]
  },
  {
    id: 7,
    slug: 'agra',
    category: 'web development',
    image: img7,
    title: 'Agra Design',
    subtitle: 'A website project combining branding, design, and digital presence.',
    description:
      'Agra Design is a web project that combines branding, visual direction, and website execution. The project focused on creating a cohesive digital identity and translating brand values into an elegant and professional online experience.',
    client: 'Agra Design',
    role: 'Branding / Web Design / Web Development',
    tools: 'WordPress, HTML, CSS, Figma',
    year: '2023',
    link: 'https://agradesign.com.br/',
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
    tools: 'Adobe Suite',
    year: '2022–2024',
    link: 'https://www.behance.net/gallery/138978125/Social-Media-Portfolio',
  },
  {
    id: 9,
    slug: 'livia-ornellas',
    category: 'social media',
    image: img8,
    title: 'Livia Ornellas',
    subtitle: 'Social media design for technology-focused brands.',
    description:
      'A selection of social media pieces created for technology brands, with emphasis on clarity, hierarchy, and communication designed for digital environments.',
    client: 'Livia Ornellas - Interior Designer',
    role: 'Graphic Design / Social Media / Video Editing',
    tools: 'Premiere, Figma',
    year: '2024',
    link: 'https://www.behance.net/gallery/223750177/Xquic-Social-Media',
  },
  

  {
    id: 10,
    slug: 'realhome',
    category: 'ux ui design | social media',
    image: img12,
    title: 'Real Home',
    subtitle: 'Mobile app design focused on experience, usability, and visual consistency.',
    description:
      'Placeholder project card based on Gooday. This can be replaced later with a new case study, images, and project details.',
    client: 'Concept Project',
    role: 'UX/UI Design',
    tools: 'Figma, Adobe Suite',
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
    subtitle: 'Communication and digital design for a television channel.',
    description:
      'Placeholder project card based on Woohoo. This can be replaced later with a new case study, updated text, and refined visual direction.',
    client: 'Woohoo Channel',
    role: 'Graphic Design / Marketing',
    tools: 'Adobe Suite',
    year: '2021',
    link: 'https://www.behance.net/gallery/114807509/Canal-Woohoo',
  },
  {
    id: 12,
    slug: 'dinoera',
    category: 'web development',
    image: img13,
    title: 'Dino Era',
    subtitle: 'An arcade-style web game built with HTML, CSS, and JavaScript.',
    description:
      'Dino Era is a web-based arcade game built with HTML, CSS, and JavaScript. Players choose one of three dinosaurs and must survive a one-minute asteroid storm. If hit three times, the game ends. The project focuses on gameplay logic, collision detection, and interactive design.',
    client: 'Concept Project',
    role: 'Game Developer',
    tools: 'HTML, CSS, Javascript',
    year: '2023',
    link: 'https://www.behance.net/gallery/209850913/Fuurever-Home',
    heroVideo: dinoeragame,
  }, /*
  {
    id: 13,
    slug: 'dinoera',
    category: 'web development',
    image: img13,
    title: 'Dino Era',
    subtitle: 'A website project combining branding, design, and digital presence.',
    description:
      'Placeholder card for another web project. Keep it for now as a visual filler and replace the content when you are ready.',
    client: 'Architecture Studio',
    role: 'Web Design / Web Development',
    tools: 'WordPress, HTML, CSS, Figma',
    year: '2024',
    link: '',
  },
  {
    id: 14,
    slug: 'xquic-2',
    category: 'social media | graphic design',
    image: img5,
    title: 'Tech Social Media',
    subtitle: 'Social media design for technology-focused brands.',
    description:
      'Placeholder project card based on Xquic. Useful for keeping the grid full while you decide which final case studies will stay on the site.',
    client: 'Tech Brands',
    role: 'Graphic Design / Social Media',
    tools: 'Photoshop, Illustrator, Canva',
    year: '2024',
    link: 'https://www.behance.net/gallery/223750177/Xquic-Social-Media',
  },
  {
    id: 15,
    slug: 'mateshine-2',
    category: 'motion',
    image: img6,
    title: 'Motion Design Selection',
    subtitle: 'A curated selection of visual communication pieces.',
    description:
      'Placeholder card for motion and animated content. Later, this can become one of the video-based dynamic project pages.',
    client: 'Multiple clients',
    role: 'Graphic Design / Motion',
    tools: 'Adobe Suite',
    year: '2024',
    link: 'https://www.behance.net/gallery/138978125/Social-Media-Portfolio',
  },
  {
    id: 16,
    slug: 'agra-2',
    category: 'web development',
    image: img7,
    title: 'Brand Website',
    subtitle: 'A website project combining branding, design, and digital presence.',
    description:
      'Placeholder card based on Agra Design. Good to keep structure and rhythm in the portfolio grid until the final project list is ready.',
    client: 'Brand Client',
    role: 'Branding / Web Design / Web Development',
    tools: 'WordPress, HTML, CSS, Figma',
    year: '2023',
    link: 'https://agradesign.com.br/',
  },
  {
    id: 17,
    slug: 'tech-companies-2',
    category: 'social media',
    image: img8,
    title: 'B2B Tech Visuals',
    subtitle: 'Social media design for technology-focused brands.',
    description:
      'Placeholder card for another technology-related social media project. You can later turn this into a more strategic case study.',
    client: 'B2B Tech Brands',
    role: 'Graphic Design / Social Media',
    tools: 'Photoshop, Illustrator',
    year: '2024',
    link: 'https://www.behance.net/gallery/223750177/Xquic-Social-Media',
  },
  {
    id: 18,
    slug: 'social-media-2',
    category: 'graphic design',
    image: img9,
    title: 'Social Content Design',
    subtitle: 'A curated selection of social and visual communication pieces.',
    description:
      'Placeholder card for general social media design. Keep it as a filler now and refine it into a dedicated project later.',
    client: 'Multiple clients',
    role: 'Graphic Design',
    tools: 'Adobe Suite',
    year: '2022–2024',
    link: 'https://www.behance.net/gallery/138978125/Social-Media-Portfolio',
  },*/
];