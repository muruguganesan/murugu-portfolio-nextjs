"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


import amg from "@/app/assets/imgs/amg.jpg";
import murugu_animation from "@/app/assets/imgs/murugu_animation_2.gif";

import { header_nav_datas } from "@/app/staticDatas/datas";

const Header = () => {
  const myPathName = usePathname();
  return (
    <header className="header_wrap py-[30px]">
      <div className="c">
        <div className="header flex justify-between items-center flex-wrap">
          <Link href="/">
            <div className="logo_wrap relative">
              <Image
                width="200"
                height="37"
                alt="logo"
                src={murugu_animation}
                className="py-[10px] pr-[15px]" unoptimized
              />
              {/* Since Above image is a GIF Image, hence it cannot be optimized, here we need to use unoptimized attribute */}
              <span className="logo_smPhoto_wrap">
                <span className="logo_sm_photo">
                  <Image
                    height="40"
                    width="40"
                    alt="logo"
                    src={amg}
                    className="header_logo relative rounded-full"
                  />
                </span>
              </span>
            </div>
          </Link>

          <nav className="header_nav_wrap flex gap-[45px] items-center">
            <ul className="header_nav_ul flex gap-[35px] flex-wrap">
              {header_nav_datas.map((navItem) => (
                <li key={navItem.id} className={`header_nav_item text-[26px] ${myPathName===navItem.link?"mnu_active":""}`}>
                  <Link href={navItem.link} className={`header_item_link text-[21px]`}>
                    {navItem.text}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="donwload_cv_btn text-[18px] bg_orange text-white px-[30px] py-2 rounded-[15px]">
              Download CV
            </button>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;
