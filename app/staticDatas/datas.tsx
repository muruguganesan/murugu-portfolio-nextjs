// Title with Desciption Type Import
// Header Nav Datas
// Social Icons Datas
// Percentage Range Datas
// Home About Us What I do
// Home About Us Title with Description
// Services About Us Title with Description
// Home > Services > Cards Data
// My Projects Title with Description
// My Projects Button Groups
// Testimonials Title with Description
// Testimonials Swiper Datas





// Title with Desciption Type Import
import { TitleWithDescType } from "@/app/dataTypes/commonDataTypes";

// Header Nav Datas
import { HeaderNavDataTypes } from "../dataTypes/commonDataTypes";

// Social Icons Datas
import instagram from "@/app/assets/imgs/home/iam/social_icons/instagram.webp";
import facebook from "@/app/assets/imgs/home/iam/social_icons/facebook.webp";
import twitter from "@/app/assets/imgs/home/iam/social_icons/twitter.webp";
import linkedin from "@/app/assets/imgs/home/iam/social_icons/linkedIn.webp";

// Percentage Range Datas
import html from "@/app/assets/imgs/home/about_us/tech_icons/html.webp";
import css from "@/app/assets/imgs/home/about_us/tech_icons/css.webp";
import javascript from "@/app/assets/imgs/home/about_us/tech_icons/js.webp";
import jquery from "@/app/assets/imgs/home/about_us/tech_icons/jquery.webp";
import wordpress from "@/app/assets/imgs/home/about_us/tech_icons/wordpress.webp";
import react from "@/app/assets/imgs/home/about_us/tech_icons/reactjs.webp";
import next from "@/app/assets/imgs/home/about_us/tech_icons/next.webp";

// Home > Services > Cards Data
import services_1 from '@/app/assets/imgs/home/services/services_1.webp';
import services_2 from '@/app/assets/imgs/home/services/services_2.webp';
import services_3 from '@/app/assets/imgs/home/services/services_3.webp';
import services_4 from '@/app/assets/imgs/home/services/services_4.webp';

import {ButtonGroupType} from '@/app/dataTypes/commonDataTypes';


// Header Nav Datas
const header_nav_datas: HeaderNavDataTypes[] = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "About Me",
    link: "/about",
  },
  {
    id: 3,
    text: "My Projects",
    link: "/projects",
  },
  {
    id: 4,
    text: "Contact",
    link: "/contact",
  },
];

// Social Icons Datas
const social_icons_datas = [
  {
    id: 1,
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: 2,
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: 3,
    icon: twitter,
    link: "https://x.com/",
  },
  {
    id: 4,
    icon: linkedin,
    link: "https://www.linkedin.com/feed/",
  },
];

// Percentage Range Datas
const percentage_range_datas = [
  {
    id: 1,
    title: "HTML",
    percentage: 95,
    tech_icon: html,
  },
  {
    id: 2,
    title: "CSS",
    percentage: 90,
    tech_icon: css,
  },
  {
    id: 3,
    title: "JavaScript",
    percentage: 80,
    tech_icon: javascript,
  },
  {
    id: 4,
    title: "JQuery",
    percentage: 90,
    tech_icon: jquery,
  },
  {
    id: 5,
    title: "Wordpress",
    percentage: 66,
    tech_icon: wordpress,
  },
  {
    id: 6,
    title: "React.js",
    percentage: 60,
    tech_icon: react,
  },
  {
    id: 7,
    title: "Next.js",
    percentage: 50,
    tech_icon: next,
  },
];

// Home About Us What I do
const whatIDo_datas = [
  {
    id: 1,
    text: "Develop high-performance web applications using the latest in React and JavaScript frameworks.",
  },
  {
    id: 2,
    text: "Craft responsive and accessible user interfaces that delight and engage users.",
  },
  {
    id: 3,
    text: "Integrate modern design principles to ensure our products are both beautiful and functional.",
  },
  {
    id: 4,
    text: "Work on exciting projects that make a real impact.",
  },
  {
    id: 5,
    text: "Work closely with designers to implement intuitive and visually appealing interfaces.",
  },
  {
    id: 6,
    text: "Focus on performance optimization techniques to enhance application speed and efficiency",
  },
];

