const Ubicacion = () => {
  return (
    <section className=" items-center    h-auto sm:h-screen w-full sm:flex-row flex flex-col  ">
      <div className="sm:w-1/2 w-full h-1/2 sm:h-full p-4 sm:p-10 flex justify-center items-center">
        <iframe
          className=" h-5/6 w-5/6 "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12682.57646786075!2d-5.98175140000003!3d37.3745969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126e9dc0e853fd%3A0x20e4732d83dd1028!2sCasa%20Mil%C3%A1n%20Residencia%20de%20estudiantes!5e0!3m2!1ses-419!2ses!4v1680625616909!5m2!1ses-419!2ses"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="sm:w-1/2 w-full sm:h-full h-1/2 flex flex-col justify-center   p-15  ">
        <h1 className="font-bevietnam font-extrabold  text-center sm:text-start text-xl sm:text-4xl ">
          Ubicacion
        </h1>
        <div className="sm:w-4/6 w-full rounded-xl sm:text-lg p-5   text-base space-y-5 font-bevietnam">
          <p>
            Estamos en un barrio tranquio de casas bajas, pero también a escasos
            metros de una gran parte de la vida social de la ciudad.
          </p>
          <p>
            A unos pocos minutos se encuentra el <b>campus Universitario</b>,
            donde podemos encontrar la
            <b> Facultad de Derecho</b> o la de <b>Economía</b>,además de muchas
            más.
          </p>
          <p>
            También se puede disfrutar de todo tipo de transporte público. Cerca
            se encuentra la
            <span> </span>
            <b>
              estación de metro, del tren, del tranvía y del apeadero de buses
            </b>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
export default Ubicacion;
