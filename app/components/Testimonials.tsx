import TitleWDesc from "@/app/components/TitleWDesc";
import { myproject_title_desc} from "@/app/staticDatas/datas";

const Testimonials = () => {
  return (
    <section className="testimonials_wrap">
        <TitleWDesc datas={myproject_title_desc} />

    </section>
  )
}

export default Testimonials
