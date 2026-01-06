import {  ChevronRightIcon, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Tasks({ tasks, onTaskClick, onDeleteTask }) {
  const navigate = useNavigate()

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    query.set("title", task.title)
    query.set("description", task.description)
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul  className="BgList space-y-4 mx-3 p-6 rounded-xl">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`NomeLista text-left gap-2 flex text-white w-full bg-blue-700 p-2 rounded-md ${task.isCompleted && "line-through"}`}>
            {task.isCompleted ? <Check /> : ""}
            {task.title}
          </button>
          <button onClick={() => onSeeDetailsClick(task)} title="Ver Detalhes" className="NomeLista text-white bg-blue-700 p-2 rounded-md">
            <ChevronRightIcon />
          </button>
          <button onClick={() => onDeleteTask(task.id)} title="Excluir Tarefa" className="NomeLista text-white bg-blue-700 p-2 rounded-md">
            <X />
          </button>
        </li>
      ))}
    </ul>
  );
  
  }
export default Tasks
