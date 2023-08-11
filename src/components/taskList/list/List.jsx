import { useState } from "react"
import { FaRegTrashAlt, FaCheck } from "react-icons/fa"


function List({taskList, deleteTask, handleStatus, filteredTasks}) {
 
    console.log(filteredTasks)
    const tasksToRender = filteredTasks.length > 0 ? filteredTasks : taskList

    return(

        <ul>
            {
                tasksToRender.map((task) =>
                 <li key={task.id} className="bg-orange-800 flex justify-between my-2">
                        <h5 className={task.completed ? "p-2 my-2 line-through" : "p-2 my-2"} >{task.taskName}</h5>
                        <article>
                            <button onClick={() => handleStatus(task.id)} className={task.completed ? "bg-green-600 border-[1px] border-cyan-950 p-2 m-2" : "bg-gray-900 border-[1px] border-cyan-950 p-2 m-2 hover:bg-green-600"} >
                                <FaCheck />
                            </button>
                            <button onClick={() => deleteTask(task.id)} className="bg-gray-900 border-[1px] border-cyan-950 p-2 m-2 hover:bg-red-600">
                                <FaRegTrashAlt />
                            </button>
                        </article>
                            </li>
                )
            }
            
        </ul>
    )
}

export default List