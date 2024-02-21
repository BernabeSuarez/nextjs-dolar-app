import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden relative bg-gradient-to-t from-black to-slate-800">
      <div className="flex flex-col justify-center items-center px-3">
        <h1 className=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">
          Cotizacion del Dolar en <br />
          <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-yellow-100 to-sky-300">
            Argentina
          </span>
        </h1>
        <p className="mt-5 text-center text-xs text-white opacity-90 sm:text-lg">
          Cotizaciones del Dolar, Euro, Real, Peso Chileno, Peso Uruguayo...
        </p>
        <a
          href="#cotizaciones"
          className="bg-slate-600 text-white py-4 px-6 rounded-lg mt-6 hover:bg-slate-500"
        >
          Ver cotizaciones{" "}
        </a>
      </div>
    </div>
  );
};

export default Hero;
