import photo from "./../assets/photo-profile.webp";
import ContactForm from "./ContactForm";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside
      className="p-6 text-justify scroll-mt-12 sm:max-w-xs lg:max-w-md lg:pl-16"
      id="overview"
    >
      <h2 className="text-3xl font-bold text-center">Overview</h2>
      <img
        className="pt-6 mx-auto max-h-60 md:max-h-96"
        src={photo}
        alt="photo-profile"
      />
      <p className="p-6 text-xs italic text-center">
        This is when I gave counseling to my juniors about selecting a college.
      </p>
      <p>
        As a website developer, I have helped my clients solve website-related
        problems, from college assignments and creating basic scripts to custom
        websites and WordPress sites.{" "}
        <span className="text-primary">
          Working quickly and employing the right technology is a service I can
          provide.
        </span>
      </p>
      <p className="mt-4">
        While I specialize in developing websites, I occasionally take UI/UX or
        writing courses to expand my skill set.
      </p>
      <div className="mt-4">
        <h3 className="text-xl">Connect with me</h3>
        <div className="flex gap-2 mt-2">
          <a target="_blank" href="https://www.instagram.com/yusup.alfa/">
            <AiFillInstagram size={30} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/yusuf-habib-alfatha"
          >
            <BsLinkedin size={30} />
          </a>
          <a target="_blank" href="https://wa.me/+6287865712625">
            <IoLogoWhatsapp size={30} />
          </a>
          <a
            target="_blank"
            href="https://www.fiverr.com/yusufhabib164?public_mode=true"
          >
            <TbBrandFiverr size={30} />
          </a>
          <a
            target="_blank"
            href="https://www.upwork.com/freelancers/~012f8f04abb0f5c039"
          >
            <FaSquareUpwork size={30} />
          </a>
        </div>
        <ContactForm />
      </div>
    </aside>
  );
};

export default Sidebar;
