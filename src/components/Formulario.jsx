import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants/index";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {
  const { datos, handleChangeDatos, handleSubmit, error } = useCotizador();

  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Car Brand
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChangeDatos(e)}
            value={datos.marca}
          >
            <option value="">-- Select the brand --</option>

            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Year
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChangeDatos(e)}
            value={datos.year}
          >
            <option value="">-- Select the year --</option>

            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Choose a coverage plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>
                  {plan.nombre}{" "}
                  <input
                    type="radio"
                    name="plan"
                    value={plan.id}
                    onChange={(e) => handleChangeDatos(e)}
                  />
                </label>
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Price quotation"
        />
      </form>
    </>
  );
};

export default Formulario;
