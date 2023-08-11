import List from "./list/List"

function TasksList({taskList, deleteTask, handleStatus,filteredTasks}) {

    return (
      
      <section className="bg-gray-900 w-9/12  my-3.5 mx-auto rounded-md border-[1px] border-cyan-950 shadow-lg shadow-gray-500/50 max-w-2xl">
        <div className=" m-3.5">
          <List 
              taskList={taskList} 
              deleteTask={deleteTask} 
              handleStatus={handleStatus} 
              filteredTasks={filteredTasks}
          />
        </div>
        { taskList.length < 1 && <div className="text-center p-2 my-4">La lista de tareas está vacía. ¿Por qué no añades algunas tareas?</div> }
      </section>
      
    )
  }
  
  export default TasksList
  