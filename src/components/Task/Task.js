import React, { useState } from "react";
import './Task.css';

function Task (props) {
  const [showDescricao, setShowDescricao] = useState(false);

  function excluirTarefa () {
    let novasTarefas = JSON.parse(localStorage.tarefas);
    novasTarefas = novasTarefas.filter((descricao, index) => index !== props.index);
    props.setTarefas(novasTarefas);
  }

  function mudarShowDescricao () {
    if (showDescricao) {
      setShowDescricao(false);
    }
    else {
      setShowDescricao(true);
    }
  }

  return (
    <div className="task primary-color" onClick={() => mudarShowDescricao()}>
      <span className="task__title">{props.tarefa.titulo}</span> 
      <button className="task__btn-delete" onClick={() => excluirTarefa()}>X</button>
      {showDescricao && <span>{props.tarefa.descricao}</span>}
    </div>
  );
}

export default Task;
