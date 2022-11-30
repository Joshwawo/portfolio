// type AlertaTypes = {
//   message: string;
//   error: boolean;
// };

const Alerta = ({ alerta }: any) => {
  // console.log(alerta)
  return (
    <div className="text-center">
      <div
        className={`${
          alerta.error === true
            ? "bg-red-500 dark:bg-pink-500 dark:text-black rounded py-1 px-10 lo text-base text-red-6<00 mb-3 mt-10"
            : "bg-whit dark:bg-indigo-5 px-2 py-1 rounded text-base text-gray-700 mb-3 mt-10"
        } bg-gradient-to-br text-center  rounded-xl uppercase text-white font-bold text-sm  inline-block  `}
      >
        <span className="dark:text-white">{alerta.message}</span>
      </div>
    </div>
  );
};

export default Alerta;
