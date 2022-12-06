// import TaskContext from "../context/TaskContext"; => asi llamamos un pops.children desde TaskContext  el cual engloba nuestos datos y le agrega un titulo a daca segmento de informacion

// import {useContext} from 'react'
// import {TaskContext} from '../context/TaskContext'

// Con import usercontext y llamanodo a taskContext estoy trayendo el numero 20 desde context

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ tasks }) {
  const { deleteTask } = useContext(TaskContext);

  // const valor = useContext(TaskContext)
  // console.log(valor)

  return (
    // {/* // de cada elemento vamos a retornar con MAPS un div con una tarea */}

    // <TaskContext>
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{tasks.title}</h1>
      <p className="text-gray-00 text-sm">{tasks.description}</p>
      <button
        className="bg-red-500 px-4 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(tasks.id)}
      >
        Eliminar Tarea
      </button>
    </div>
    // /* </TaskContext> */
  );
}

export default TaskCard;
