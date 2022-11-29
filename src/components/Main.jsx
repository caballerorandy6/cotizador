import React from "react";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useCotizador from "../hooks/useCotizador";
import Spinner from "./Spinner";

const Main = () => {
  const { cargando } = useCotizador();

  return (
    <main className="bg-white md:w2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
      <Formulario />

      {cargando ? <Spinner /> : <Resultado />}
    </main>
  );
};

export default Main;
