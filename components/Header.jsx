import Link from "next/link";
const Header = () => {
  return (
    <div className="h-10   bg-white w-full flex flex-row items-center text-xs sm:text-lg sm:pl-5 p-2 justify-between ">
      <div className="w-full text-primary font-bold">
        <Link
          className="text-primary font-semibold sm:mr-4 hover:font-extrabold"
          href="/"
        >
          Casa Milan
        </Link>
      </div>
      <div className="w-full space-x-2 sm:space-x-5 mr-2 sm:mr-10 text-end">
        <Link
          className="text-primary font-semibold :mr-2 sm:mr-4 hover:underline"
          href="/"
        >
          Inicio
        </Link>
        <Link
          className="text-primary font-semibold mr-2 sm:mr-4 hover:underline"
          href="/habitaciones"
        >
          Habitaciones
        </Link>
        <Link
          className="text-primary font-semibold mr-2 sm:mr-4 hover:underline"
          href="/tarifas"
        >
          Tarifas
        </Link>
        <Link
          className="text-primary font-semibold mr-2 sm:mr-4 hover:underline"
          href="/contacto"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};
export default Header;
