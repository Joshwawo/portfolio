const Alerta = ({ alerta }: any) => {
  return (
    <div className="text-center absolute bottom-2 left-2">
      <p className={`${alerta.error ? " text-red-400" : "from-sky-400 to-sky-600"
        } inline-block bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm `}>
        {alerta.message}
      </p>
    </div>
  );
};

export default Alerta;
