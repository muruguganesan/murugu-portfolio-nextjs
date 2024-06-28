import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Murugu's Contact Details",
  description:
    "He is Currently working as a Software Engineer (Front End Devleoper) in one of the tech startup at Chennai",
    icons: {
      icon: '/images/contact.ico'
    },
};

const Contact = () => {
  return (
    <div className="contact_page_wrap">
        <div className="c">
        <div>This is a Contact Page</div>
        </div>
    </div>
  )
};

export default Contact;
