import { createContext, useState } from "react";

//Context
const CotizadorContext = createContext();

//Provider
const CotizadorProvider = ({ children }) => {
  //Aqui se pueden definir states, effects, variables, funiones, y todo lo que se pase a value va a estar disponible en toda la aplicacion

  const [datos, setDatos] = useState({
    //Ejemplo de state con objetos
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");

  //Poniendo en el state los valores ingresados por el usuario
  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  //Validacion de formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(datos).includes("")) {
      setError("Todos los campos son obligatorios");
      setTimeout(() => {
        setError("");
      }, 2500);
      return;
    }
  };

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        handleSubmit,
        error,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
