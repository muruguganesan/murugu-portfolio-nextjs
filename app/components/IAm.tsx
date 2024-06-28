import React from "react";
import Image from "next/image";

import ButtonComp from "@/app/components/ButtonComp";
import muruguganesan from "@/app/assets/imgs/home/iam/muruguganesan.webp";

const IAm = () => {
  return (
    <div className="iam_wrap pt-[30px]">
      <div className="c">
        <div className="iam_wra flex gap-[30px] items-center">
          <div className="iam_left">
            <p className="iam_tx">Hi I am </p>
            <h6 className="name">Murugu ganesan</h6>
            <h2>Front End</h2>
            <h2>Developer</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium.
              Turpis tempus pharetra
            </p>
            <div className="button_comp_wrap">
              <ButtonComp text="Hire Me" />
            </div>
          </div>
          <div className="iam_right">
            <div className="iam_right_img">
              <div className="iam_right_im">
                <Image
                  src={muruguganesan}
                  alt="Muruguganesan"
                  className="home_ban_img min-w-[450px] w-[650px] h-[650px] bg-[#fd6f001a] object-contain rounded-[50%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IAm;
