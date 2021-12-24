import React, { useEffect, useRef, useState } from "react";

function Tarefa (props) {
  const [showJanela, setShowJanela] = useState('none');
  const refJanela = useRef(null);
  const refInput = useRef(null);

  useEffect(() => {
    refJanela.current.focus();
  }, [showJanela])

  function adicionarTarefa () {
    let novasTarefas = JSON.parse(localStorage.tarefas);
    let valorInput = refInput.current.value

    if (valorInput !== '' && valorInput.trim() !== '') {
      novasTarefas.unshift((valorInput.trim()));
      localStorage.tarefas = JSON.stringify(novasTarefas);
      props.setTarefas(JSON.parse(localStorage.tarefas));
    }
  }

  return (
    <div style={{marginBottom: 20}}>
      <div onMouseOutCapture={() => setShowJanela('none')} ref={refJanela} style={{display: showJanela}}>
        <input ref={refInput}/>
      </div>

      <button onClick={() => setShowJanela('block')}>Mostrar Janela</button>
      <button onClick={() => adicionarTarefa()}>Adicionar nova tarefa</button>
    </div>
  );
}

export default Tarefa;
