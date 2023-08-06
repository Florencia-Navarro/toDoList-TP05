import AddTask from "./addTask/AddTask"
import AddTaskButton from "./addTaskButton/AddTaskButton"
import FilterTask from "./filterTask.jsx/FilterTask"

function InputContainer() {

    return (
        <section className="bg-gray-900 w-9/12  my-3.5 mx-auto rounded-md border-[1px] border-cyan-950 shadow-lg shadow-gray-500/50 max-w-2xl">
            <article>
                <form action="">
                    <article className="sm:flex sm:flex-row">
                        <AddTask />
                        <FilterTask />
                    </article>
                        <AddTaskButton />
                </form>
            </article>
        </section>
    
    )
  }
  
  export default InputContainer
                    
      
      