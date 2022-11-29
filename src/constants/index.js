export const MARCAS = [
  { id: 1, nombre: "European" },
  { id: 2, nombre: "American" },
  { id: 3, nombre: "Asian" },
];

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(
  new Array(20),
  (valor, index) => YEARMAX - index
);

export const PLANES = [
  { id: 1, nombre: "Basic" },
  { id: 2, nombre: "Full Cover" },
];