// Home About Us Title with Description
const hme_abtUs_title_desc: TitleWithDescType = {
  title: "About Me",
  desc: "I am tech enthusiasts, committed to pushing the boundaries of digital innovation. I believe in creating seamless, intuitive, andengaging user experiences through cutting-edge web technologies.",
};

// Services About Us Title with Description
const services_title_desc: TitleWithDescType = {
  title: "Services",
  desc: "'Developing high-performance and SEO-friendly web applications with Next.js. Creating responsive and modern websites using HTML, CSS, JavaScript, React.js and Next.js.  Building dynamic and scalable web applications with React.js.",
};

// Home > Services > Cards Data
const services_cards_data = [
    {
      id: 1,
      img: services_1,
      title: "E-commerce Website",
      description: "Developed a responsive e-commerce website using React.js and Next.js. Integrated with a payment gateway and a headless CMS for product management.",
    },
    {
      id: 2,
      img: services_2,
      title: "Portfolio Website",
      description: "Created a personal portfolio website to showcase projects and skills. Utilized WordPress for easy content management and a custom theme for unique design.",
    },
    {
      id: 3,
      img: services_3,
      title: "Corporate Website Redesign",
      description: "Redesigned a corporate website to improve user experience and SEO. The project involved a complete overhaul of the UI/UX design and implementation using HTML, CSS, and JavaScript.",
    },
    {
      id: 4,
      img: services_4,
      title: "Blog Platform",
      description: "Developed a blog platform with a custom CMS using React.js and Node.js. Implemented features like post creation, commenting, and user management.",
    },
];

// My Projects Title with Description
const myproject_title_desc: TitleWithDescType = {
  title: "My Projects",
  desc: "'Developing high-performance and SEO-friendly web applications with Next.js. Creating responsive and modern websites using HTML, CSS, JavaScript, React.js and Next.js.  Building dynamic and scalable web applications with React.js.",
};

// My Projects Button Groups
const buttonGpsDatas:ButtonGroupType[] = [
  {
      id: 1,
      tech: "React",
  },
  {
      id: 2,
      tech: "Wordpress",
  },
  {
      id: 3,
      tech: "Next"
  },
  {
      id: 4,
      tech: "Other"
  }
];

// Testimonials Title with Description
const tesimonial_title_desc = [
  {
    id: 1,
    client_img: "",
    client_name: "Client 1",
    client_position: "CEO",
    testimonials: "Working with [Your Name] was a fantastic experience. Their expertise in React.js and Next.js helped us create a high-performance web application that exceeded our expectations"
  },
  {
    id: 2,
    client_img: "",
    client_name: "Client 1",
    client_position: "Marketing Director",
    testimonials: "[Your Name] delivered a stunning WordPress website for our marketing campaign. Their attention to detail and creativity made the project a huge success."
  },
  {
    id: 3,
    client_img: "",
    client_name: "Client 2",
    client_position: "Project Manager",
    testimonials: "I highly recommend [Your Name] for any front-end development project. Their skills in HTML, CSS, and JavaScript are top-notch, and they always deliver on time."
  },
  {
    id: 4,
    client_img: "",
    client_name: "Client 3",
    client_position: "CTO",
    testimonials: "[Your Name]'s work on our corporate website redesign was outstanding. The new site is not only visually appealing but also significantly improved our SEO."
  },
  {
    id: 5,
    client_img: "",
    client_name: "Client 4",
    client_position: "Director",
    testimonials: "[Your Name] built a real-time chat application for our startup. Their knowledge of React.js and Firebase was invaluable, and the end product is fantastic."
  },
]

export {
  header_nav_datas,
  social_icons_datas,
  percentage_range_datas,
  whatIDo_datas,
  hme_abtUs_title_desc,
  services_title_desc,
  services_cards_data,
  myproject_title_desc,
  buttonGpsDatas, 
  tesimonial_title_desc
};
