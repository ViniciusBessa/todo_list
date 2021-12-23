import React, { useState } from "react";
import "./Main.css"
import Tarefa from "../Tarefa/Tarefa";

function Main (props) {
  if (!localStorage.tarefas) {
    localStorage.tarefas = [];
  }

  const [tarefas, setTarefas] = useState(localStorage.tarefas);
  let textos = ['Eae\nEaee', 'eaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee']

  return (
    <div className="main-flex">
      {textos.map((texto, index) => <Tarefa key={index} texto={texto}/>)}
    </div>
  )
}

export default Main;
