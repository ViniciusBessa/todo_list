import React, { useState, useEffect } from "react";
import "./Main.css";
import Tarefa from "../Task/Task";
import AdicionarTarefa from "../AddTask/AddTask"

function Main () {
  const [tarefas, setTarefas] = useState(JSON.parse(localStorage.tarefas) || []);

  useEffect(() => {
    localStorage.tarefas = JSON.stringify(tarefas);
  }, [tarefas])

  return (
    <main className="main-flex">
      <h1>TODO List</h1>
      <AdicionarTarefa setTarefas={setTarefas}/>
      {tarefas.map((tarefa, index) => 
      <Tarefa setTarefas={setTarefas} index={index} key={index} titulo={tarefa.titulo} texto={tarefa.texto}/>)
      }  
    </main>
  );
}

export default Main;
