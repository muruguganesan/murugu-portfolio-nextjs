import React from "react";
import Image from "next/image";

import ButtonComp from "@/app/components/ButtonComp";
import muruguganesan from "@/app/assets/imgs/home/iam/murugu_nobg.webp";
import SocialIcons from "./SocialIcons";

const IAm = () => {
  return (
    <section className="iam_wrap section_padding">
      <div className="c">
        <div className="iam_wra flex gap-[100px] items-center">
          <div className="iam_left">
            <p className="iam_tx font-bold text-[24px]">Hi I am </p>
            <h6 className="name  font-bold text-[32px] text_orange">Murugu ganesan</h6>
            <h2 className="font-bold text-[60px] inline-block">Front End Developer</h2>
            <p className="italic indent-[30px] pt-[30px] text-justify text-[18px]">
            I am a passionate and experienced Front-End Developer with a strong focus on creating dynamic and responsive web applications using React and Next.js. With a keen eye for design and a commitment to user-centric development, I strive to build seamless and engaging user experiences. My expertise spans a range of front-end technologies and best practices, ensuring that the applications I develop are not only functional but also aesthetically pleasing and accessible.
            </p>
            <div className="button_comp_wrap pt-[40px]">
              <ButtonComp text="Hire Me" />
            </div>
          </div>
          <div className="iam_right">
            <div className="iam_right_img">
              <div className="iam_right_im">
                <Image
                  src={muruguganesan}
                  alt="Muruguganesan"
                  className="home_ban_img bg-[#fd6f001a] rounded-[50%] min-w-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="homeBanner_socialIcons text-right">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default IAm;
