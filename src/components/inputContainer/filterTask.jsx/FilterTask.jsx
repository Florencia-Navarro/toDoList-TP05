import { useState } from "react"

function FilterTask({filterTask}) {

  const [ filter, setFilter ] = useState("")

  const handleOptionSelected = (e) => {
    const selectedFilter = e.target.value
    setFilter(selectedFilter)
  }

    return (
      <>
        <article className="bg-orange-800  m-3 p-3 flex flex-col sm:w-2/4">
            <label htmlFor="">Seleccionar</label>
            <select onChange={(e) => {handleOptionSelected(e)
               filterTask(filter) }}  value={filter} name="" id="" className="bg-orange-800">
                <option value="">Todas</option>
                <option value="completas">Completas</option>
                <option value="incompletas">Incompletas</option>
            </select>
        </article>
      </>
    )
  }
  
  export default FilterTask
