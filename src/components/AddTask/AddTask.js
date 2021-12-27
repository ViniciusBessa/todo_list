import React, { useRef, useState } from "react";
import "./AddTask.css"

function AddTask (props) {
  const [showJanela, setShowJanela] = useState(false);
  const refTitulo = useRef(null);
  const refTexto = useRef(null);

  function adicionarTarefa () {
    let novasTarefas = JSON.parse(localStorage.tarefas);
    let titulo = refTitulo.current.value.trim();
    let texto = refTexto.current.value.trim();

    if (texto !== '' && titulo !== '') {
      novasTarefas.unshift({titulo: titulo.trim(), texto: texto.trim()});
      setShowJanela(false)
      props.setTarefas(novasTarefas);
    }
  }

  function fecharJanela () {
    refTitulo.current.value = '';
    refTexto.current.value = '';
    setShowJanela(false);
  }

  return (
    <div className="container">
      {showJanela && (
        <div className="window" onMouseLeave={() => fecharJanela()}>
          <button className="window__btn-close" onClick={() => fecharJanela()}>X</button>
          <div className="window__div">
            <h3>Título</h3>
            <input maxLength={20} type={'text'} ref={refTitulo}/>
          </div>
          <div className="window__div">
            <h3>Texto</h3>
            <textarea className="vertical-resize" ref={refTexto}></textarea>
          </div>
          <button style={{alignSelf: 'flex-end'}} onClick={() => adicionarTarefa()}>Adicionar nova tarefa</button>
        </div>
      )}

      <button onClick={() => setShowJanela(true)}>Adicionar uma nova tarefa</button>
    </div>
  );
}

export default AddTask;
