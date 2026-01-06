import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";



function TaskPage() {
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    const navigate = useNavigate()
  
    return (
      <div className="space-y-4">
        <div className="flex justify-center items-center relative mb-5">
          <button onClick={() => navigate(-1)} className="absolute left-0">
            <ChevronLeft className="text-white" />
          </button>
          <h1 className="title text-white ">Detalhes da Tarefa</h1>
        </div>
        <div className="BgList text-white p-5 space-y-5  rounded-md">
          <h1 className="title-task">{title}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    );
}

export default TaskPage;