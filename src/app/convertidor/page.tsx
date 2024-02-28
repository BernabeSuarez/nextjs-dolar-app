"use client";

import { useState, useEffect, FormEvent } from "react";
import { IDolar } from "../interfaces/IDolar";

const Convertidor = () => {
  const [loading, setLoading] = useState(true);
  const [dolarOficial, setDolaroficial] = useState<IDolar>();
  const [dolares, setDolarses] = useState("");
  const [pesos, setPesos] = useState("");

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares/oficial")
      .then((res) => res.json())
      .then((data) => {
        setDolaroficial(data);
        setLoading(false);
      });
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const result = dolarOficial!.venta * parseInt(dolares);
    setPesos(result.toString());
  }

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>Loading...</h2>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 id="cotizaciones" className="text-2xl font-semibold mb-6">
        Convertidor de Dolar a Pesos
      </h2>
      <h3>El valor del dolar oficial es de: $ {dolarOficial!.venta}</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4  w-full sm:w-3/4 border border-slate-500 rounded-xl px-4 py-2"
      >
        <input
          type="text"
          name="pesos"
          placeholder="$"
          onChange={(e) => setDolarses(e.target.value)}
          className="text-black p-4 rounded-lg "
        />
        <button
          type="submit"
          className="bg-slate-600 text-white py-4 px-6 rounded-lg mt-6 hover:bg-slate-500"
        >
          Calcular
        </button>
      </form>
      {pesos && (
        <p>
          $ {dolares} equivalen a : $ {pesos}
        </p>
      )}
    </main>
  );
};

export default Convertidor;
