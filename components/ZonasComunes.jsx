import Carousel from "./Carousel";
import Link from "next/link";
const ZonasComunes = () => {
  return (
    <section
      id="zonascomunes"
      className=" h-auto sm:h-screen w-full flex-col flex  sm:p-28  "
    >
      <div className="w-full h-2/6 flex  sm:items-start items-center sm:flex-row  flex-col">
        <div className="w-2/5 h-full sm:px-12">
          <h1 className="font-bevietnam font-extrabold text-xl sm:text-4xl sm:text-start text-center tracking-wide">
            En nuestra residencia podras disfrutar de zonas de uso común:
          </h1>
        </div>
        <div className="w-2/5 h-full font-bevietnam sm:text-lg text-base pl-5 leading-9">
          <ul>
            <li>-Patio</li>
            <li>-Salón/Comedor</li>
            <li>-Lavandería</li>
            <li>-Cocina, completamente equipada</li>
          </ul>
        </div>
        <div className=" flex w-1/5 h-full items-center">
          <Link
            href="/habitaciones"
            className="h-8 mt-12  bg-blue-800 rounded-lg text-white p-5 flex items-center justify-center hover:shadow-lg hover:underline"
          >
            Ver habitaciones
          </Link>
        </div>
      </div>
      <div className="w-full h-4/6 sm:p-0 p-5">
        <Carousel />
      </div>
    </section>
  );
};
export default ZonasComunes;
