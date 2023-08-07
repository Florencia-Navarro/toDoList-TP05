function AddTaskButton({handleSubmit}) {

    return (
        <article className="w-full flex justify-center">
            <button type="submit" onClick={handleSubmit} className="bg-cyan-900 py-2 px-4 mx-auto my-5 rounded-md">Agregar</button>
        </article>
    )
}

export default AddTaskButton
      

      