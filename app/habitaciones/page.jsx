import Image from "next/image";
import balcon from "../../public/balcon.jpg";
import baño from "../../public/baño.jpg";
import habitacion1 from "../../public/habitacion1.jpg";
import habitacion2 from "../../public/habitacion2.jpg";
import habitacion3 from "../../public/habitacion3.jpg";

export default function HabitacionesPage() {
  return (
    <div className="h-screen w-screen flex flex-col sm:flex-row overflow-y-auto  ">
      <div className="font-bevietnam sm:w-1/2 w-full pl-5 flex flex-col justify-center">
        <h1 className="font-extrabold sm:text-4xl text-xl p-5 sm:p-0 mb-6 text-center sm:text-start">
          Habitaciones
        </h1>
        <div className="text-md sm:text-xl p-5 sm:p-0">
          <h3>Disponemos de once habitaciones repartidas en cuatro plantas:</h3>
          <ul>
            <li>-6 habitaciones individuales</li>
            <li>-5 habitaciones dobles</li>
          </ul>
        </div>
      </div>
      <div className="sm:w-1/2 w-full h-full sm:p-3  bg-black overflow-y-scroll scrollbar-thin scrollbar-thumb-white">
        <div className="w-full h-1/2 bg-black flex justify-center items-center ">
          <Image
            className="sm:w-full w-3/4 sm:h-full h-1/2"
            src={baño}
            alt="baño"
          />
        </div>
        <div className="w-full h-1/2 bg-black flex justify-center items-center">
          <Image
            className="sm:w-full w-3/4 sm:h-full h-1/2"
            src={balcon}
            alt="baño"
          />
        </div>
        <div className="w-full h-1/2 bg-black flex justify-center items-center">
          <Image
            className="sm:w-full w-3/4 sm:h-full h-1/2"
            src={habitacion1}
            alt="baño"
          />
        </div>
        <div className="w-full h-1/2 bg-black flex justify-center items-center">
          <Image
            className="sm:w-full w-3/4 sm:h-full h-1/2"
            src={habitacion2}
            alt="baño"
          />
        </div>
        <div className="w-full h-1/2 bg-black flex justify-center items-center">
          <Image
            className="sm:w-full w-3/4 sm:h-full h-1/2"
            src={habitacion3}
            alt="baño"
          />
        </div>
      </div>
    </div>
  );
}
