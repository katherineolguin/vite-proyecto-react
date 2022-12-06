// atajo para importar rapido "imp"
// esto "<>,</>" es COMO un div! o un fragment o contenedor
//  Aquí le paso el valor de task y el valor de createTask

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className=" container mx-auto p-10">
      <TaskForm  />
      <TaskList  />
      </div>
    </main >
  );
}

export default App;
