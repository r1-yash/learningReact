import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'

function App() {
  const [input, setInput] = useState("")
  const [task, setTask] = useState([])

  const addTask = (() => {

    const newTask = {
      id: Date.now().toString(),
      text: input,
      status: "backlog"
    }
    setTask(prev => [...prev, newTask]);
    setInput("");
    console.log(input);

  })

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("task"))

    if(tasks && tasks.length > 0){
      setTask(tasks)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task))
  }, [task])

  return (
    <>
      <h1>Task board</h1>
      <input
      placeholder='Task'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      ></input>

      <button
      onClick={addTask}
      > Add Task</button>
    </>
  )
}

export default App
