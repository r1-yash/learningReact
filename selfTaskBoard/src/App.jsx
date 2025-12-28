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


  //STAGE 4, the provider for logic behind features is here 
  //we will be doing edit, delete,and change task status in the following steps
    
  const editTask = (id, changedTask) =>{
    setTask((prev)=>
    prev.map((findId) => {
      if(findId.id === id){
        return {
          ...findId, text:changedTask 
        }
      }
      return findId
    })
    )
  }
  /*
  For edit task
  React state updates = return new objects, never mutate old ones so how it works ? 
  -it simply says - spread first, override after it and thats what we do here 
  */

  const removeTask = (id) => {
    setTask((prev) => 
    prev.filter((remElement) => {
      return remElement.id !== id;
    })
    )
  }

  const updateStatus = (id, newStatus) => {
    setTask((prev) => prev.map((findId)=> {
      if(findId.id === id){
        return {
          ...findId, status:newStatus
        }
      }
      return findId
    }))
  }


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

    </>
  )
}

export default App
