function AddTask({handleChange, task}) {

    return (
      <>
        <article className="bg-orange-800 m-3 p-3 flex flex-col sm:sm:w-2/4">
            <label htmlFor="">Tarea</label>
            <input type="text" placeholder="Ingresa una tarea" value={task} className="bg-orange-800" onChange={handleChange}/>
        </article>
      </>
    )
  }
  
  export default AddTask