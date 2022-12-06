// atajo para escribit rapido el import y la funcion es "rfce"
// atajo para escribir console.log mas rapido "clg"
// atajo useState => escribir useSatate y elegir el snippet

// import { task as data} from "./task"; esto lo corrí a App.jsx
// import { useState, useEffect } from "react"; Esto lo borré porque no es necesario si no esta lo de abajo,obvio

import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { task } = useContext(TaskContext);

  // Los props pueden ir así => (props) o así=> ({Aquí va el valor, en este caso " task"})
  // Añadí props

  //   const [task, setask] = useState([]);   Esto lo corrí a App.jsx

  //   useEffect(()=>{
  //     setask(data)

  //   },[])

  if (task.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">Wey no hay tareas AÚN!</h1>;
  }

  return (
    // {/* // de cada elemento vamos a retornar con MAPS un div con una tarea */}
    <div className="grid grid-cols-4 gap-2">
      {task.map((tasks) => (
        <TaskCard key={tasks.id} tasks={tasks} />
      ))}
      ;
    </div>
  );
}

export default TaskList;
