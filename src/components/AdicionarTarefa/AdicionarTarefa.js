import React, { useRef, useState } from "react";
import "./AdicionarTarefa.css"

function Tarefa (props) {
  const [showJanela, setShowJanela] = useState('none');
  const refTitulo = useRef(null);
  const refInput = useRef(null);

  function adicionarTarefa () {
    let novasTarefas = JSON.parse(localStorage.tarefas);
    let valorInput = refInput.current.value

    if (valorInput !== '' && valorInput.trim() !== '') {
      novasTarefas.unshift((valorInput.trim()));
      props.setTarefas(novasTarefas);
    }
  }

  return (
    <div style={{marginBottom: 20}}>
      <div className="container-adicionar" onMouseLeave={() => setShowJanela('none')} style={{display: showJanela}}>
        <button className="botao-fechar-janela" onClick={() => setShowJanela('none')}>X</button>

        <div>
          <h3>Título</h3>
          <input maxLength={20} type={'text'} ref={refTitulo}/>
        </div>
        <div>
          <h3>Texto</h3>
          <textarea className="vertical-resizing" ref={refInput}></textarea>
        </div>
        <button style={{alignSelf: 'flex-end'}} onClick={() => adicionarTarefa()}>Adicionar nova tarefa</button>
      </div>
      <button onClick={() => setShowJanela('flex')}>Mostrar Janela</button>
    </div>
  );
}

export default Tarefa;
