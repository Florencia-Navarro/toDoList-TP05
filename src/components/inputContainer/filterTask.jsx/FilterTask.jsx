import { useState } from "react"

function FilterTask({filterTask, setCurrentFilter}) {

  const [ filter, setFilter ] = useState("")

  const handleOptionSelected = (e) => {
    const selectedFilter = e.target.value

    setFilter(selectedFilter)
    setCurrentFilter(selectedFilter)
    filterTask(selectedFilter)
  }

    return (
      <>
        <article className="bg-orange-800  m-3 p-3 flex flex-col sm:w-2/4">
            <label htmlFor="">Seleccionar</label>
            <select 
                onChange={handleOptionSelected}  
                value={filter} 
                name="filter" 
                className="bg-orange-800"
            >
                <option value="">Todas</option>
                <option value="completas">Completas</option>
                <option value="incompletas">Incompletas</option>
            </select>
        </article>
      </>
    )
  }
  
  export default FilterTask
