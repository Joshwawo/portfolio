import github from "../img/github.png";
import mail from "../img/email.png";
import { AiFillGithub, AiFillMail } from "react-icons/ai";

const Contacto = () => {
  return (
    <div id="contacto">
      <p className="text-center mt-10 text-2xl font-bold dark:text-white">
        Mi contacto
      </p>

      <div className="contacto-item flex items-center justify-center gap-10 pb-10 mt-10 dark:text-white">
        <div className="gitgub">
          <AiFillGithub size={25} />
          <a
            href="https://github.com/Joshwawo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            Github
          </a>
        </div>
        <div className="emaill">
          {/* <img src={mail} alt="mail" className="w-9 mx-auto mb-2" /> */}
          <AiFillMail size={25} />
          <a href="mailto:morales_t82@outlook.com" className="font-semibold">
            Morales_t82@outlook.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
