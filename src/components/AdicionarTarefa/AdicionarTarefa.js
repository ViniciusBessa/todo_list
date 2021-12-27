import React, { useRef, useState } from "react";
import "./AdicionarTarefa.css"

function Tarefa (props) {
  const [showJanela, setShowJanela] = useState('none');
  const refTitulo = useRef(null);
  const refTexto = useRef(null);

  function adicionarTarefa () {
    let novasTarefas = JSON.parse(localStorage.tarefas);
    let titulo = refTitulo.current.value.trim();
    let texto = refTexto.current.value.trim();

    if (texto !== '' && titulo !== '') {
      novasTarefas.unshift({titulo: titulo.trim(), texto: texto.trim()});
      setShowJanela('none')
      props.setTarefas(novasTarefas);
    }
  }

  function FecharJanela () {
    refTitulo.current.value = '';
    refTexto.current.value = '';
    setShowJanela('none');
  }

  return (
    <div className="container-adicionar">
      <div className="janela-adicionar-tarefa" onMouseLeave={() => FecharJanela()} style={{display: showJanela}}>
        <button className="botao-fechar-janela" onClick={() => FecharJanela()}>X</button>
        <div>
          <h3>Título</h3>
          <input maxLength={20} type={'text'} ref={refTitulo}/>
        </div>
        <div>
          <h3>Texto</h3>
          <textarea className="vertical-resizing" ref={refTexto}></textarea>
        </div>
        <button style={{alignSelf: 'flex-end'}} onClick={() => adicionarTarefa()}>Adicionar nova tarefa</button>
      </div>
      <button onClick={() => setShowJanela('flex')}>Adicionar uma nova tarefa</button>
    </div>
  );
}

export default Tarefa;
