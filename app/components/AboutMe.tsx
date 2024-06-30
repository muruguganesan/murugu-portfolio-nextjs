import PercentageRange from "@/app/components/PercentageRange";
import { whatIDo_datas } from "@/app/staticDatas/datas";
import Image from "next/image";

import code_im from "@/app/assets/imgs/home/about_us/code_img.svg";

const AboutMe = () => {
  return (
    <section className="home_abtMe_wrapper section_padding mb-[100px]">
      <div className="c">
        <div className="home_abtMe_wrap">
          <h2 className="hme_abtMe_tit font-semibold text-[45px] text-center">
            About Me
          </h2>
          <p className="hme_abtMe_desc pt-[30px] text-[18px]">
            I am tech enthusiasts, committed to pushing the boundaries of
            digital innovation. I believe in creating seamless, intuitive, and
            engaging user experiences through cutting-edge web technologies.
          </p>
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
