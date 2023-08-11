import { useState } from 'react'
import './index.css'
import Header from './components/header/Header'
import TasksList from './components/taskList/TasksList'
import Footer from './components/footer/Footer'
import InputContainer from './components/inputContainer/InputContainer'

function App() {
  const [ taskList, setTaskList ] = useState(JSON.parse(localStorage.getItem("taskList")) || [])
  const [filteredTasks, setFilteredTasks] = useState([])
  const [currentFilter, setCurrentFilter] = useState("")

  const handleSubmit = ( tarea) => {

    const newTask = {
      id: crypto.randomUUID(),
      taskName: tarea,
      completed: false
    }

    localStorage.setItem("taskList", JSON.stringify([...taskList, newTask]))
    setTaskList([...taskList, newTask])
  }

  const deleteTask = (id) => {
    const deletedTask = taskList.filter(task => task.id !== id)

    localStorage.setItem("taskList", JSON.stringify(deletedTask))
    setTaskList(deletedTask)  
  }

  const handleStatus = (id) => {
    const changeStatusTask = taskList.map(task => {
      if(task.id ===id){
        return {...task, completed: !task.completed}
      }
      return task
    })

    localStorage.setItem("taskList", JSON.stringify(changeStatusTask))
    setTaskList(changeStatusTask)  
  }

  const filterTask = (filter) => {
    if (filter === "completas") {
      const completedTasks = taskList.filter(task => task.completed)
      setFilteredTasks(completedTasks)
    } else if (filter === "incompletas") {
      const incompletedTasks = taskList.filter(task => !task.completed);
      setFilteredTasks(incompletedTasks)
    } else {
      setFilteredTasks(taskList)
    }
  }
  

  return (
    <section className="flex flex-col text-white bg-gradient-to-r from-gray-900 from-10%  via-cyan-950 via-80% to-orange-700  content-center">
      <Header />
      <InputContainer 
            handleSubmit={handleSubmit} 
            taskList={taskList}  
            filterTask={filterTask} 
            setCurrentFilter={setCurrentFilter}
      />
      <TasksList 
            taskList={currentFilter === "" ? taskList : filteredTasks} 
            deleteTask={deleteTask} 
            handleStatus={handleStatus}  
            filteredTasks={filteredTasks} 
      />
      <Footer />
    </section>
  )
}

export default App


  
