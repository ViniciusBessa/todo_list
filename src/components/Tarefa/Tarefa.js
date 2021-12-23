import React from "react";
import './Tarefa.css';

function Tarefa (props) {
  return (
    <section className="tarefa">
      <div className="titulo">
        <h3>{props.titulo}</h3>
      </div>
      <div className="texto">
        {props.texto}
      </div>
    </section>
  );
}

export default Tarefa;
