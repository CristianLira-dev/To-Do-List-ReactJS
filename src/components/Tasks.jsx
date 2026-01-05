import {  ChevronRightIcon, Check, X } from "lucide-react";

function Tasks({tasks, onTaskClick, onDeleteTask}) {
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
          <button title="Ver Detalhes" className="NomeLista text-white bg-blue-700 p-2 rounded-md">
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
