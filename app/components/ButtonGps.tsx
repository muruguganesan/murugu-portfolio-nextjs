"use client";
import React, { useState } from "react";
import ButtonComp from "@/app/components/ButtonComp";
import { ButtonGroupType } from "@/app/dataTypes/commonDataTypes";

interface ButtonGpsProps {
  data: ButtonGroupType[];
}

const ButtonGps: React.FC<ButtonGpsProps> = ({ data }) => {
  const [actTab, setActTab] = useState(1);
  const btnFns = (ele: ButtonGroupType) => setActTab(ele.id);

  return (
    <div className="button_gps flex pt-[45px] justify-center gap-[20px]">
      {data.map((ele) => (
        <div key={ele.id} className={`btnGrp_btn ${actTab === ele.id ? "active_tab" : ""}`}>
          <ButtonComp
            customClass="toggle_btn"
            text={ele.tech}
            btnFns={() => btnFns(ele)}
          />
        </div>
      ))}
    </div>
  );
};

export default ButtonGps;
