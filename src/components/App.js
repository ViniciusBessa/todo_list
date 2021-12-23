import './App.css';
import Tarefa from './Tarefa/Tarefa';

function App() {
  if (!localStorage.tarefas) {
    localStorage.tarefas = [];
  }

  const tarefas = localStorage.tarefas;
  let textos = ['Eae\nEaee', 'eae']

  return (
    <div className="App-flex">
      {textos.map((texto, index) => <Tarefa key={index} titulo={`Título: ${texto}`} texto={texto}/>)}
    </div>
  );
}

export default App;
