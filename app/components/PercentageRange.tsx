"use client";
import Image from "next/image";

import { percentage_range_datas } from "@/app/staticDatas/datas";

const PercentageRange = () => {

  return (
    <div className="percentage_range_wrap">
      {percentage_range_datas.map((ele) => {
        return (
          <div className="percentage_range pt-[35px] flex gap-5" key={ele.id}>
            <div className="tech_img_wrap w-[70px]">
              <Image
                alt="img"
                className="tech_icon"
                src={ele.tech_icon}
              />
            </div>
            <div className="percentage_range_in w-full">
              <h5 className="percent_range_tit font-semibold text-[24px]">
                {ele.title}
              </h5>
              <span className="percentage_range w-full h-[7px] bg-[#fd6f001a] relative inline-block rounded-[15px]">
                <span
                  className={`percentage_value bg-[var(--color-orange)] inline-block`}
                  style={{ width: `${ele.percentage}%` }}
                >
                  <button
                    className="percentage_knob size-[20px] inline-block bg-white"
                     title={`Completed ${ele.percentage} % !!!`}
                  ></button>
                </span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PercentageRange;
