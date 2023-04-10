import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-15   w-full sm:text-base text-xs p-5 sm:p-0">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="font-bevietnam text-white">
          <p>Casa Milán</p>
          <p>C/ San Salvador 9, 41013 Sevilla</p>
        </div>
        <div className="font-bevietnam text-white">
          <p>Tlf: +34 636 63 40 11</p>
          <p> +34 954 24 18 11</p>
        </div>
        <div>
          <a
            className="font-bevietnam text-white decoration-0 hover:underline hover:bg-white hover:text-black hover:rounded-md"
            href="mailto:info@casamilan.com"
          >
            E-Mail: info@casamilan.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
