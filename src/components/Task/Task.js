import React from "react";
import './Task.css';

function Tarefa (props) {
  function excluirTarefa () {
    let novasTarefas = JSON.parse(localStorage.tarefas);
    novasTarefas = novasTarefas.filter((texto, index) => index !== props.index);
    props.setTarefas(novasTarefas);
  }

  return (
    <div className="task primary-color">
      {props.titulo}
      <button className="task__btn-delete" onClick={() => excluirTarefa()}>X</button>
    </div>
  );
}

export default Tarefa;
