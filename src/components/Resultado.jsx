import { useCallback, useMemo, useRef } from "react";
import useCotizador from "../hooks/useCotizador";
import { MARCAS, PLANES } from "../constants";

const Resultado = () => {
  const { resultado, datos } = useCotizador();
  const { marca, plan, year } = datos;
  const yearRef = useRef(year);

  //Utilizando useRef
  const [nombreMarca] = useCallback(
    MARCAS.filter((m) => m.id === Number(marca)),
    [resultado]
  ); //console.log(nombreMarca);

  //Utilizando useMemo
  // const [nombreMarca] = useMemo(
  //   () => MARCAS.filter((m) => m.id === Number(marca)),
  //   [resultado]
  // ); //console.log(nombreMarca);

  //Utilizando useRef
  // const [nombrePlan] = useCallback(
  //   PLANES.filter((p) => p.id === Number(plan)),
  //   [resultado]
  // ); //console.log(nombreMarca);

  //Utilizando useMemo
  const [nombrePlan] = useMemo(
    () => PLANES.filter((p) => p.id === Number(plan)),
    [resultado]
  ); //console.log(nombreMarca);

  if (resultado === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Summary</h2>
      <p className="my-2">
        <span className="font-bold">Brand: </span>
        {nombreMarca.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Car year: </span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total price quotation: </span>
        {resultado}
      </p>
    </div>
  );
};

export default Resultado;
