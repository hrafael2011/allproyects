const categorias = [
  {
    id: 1,
    nombre: "Frutas",
  },
  {
    id: 2,
    nombre: "Verduras",
  },
];

const productos = [
  {
    id: 1,
    categorias_id: 1,
    nombre: "Manzana",
    precio: 1000,
  },
  {
    id: 2,
    categorias_id: 1,
    nombre: "Uvas",
    precio: 123,
  },
  {
    id: 3,
    categorias_id: 2,
    nombre: "Lechuga",
    precio: 1200,
  },
];

const paises = [
  {
    nombre: "Republica Dominicana",
    dominio: "Do",
  },
  {
    nombre: "Venezuela",
    dominio: "ve",
  },
  {
    nombre: "Peru",
    dominio: "Pe",
  },
  {
    nombre: "Mexico",
    dominio: "Me",
  },
  {
    nombre: "Chile",
    dominio: "ch",
  },
];

const categoria_producto = [
  {
    id: 1,
    nombre: "Abarrotes",
  },
  {
    id: 2,
    nombre: "Lacteos",
  },
  {
    id: 3,
    nombre: "Carnes",
  },
  {
    id: 4,
    nombre: "Perfumes",
  },
];

const atributos = [
  {
    id: 1,
    nombre: "Perecible",
  },
  {
    id: 2,
    nombre: "Armable",
  },
  {
    id: 3,
    nombre: "Fragil",
  },
  {
    id: 4,
    nombre: "Multiuso",
  },
];

export { productos };
export { categorias };
export { paises };
export { categoria_producto };
export { atributos };
