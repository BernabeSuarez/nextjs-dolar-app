import { IDolar } from "../interfaces/IDolar";

const urlDolar = process.env.NEXT_PUBLIC_DOLAR_API!;
async function getDolar() {
  const res = await fetch(urlDolar);
  const data = await res.json();
  return data;
}

const DolarData = async () => {
  const data = await getDolar();
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-3 gap-12">
      {data.map((dolar: IDolar, index: number) => (
        <div
          className="text-white bg-slate-300 rounded-lg flex flex-col py-3 px-5 justify-between items-center hover:bg-slate-600"
          key={index}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <div>
              <h2 className="text-black">{dolar.nombre}</h2>
            </div>
            <div className="text-black">
              <p>Compra: ${dolar.compra}</p>
              <p>Venta: ${dolar.venta}</p>
            </div>
          </div>
          <div className="text-xs text-slate-500">
            <p>
              Actualizado el:
              {new Date(dolar.fechaActualizacion).toLocaleDateString()} a las{" "}
              {new Date(dolar.fechaActualizacion).toLocaleTimeString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DolarData;
