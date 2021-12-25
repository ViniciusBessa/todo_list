import React from "react";
import './Tarefa.css';

function Tarefa (props) {
  function excluirTarefa () {
    let novasTarefas = JSON.parse(localStorage.tarefas);
    novasTarefas = novasTarefas.filter((texto, index) => index !== props.index);
    props.setTarefas(novasTarefas);
  }

  return (
    <div className="tarefa primary-color">
      {props.texto}
      <button className="botao-excluir" onClick={() => excluirTarefa()}>X</button>
    </div>
  );
}

export default Tarefa;
