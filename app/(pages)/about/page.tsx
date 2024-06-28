import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Murugu ganesan",
  description:
    "Software Engineer, Front End Developer, HTML, CSS, JavaScript, React.js, Next.js, Node.js (Upcoming)",
  icons: {
    icon: '/images/about_me.ico'
  },
};

const About = () => {
  return (

    <div className="about_page_wrap">
      <div className="c">This is about page</div>
    </div>

  );
};

export default About;
