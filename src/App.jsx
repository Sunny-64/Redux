import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  return (
    <>
      <AddTask />
      <Tasks />
    </>
  )
}

export default App
