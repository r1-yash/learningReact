import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'

//two usestates to simply just take input and make an array of tasks
function App() {
  const [input, setInput] = useState("")
  const [task, setTask] = useState([])

  //function to add task with id, input, status .. then it adds it into the task array and resets the setInput
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

  //first useEffect to load it once, without dependancy

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("task"))

    if(tasks && tasks.length > 0){
      setTask(tasks)
    }
  }, [])

  //it is for again n again, and dependancy array 
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
