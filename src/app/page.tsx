import EuroData from "./components/EuroData";
import DolarData from "./components/DolarData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 id="cotizaciones" className="text-2xl font-semibold mb-6">
        Cotizaciones del Dolar
      </h2>

      <DolarData />
      <h2 className="text-2xl font-semibold mb-6 mt-10">
        Cotizaciones del Euro
      </h2>
      <EuroData />
    </main>
  );
}
