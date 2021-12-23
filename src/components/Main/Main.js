import React, { useState } from "react";
import "./Main.css";
import Tarefa from "../Tarefa/Tarefa";

function Main (props) {
  if (!localStorage.tarefas) {
    localStorage.tarefas = [];
  }

  const [tarefas, setTarefas] = useState(JSON.parse(localStorage.tarefas));

  function adicionarTarefa () {
    let novasTarefas = tarefas;
    let input = document.getElementById('input');
    novasTarefas.push(input.value);
    localStorage.tarefas = JSON.stringify(novasTarefas);
    setTarefas(JSON.parse(localStorage.tarefas));
  }

  return (
    <main className="main-flex">
      <input id="input" type="text"/>
      <button onClick={() => adicionarTarefa()}>Aperta</button>

      <section>
        {tarefas.map((texto, index) => 
        <Tarefa setTarefas={setTarefas} index={index} key={index} texto={texto}/>)
        }
      </section>
      
    </main>
  );
}

export default Main;
