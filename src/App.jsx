import { useState } from 'react'
import './index.css'
import Header from './components/header/Header'
import TasksList from './components/taskList/TasksList'
import Footer from './components/footer/Footer'
import InputContainer from './components/inputContainer/InputContainer'

function App() {

  return (
    <section className="text-white bg-gradient-to-r from-gray-900 from-10%  via-cyan-950 via-80% to-orange-700 h-screen flex flex-col content-center">
      <Header />
      <InputContainer />
      <TasksList />
      <Footer />
    </section>
  )
}

export default App
