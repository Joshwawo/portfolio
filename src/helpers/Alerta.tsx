// type AlertaTypes = {
//   message: string;
//   error: boolean;
// };

const Alerta = ({ alerta }: any) => {
  console.log(alerta)
  return (
    <div className="text-center">
      <div
        className={`${
          alerta.error === true
            ? "bg-red-400 dark:bg-pink-500 dark:text-black rounded py-1 px-10 lo text-base text-red-6<00 mb-3"
            : "from-sky-400 to-sky-600"
        } bg-gradient-to-br text-center  rounded-xl uppercase text-white font-bold text-sm  inline-block  `}
      >
        {alerta.message}
      </div>
    </div>
  );
};

export default Alerta;
