import React from 'react';
import { social_icons_datas } from '@/app/staticDatas/datas';
import Image from 'next/image';
import Link from 'next/link';

const SocialIcons = () => {

  return (
    <div className="social_icons_wrap inline-block">
        <ul className="social_icons_ul flex gap-[25px] min-w-[350px] justify-center">
            {
                social_icons_datas.map((ele)=><li key={ele.id}  className="social_icon_li"><Link href={ele.link} className="social_icon_link" target="_blank"><Image alt="icon" width="40" src={ele.icon}  className="social_icon_img"  /></Link></li>)
            }
            
        </ul>
    </div>
  )
}

export default SocialIcons
