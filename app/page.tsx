import IAm from "@/app/components/IAm";
import AboutMe from "@/app/components/AboutMe";

export default function Home() {
  return (
    <div className="dashboard_page_wrap">

      <IAm />
      <AboutMe />

    </div>
  );
}
