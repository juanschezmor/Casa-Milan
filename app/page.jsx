import Ubicacion from "@/components/Ubicacion";
import Welcome from "@/components/Welcome";
import Servicios from "@/components/Servicios";
import Carousel from "@/components/Carousel";
import ZonasComunes from "@/components/ZonasComunes";
export default function HomePage() {
  return (
    <>
      <Welcome />
      <Ubicacion />
      <Servicios />
      <ZonasComunes />
    </>
  );
}
