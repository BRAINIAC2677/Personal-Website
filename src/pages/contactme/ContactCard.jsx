import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { GoMail } from "react-icons/go";

function ContactCard(props) {
  const { name, catchLine, link, icon } = props.data;
  const icons = {
    FaLinkedin: <FaLinkedin className="contact-icons"></FaLinkedin>,
    FaFacebook: <FaFacebook className="contact-icons"></FaFacebook>,
    FaGithub: <FaGithub className="contact-icons"></FaGithub>,
    FaInstagram: <FaInstagram className="contact-icons"></FaInstagram>,
    FaTwitter: <FaTwitter className="contact-icons"></FaTwitter>,
    GoMail: <GoMail className="contact-icons"></GoMail>,
  };

  return (
    <div className="relative flex justify-between items-center h-20 sm:h-24 w-72 my-4 sm:m-4 p-4 rounded bg-primary-dark text-ink hover:transform hover:scale-105 transition duration-300">
      <div className="space-y-2">
        <p className="font-bold text-lg sm:text-xl">{name}</p>
        <p className="text-xs sm:text-base">{catchLine}</p>
      </div>
      {icons[icon]}
      {link != "" ? (
        <a className="absolute inset-0 opacity-0" href={link}></a>
      ) : null}
    </div>
  );
}

export default ContactCard;
