import Image from "next/image";
import casafuera from "../public/casafuera.jpg";

const Welcome = () => {
  return (
    <section
      id="welcome"
      className="sm:max-h-screen w-full sm:flex-row flex flex-col "
    >
      <div className="sm:w-1/2 w-full pb-6 text-center sm:text-start  h-auto flex items-center flex-col justify-center sm:p-16  md:py-28 md:px-32  space-y-4  ">
        <h1 className="font-bevietnam  font-extrabold text-md text-center sm:text-start md:text-3xl lg:text-7xl sm:leading-relaxed ">
          Bienvenidos a la casa de estudiantes Milán.
        </h1>
        <p className="font-bevietnam">
          Si buscas un lugar distinto, que no sea la típica residencia de
          estudiantes ni tampoco un piso compartido, este es tu sitio.
        </p>
        <button className="h-8 mt-12  bg-blue-800 rounded-lg text-white p-5 flex items-center justify-center">
          <a href="#zonascomunes">¡Échale un vistazo a nuestra casa!</a>
        </button>
      </div>
      <div className="w-full sm:w-1/2 h-auto    bg-black p-10">
        <Image
          className=" w-full h-full object-cover"
          src={casafuera}
          alt="casafuera"
        />
      </div>
    </section>
  );
};
export default Welcome;
