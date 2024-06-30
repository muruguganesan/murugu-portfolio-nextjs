import TitleWDesc from "@/app/components/TitleWDesc";
import { myproject_title_desc, buttonGpsDatas } from "@/app/staticDatas/datas";
import ButtonGps from "@/app/components/ButtonGps";

const MyProjects = () => {
  return (
    <section className="my_projects section_padding">
      <div className="c">
        <TitleWDesc datas={myproject_title_desc} />
        <ButtonGps data={buttonGpsDatas} />
      </div>
    </section>
  );
};

export default MyProjects;
