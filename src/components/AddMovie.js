import React, { useState } from "react";
import { saveStorage } from "../helpers/SaveStorage";

const AddMovie = ({ setList }) => {
  const titlePrimary = "Añadir pelicula";
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const { title, description } = data;

  const dataForm = (e) => {
    e.preventDefault();

    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    let peli = {
      id: new Date().getTime(),
      title,
      description,
    };

    setData(peli);
    setList((element) => {
      return [peli, ...element];
    });
    saveStorage("pelicula", peli);
  };

  return (
    <div className="add">
      <h3 className="title">{titlePrimary}</h3>
      <strong>
        {title && description && "Has creado la pelicula " + title}
      </strong>
      <form onSubmit={dataForm}>
        <input type="text" id="title" name="title" placeholder="Titulo" />
        <textarea
          name="description"
          id="description"
          placeholder="description"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};

export default AddMovie;
