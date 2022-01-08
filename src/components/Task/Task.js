import React, { useState } from "react";
import './Task.css';

function Task (props) {
  const [showDescricao, setShowDescricao] = useState(false);

  function excluirTarefa () {
    let novasTarefas = JSON.parse(localStorage.tarefas);
    novasTarefas.splice(props.index, 1);
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
    <div className="task primary-color">
      <span className="task__title" onClick={() => mudarShowDescricao()}>{props.tarefa.titulo}</span>
      <button className="task__btn-delete" onClick={() => excluirTarefa()}>X</button>
      {showDescricao && 
        <span className="task__description" onClick={() => mudarShowDescricao()}>{props.tarefa.descricao}</span>
      }
    </div>
  );
}

export default Task;
