const urlEuro = process.env.NEXT_PUBLIC_EURO_API!;

async function getEuro() {
  const res = await fetch(urlEuro);
  const data = await res.json();
  return data;
}

const EuroData = async () => {
  const data = await getEuro();
  return (
    <main className="grid  grid-cols-1 gap-12 ">
      {data ? (
        <div className="text-white bg-slate-300 rounded-lg flex flex-col py-3 px-5 justify-between items-center hover:bg-slate-600">
          <div className="flex flex-row justify-between items-center w-full">
            <div>
              <h2 className="text-black">{data.nombre}</h2>
            </div>
            <div className="text-black">
              <p>Compra: ${data.compra}</p>
              <p>Venta: ${data.venta}</p>
            </div>
          </div>
          <div className="text-xs text-slate-500">
            <p>
              Actualizado el:
              {new Date(data.fechaActualizacion).toLocaleDateString()} a las{" "}
              {new Date(data.fechaActualizacion).toLocaleTimeString()}
            </p>
          </div>
        </div>
      ) : null}
    </main>
  );
};

export default EuroData;
