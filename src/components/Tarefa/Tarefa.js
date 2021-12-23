import React from "react";
import './Tarefa.css';

function Tarefa (props) {
  return (
    <div className="tarefa primary-color font-color">
      {props.texto}
    </div> 
  );
}

export default Tarefa;
