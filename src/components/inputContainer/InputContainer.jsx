import { useState } from "react";
import AddTask from "./addTask/AddTask"
import FilterTask from "./filterTask.jsx/FilterTask"

function InputContainer({handleSubmit, taskList,filterTask}) {

    const [task, setTask] = useState("")
    


    const handleChange = (e) => {
    setTask(e.target.value)
    
    
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    handleSubmit(task)
    setTask("")
  }

  

    return (
        <section className="bg-gray-900 w-9/12  my-3.5 mx-auto rounded-md border-[1px] border-cyan-950 shadow-lg shadow-gray-500/50 max-w-2xl">
            <article>
                <form onSubmit={(e) => handleFormSubmit(e, task)}>
                    <article className="sm:flex sm:flex-row">
                        <AddTask handleChange={handleChange} tasks={task} taskList={taskList} />
                        <FilterTask filterTask={filterTask}/>
                    </article>
                        
                        <article className="w-full flex justify-center">
                    <button
                    type="submit"
                    className="bg-cyan-900 py-2 px-4 mx-auto my-5 rounded-md"
                    >
                    Agregar
                    </button>
                </article>   
                </form>
            </article>
        </section>
    
    )
  }
  
  export default InputContainer
                    
      
      