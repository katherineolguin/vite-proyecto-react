import { createContext, useState, useEffect } from "react";
import { task as data } from "../data/task";

// createContext me devuelve un objeto
// PROVIDER permite que los componentes que se consumen se subscriban a los cambios del contexto, este aepta una prop Value que se pasará a los componentes consmidores que son descendientes de este PROVIDER

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]);

  function createTask(tasks) {
    // Con los tres puntos digo que me cree un nuevo arreglo sin alterar el arreglo principal, es como que copia los datos y le agrega unos nuevos en otro arreglo
    // Con el tasks.lengt hago que incremente el id desde el ultimo id que tenia la lista
    setTask([
      ...task,
      {
        title: tasks.title,
        id: task.length,
        description: tasks.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(task.filter((tasks) => tasks.id !== taskId));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        task,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>

    /* <h1> Componente conext</h1>
    {props.children} => con esto de paso los datos a TasjkCard para que los junte con el componente padre (que serian los datos del formulario) => para que funcione debe ir tambiien (props ) en la llamada de la funcion*/
  );
}
