import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import './App.css'
import { useEffect, useState } from 'react'
function App() {
 const [tasks, setTasks] = useState(
   JSON.parse(localStorage.getItem("listaReact")) || []
 );
  
  useEffect(() => {
    localStorage.setItem("listaReact", JSON.stringify(tasks))
  }, [tasks])

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     //chamar a API
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await response.json();
  //     setTasks(data)
  //   }
  //   fetchTasks()
  // }, [])
  
  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      //atualizar tarefa no qual o usuario clicou
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted}
      }
        //tarefa que o usuario não clicou
          return task
    })
    setTasks(newTasks)
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    console.log(newTasks)
    setTasks(newTasks)
  }

  function onAddSubmit(title, description) {
    
    const ids = tasks.map(task => task.id)

    let MaxId = ids.length > 0 ? Math.max(...ids) : 0


    const newTask = {
      id: MaxId + 1,
      //ou usar Date.now()
      title,
      description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }
  
  return (
    <div className="space-y-4">
      <h1 className="title text-white">Gerenciador de Tarefas</h1>
      <AddTask onAddSubmit={ onAddSubmit} />
      <Tasks
        tasks={tasks}
        onTaskClick={onTaskClick}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}

export default App
