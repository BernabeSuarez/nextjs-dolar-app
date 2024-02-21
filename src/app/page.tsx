import { IDolar } from "./interfaces/IDolar";

const url = process.env.DOLAR_API;

async function getData() {
  const res = await fetch(`${url}/dolares`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();
  const fechaActualizacion = new Date(data[0].fechaActualizacion);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 id="cotizaciones" className="text-2xl font-semibold mb-6">
        Cotizaciones del Dolar
      </h2>
      <h3 className="mb-5 sm:mb-3">
        Actualizado el: {fechaActualizacion.toLocaleDateString()}, a las{" "}
        {fechaActualizacion.toLocaleTimeString()}
      </h3>
      <div className="grid  grid-cols-1 sm:grid-cols-3 gap-12">
        {data.map((dolar: IDolar, index: number) => (
          <div
            className="text-white bg-slate-300 rounded-lg flex flex-row py-3 px-5 justify-between items-center hover:bg-slate-600"
            key={index}
          >
            <div>
              <h2 className="text-black">{dolar.nombre}</h2>
            </div>
            <div className="text-black">
              <p>Compra: ${dolar.compra}</p>
              <p>Venta: ${dolar.venta}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
