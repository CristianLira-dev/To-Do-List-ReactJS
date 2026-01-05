import { useState } from "react"

function AddTask({ onAddSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setErro] = useState("");
  return (
    <div className="BgInputs space-y-4 mx-3 flex flex-col p-6 rounded-xl">
      <input
        type="text"
        placeholder="Digite o Titulo da Tarefa"
        className="rounded-xl p-2 text-white"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        name=""
        id=""
      />
      <input
        type="text"
        placeholder="Digite a Descrição da Tarefa"
        className="rounded-xl p-2 text-white"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        name=""
        id=""
      />
      <p className="error text-red-500 text-left my-2">{ error}</p>
      <button
        type="submit"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            setErro("Os Campos não podem ser Vazios")
            return
          }  

          onAddSubmit(title, description);
          setTitle("")
          setDescription("")
          setErro("")
        }}
        className="ButtonForm w- full bg-blue-700 text-white  rounded-xl p-1"
      >
        Enviar Tarefa
      </button>
    </div>
  );
}

export default AddTask
