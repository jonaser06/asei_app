import { DataModel } from "../model/datamodel";

// Fun fake data to play with

export const mockData: DataModel[] = [
  {
    nombre: "Aniversarios",
    cargo: "Decimo aniversario inmobiliaria los faroles del sol",
    correo: "Maria.Fernanda@asei.com",
    fecha: "27 de Nov 2020",
    estado:"Habilitado",
    modulo:"Learning Center",
    opciones:"edit,delete,view",
    working:true
  },
  {
    nombre: "Eventos",
    cargo: "Reunion virtual presentacion de nuevos proyectos ASEI",
    correo: "Felicia.Ramirez@asei.com",
    fecha: "05 de Nov 2020",
    estado:"Habilitado",
    modulo:"Documentos",
    opciones:"edit,delete,view",
    working:true
  },
  {
    nombre: "Efemérides",
    cargo: "Reunion virtual presentacion de nuevos proyectos ASEI",
    correo: "Karla.Marines@asei.com",
    fecha: "12 de Nov 2020",
    estado:"Deshabilitado",
    modulo:"Noticias",
    opciones:"edit,delete,view",
    working:true
  }
];