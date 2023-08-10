import { useState } from 'react'
import './index.css'
import Header from './components/header/Header'
import TasksList from './components/taskList/TasksList'
import Footer from './components/footer/Footer'
import InputContainer from './components/inputContainer/InputContainer'

function App() {
  // const [ task, setTask ] = useState("")
  const [ taskList, setTaskList ] = useState(JSON.parse(localStorage.getItem("taskList")) || [])
  // const [error, setError] = useState("")

  // const handleChange = (e) => {
  //   setTask(e.target.value)
  //   setError('')
  // }

  const handleSubmit = ( tarea) => {
    // e.preventDefault()

    const newTask = {
      id: crypto.randomUUID(),
      taskName: tarea,
      completed: false
    }
    localStorage.setItem("taskList", JSON.stringify([...taskList, newTask]))
    setTaskList([...taskList, newTask])
    //setTask("")
    // setError("")
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

  

  return (
    <section className="text-white bg-gradient-to-r from-gray-900 from-10%  via-cyan-950 via-80% to-orange-700 h-screen flex flex-col content-center">
      <Header />
      <InputContainer handleSubmit={handleSubmit} taskList={taskList} /* handleChange={handleChange} task={task} error={error} */ />
      <TasksList taskList={taskList} deleteTask={deleteTask} handleStatus={handleStatus} />
      <Footer />
    </section>
  )
}

export default App


  
