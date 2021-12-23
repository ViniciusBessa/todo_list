import React from "react";
import './Tarefa.css';

function Tarefa (props) {
  function excluirTarefa () {
    let novasTarefas = JSON.parse(localStorage.tarefas);
    novasTarefas = novasTarefas.filter((texto, index) => index !== props.index);
    localStorage.tarefas = JSON.stringify(novasTarefas);
    props.setTarefas(JSON.parse(localStorage.tarefas));
  }

  return (
    <div className="tarefa primary-color">
      {props.texto}
      <button onClick={() => excluirTarefa()}>Aperta</button>
    </div>
  );
}

export default Tarefa;
