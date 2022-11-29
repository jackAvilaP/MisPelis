import React, { useEffect } from "react";
import { GetStorage } from "../helpers/GetStorage";
import Card from "./Card";

const ListPelis = ({ list, setList }) => {
  useEffect(() => {
    setList(GetStorage("pelicula"));
  }, []);

  return (
    <section className="content">
      {/* van las peliculas */}
      {list.length > 0 ? (
        list.map((item) => <Card item={item} key={item.id} setList={setList} />)
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </section>
  );
};

export default ListPelis;
