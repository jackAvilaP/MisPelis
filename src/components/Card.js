import React from "react";
import { GetStorage } from "../helpers/GetStorage";

const Card = ({ item, setList }) => {
  const deletePeli = (id) => {
    let peliStore = GetStorage("pelicula");
    let newPeli = peliStore.filter((peli) => peli.id !== parseInt(id));
    setList(newPeli);

    localStorage.setItem("pelicula", JSON.stringify(newPeli));
  };
  return (
    <article className="peli-item">
      <h3 className="title">{item.title}</h3>
      <p>{item.description}</p>
      <button className="edit">Editar</button>
      <button className="delet" onClick={() => deletePeli(item.id)}>
        Borrar
      </button>
    </article>
  );
};

export default Card;
