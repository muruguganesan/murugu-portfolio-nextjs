import TitleWDesc from "@/app/components/TitleWDesc";
import { services_title_desc } from "@/app/staticDatas/datas";
import ReusableCard from '@/app/components/ReusableCard';

const Services = () => {
  return (
    <section className="services_wrap">
      <div className="c">
        <TitleWDesc datas={services_title_desc} />
        <ReusableCard />
      </div>
    </section>
  );
};

export default Services;
