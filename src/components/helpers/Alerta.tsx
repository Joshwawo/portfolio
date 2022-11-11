const Alerta = ({ alerta }:any) => {
    return (
      <div className="text-center">
        <div
          className={`${
            alerta.error ? " text-red-400" : "from-sky-400 to-sky-600"
          } inline-block bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm `}
        >
          {alerta.message}
        </div>
      </div>
    );
  };
  
  export default Alerta;
  