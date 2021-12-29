import React, { useRef, useState } from "react";
import "./AddTask.css"

function AddTask (props) {
  const [showJanela, setShowJanela] = useState(false);
  const refTitulo = useRef(null);
  const refDescricao = useRef(null);

  function adicionarTarefa () {
    const novasTarefas = JSON.parse(localStorage.tarefas);
    let titulo = refTitulo.current.value.trim();
    let descricao = refDescricao.current.value.trim();

    if (descricao !== '' && titulo !== '') {
      novasTarefas.unshift({titulo: titulo.trim(), descricao: descricao.trim()});
      setShowJanela(false)
      props.setTarefas(novasTarefas);
    }
  }

  function fecharJanela () {
    refTitulo.current.value = '';
    refDescricao.current.value = '';
    setShowJanela(false);
  }

  return (
    <div className="container">
      {showJanela && (
        <div className="window">
          <button className="window__btn-close" onClick={() => fecharJanela()}>X</button>
          <div className="window__div">
            <h3>Título</h3>
            <input maxLength={20} type={'text'} ref={refTitulo}/>
          </div>
          <div className="window__div">
            <h3>Descrição</h3>
            <textarea className="vertical-resize" ref={refDescricao}></textarea>
          </div>
          <button className="window__btn-create" onClick={() => adicionarTarefa()}>Adicionar tarefa</button>
        </div>
      )}

      <button className="window__btn-open" onClick={() => setShowJanela(true)}>Adicionar uma tarefa</button>
    </div>
  );
}

export default AddTask;
