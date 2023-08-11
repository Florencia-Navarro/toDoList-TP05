import { useState } from "react"
import { FaExclamationCircle } from "react-icons/fa"

function AddTask({handleChange, tasks, taskList}) {

  const [error, setError] = useState("")
  
  const handleInputChange = (e) => {
    const inputValue = e.target.value

    handleChange(inputValue)
    validateInput(inputValue)
  }

  const validateInput = (inputValue) => {

    if (inputValue.length < 3) {
      setError("La tarea debe tener al menos 3 caracteres.")
    } else if (taskList.some(task => task.taskName === inputValue)) {
      setError("Esta tarea ya existe.")
    } else {
      setError("")
    }
  }

    return (
      
      <div className="bg-orange-800 m-3 p-3 flex flex-col sm:sm:w-2/4">
          <label htmlFor="">Tarea</label>
          <input 
              type="text" 
              placeholder="Ingresa una tarea" 
              value={tasks} className="bg-orange-800" 
              onChange={(e) => {handleChange(e)
                                validateInput(e.target.value)}}
          />
          {error && <span className="text-xs text-black flex flex-row"><FaExclamationCircle className="mt-[2px] mr-[2px]"/> {error}</span>}
          
      </div>
      
    )
  }
  
  export default AddTask