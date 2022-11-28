import React from 'react'

const Card = ({title, description}) => {
    
    return (
        <article className="peli-item">
            <h3 className="title">
                Desarrollo web
            </h3>
            <p>Pequeña descripcion</p>
            <button className="edit">Editar</button>
            <button className="delet">Borrar</button>
        </article>
    )
}

export default Card