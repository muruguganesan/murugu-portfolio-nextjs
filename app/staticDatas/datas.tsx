// Header Nav Datas
// Social Icons Datas
// Percentage Range Datas
// Home About Us What I do

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
export {
  header_nav_datas,
  social_icons_datas,
  percentage_range_datas,
  whatIDo_datas,
};
