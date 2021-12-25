import React, { useState } from "react";
import "./Main.css";
import Tarefa from "../Tarefa/Tarefa";
import AdicionarTarefa from "../AdicionarTarefa/AdicionarTarefa"
import { useEffect } from "react/cjs/react.development";

function Main () {
  const [tarefas, setTarefas] = useState(JSON.parse(localStorage.tarefas) || []);

  useEffect(() => {
    localStorage.tarefas = JSON.stringify(tarefas);
  }, [tarefas])

  return (
    <main className="main-flex">
      <AdicionarTarefa setTarefas={setTarefas}/>

      {tarefas.map((texto, index) => 
      <Tarefa setTarefas={setTarefas} index={index} key={index} texto={texto}/>)
      }  
    </main>
  );
}

export default Main;
