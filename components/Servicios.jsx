import ServiciosGallery from "./ServiciosGallery";
const Servicios = () => {
  return (
    <section className="min-h-full w-full  flex flex-col my-10 py-5 items-center">
      <div className="w-full flex flex-col items-center ">
        <h1 className="font-bevietnam font-extrabold text-6xl">Servicios</h1>
        <p className="font-bevietnam text-lg sm:mx-44 text-center mt-5">
          Cada residente dispone de las siguientes ventajas ya incluidas en el
          precio:
        </p>
      </div>
      <ServiciosGallery />
    </section>
  );
};
export default Servicios;
