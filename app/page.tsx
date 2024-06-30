import IAm from "@/app/components/IAm";
import AboutMe from "@/app/components/AboutMe";
import Services from "@/app/components/Services";
import MyProjects from "@/app/components/MyProjects"

export default function Home() {
  return (
    <div className="dashboard_page_wrap">
      <IAm />
      <AboutMe />
      <Services />
      <MyProjects />

    </div>
  );
}
