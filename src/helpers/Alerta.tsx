const Alerta = ({ alerta }: any) => {
  return (
    <div
      className={`${
        alerta.error ? "bg-red-400 dark:bg-red-400 rounded-lg py-2  text-base text-red-6<00 mb-3" : "from-sky-400 to-sky-600"
      } bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm my-10`}
    >
      {alerta.message}
    </div>
  );
};

export default Alerta;
