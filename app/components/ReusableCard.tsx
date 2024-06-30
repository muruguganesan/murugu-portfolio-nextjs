import Image from "next/image";
import { services_cards_data } from "@/app/staticDatas/datas";

const ReusableCard = () => {
  console.log(services_cards_data);
  return (
    <div className="reusable_cards_wrap pt-[50px]">
      {services_cards_data.map((ele) => (
        <div className="reusable_card w-[25%] flex" key={ele.id}>
          <div className="reusable_card_in p-[25px] bg-[#F8F8F8] rounded-[15px] flex flex-col">
            <div className="card_img_wrap">
              <Image src={ele.img} alt="card_img" className="card_img" />
            </div>
            <h4 className="card_title pt-[15px] font-semibold text-[24px]">
              {ele.title}
            </h4>
            <p className="card_desc pt-[10px] text-[16px] text-justify">
              {ele.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReusableCard;
