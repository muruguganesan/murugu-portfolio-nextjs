import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Murugu ganesan Projects",
  description:
    "Software Engineer, Front End Developer, HTML, CSS, JavaScript, React.js, Next.js, Node.js (Upcoming), ECommerce, Betting App, Hotels, Internal Company Web Applications",
    icons: {
      icon: '/images/projects.ico'
    },
  };

const Projects = () => {
  return (
    <div className="projects_wrap">
      <div className="c">This is Project page</div>
    </div>
  );
};

export default Projects;
