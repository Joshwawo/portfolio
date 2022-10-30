import github from "../img/github.png";
import mail from "../img/email.png";

const Contacto = () => {
  return (
    <div>
      <p className="text-center mt-24 text-2xl font-bold">Mi contacto</p>

      <div className="contacto-item flex items-center justify-center gap-10 pb-10 mt-10">
        <div className="gitgub">
          <img src={github} alt="github" className="w-9 mx-auto mb-2" />
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
          <img src={mail} alt="mail" className="w-9 mx-auto mb-2" />
          <a href="mailto:morales_t82@outlook.com" className="font-semibold">
            Morales_t82@outlook.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
