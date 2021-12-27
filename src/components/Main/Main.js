import React, { useState, useEffect } from "react";
import "./Main.css";
import Task from "../Task/Task";
import AddTask from "../AddTask/AddTask"

function Main () {
  const [tarefas, setTarefas] = useState(JSON.parse(localStorage.tarefas) || []);

  useEffect(() => {
    localStorage.tarefas = JSON.stringify(tarefas);
  }, [tarefas])

  return (
    <main className="main-flex">
      <h1>TODO List</h1>
      <AddTask setTarefas={setTarefas}/>
      {tarefas.map((tarefa, index) => 
      <Task setTarefas={setTarefas} index={index} key={index} tarefa={tarefa}/>)
      }  
    </main>
  );
}

export default Main;
