function FilterTask() {

    return (
      <>
        <article className="bg-orange-800  m-3 p-3 flex flex-col sm:w-2/4">
            <label htmlFor="">Seleccionar</label>
            <select name="" id="" className="bg-orange-800">
                <option value="">Todas</option>
                <option value="">Completas</option>
                <option value="">Incompletas</option>
            </select>
        </article>
      </>
    )
  }
  
  export default FilterTask
