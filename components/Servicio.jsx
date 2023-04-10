const Servicio = ({ icono, servicio, descripcion }) => {
  return (
    <div className="w-1/3 text-center  flex justify-center items-center flex-col mt-10">
      <div className="h-1/3">{icono}</div>
      <div className="h-1/3">
        <h1 className="font-bevietnam font-semibold">{servicio}</h1>
      </div>
      <div className="h-1/3">
        <p>{descripcion}</p>
      </div>
    </div>
  );
};
export default Servicio;
