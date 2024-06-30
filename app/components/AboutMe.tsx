import PercentageRange from "@/app/components/PercentageRange";
import { whatIDo_datas, hme_abtUs_title_desc } from "@/app/staticDatas/datas";
import Image from "next/image";
import TitleWDesc from "@/app/components/TitleWDesc";
import code_im from "@/app/assets/imgs/home/about_us/code_img.svg";

const AboutMe = () => {
  return (
    <section className="home_abtMe_wrapper section_padding mb-[100px]">
      <div className="c">
        <div className="home_abtMe_wrap">
          <TitleWDesc datas={hme_abtUs_title_desc} />
          <div className="about_us_cols flex gap-[45px] pt-[45px]">
            <div className="hme_whatIDo">
              <h2 className="hme_whatIDo_tit font-semibold text-[35px] text-[var(--color-orange)] pt-[30px] italic">
                What I Do:
              </h2>
              <ul className="hme_whatIDo_ul">
                {whatIDo_datas.map((ele) => (
                  <li key={ele.id} className="hme_whatIDo_li pt-4 flex gap-2">
                    <Image src={code_im} alt="img" />
                    <span className="text-[16px]">{ele.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tech_stack_wrap w-[450px]">
              <h2 className="hme_abtMe_tit font-semibold text-[35px] text-[var(--color-orange)] pt-[30px]">
                Tech Stack Competency:
              </h2>
              <PercentageRange />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
