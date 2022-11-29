import { createContext, useState } from "react";
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero,
} from "../helpers";

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
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

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
    cotizarSeguro();
  };

  const cotizarSeguro = () => {
    //Base del Seguro
    let resultado = 2000;

    //Obtener diferencias de años
    const diferencia = obtenerDiferenciaYear(datos.year); //console.log(diferencia);

    //Obtener el 3% por año
    resultado -= (diferencia * 3 * resultado) / 100; //console.log(resultado);

    //Europeo 30%
    //Americano 15%
    //Asiatico 3%
    resultado *= calcularMarca(datos.marca); //console.log(resultado);

    //Plan Basico 20%
    //Completo 50%
    resultado *= calcularPlan(datos.plan); //console.log(resultado);

    //Formatear Dinero
    resultado = formatearDinero(resultado); //console.log(resultado);

    setCargando(true);

    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 3000);
  };

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        handleSubmit,
        error,
        cotizarSeguro,
        resultado,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
