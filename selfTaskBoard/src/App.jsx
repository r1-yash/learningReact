import { useState } from 'react'

import './App.css'
import { use } from 'react'

function App() {
  const [input, setInput] = useState("")
  const [task, setTask] = useState([])

  const addTask = (() => {

    const newTask = {
      id: Date.now.toString(),
      text: input,
      status: "backlog"
    }
    setTask(prev => [...prev, newTask]);
    setInput("");
    console.log(input);

  })

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
      ></button>
    </>
  )
}

export default App
