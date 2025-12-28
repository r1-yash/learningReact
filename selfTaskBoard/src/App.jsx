import { useState, useEffect } from 'react'
import { BoardProvider } from "./context";
import BoardForm from "./components/BoardForm";
import BoardItems from "./components/BoardItems";
import './App.css'

function App() {

  // global task array
  const [task, setTask] = useState([])

  //function to add task with id, text, status
  //NOTE: input is now coming from BoardForm, so text is passed as argument
  const addTask = (text) => {
    const newTask = {
      id: Date.now().toString(),
      text: text,
      status: "backlog"
    }
    setTask(prev => [...prev, newTask]);
  }

  //STAGE 4, the provider for logic behind features is here 
  //we will be doing edit, delete,and change task status in the following steps
    
  const editTask = (id, changedTask) =>{
    setTask((prev)=>
      prev.map((findId) => {
        if(findId.id === id){
          return {
            ...findId,
            text: changedTask 
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
    setTask((prev) =>
      prev.map((findId)=> {
        if(findId.id === id){
          return {
            ...findId,
            status: newStatus
          }
        }
        return findId
      })
    )
  }

  //first useEffect to load it once, without dependency
  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("task"))

    if(tasks && tasks.length > 0){
      setTask(tasks)
    }
  }, [])

  //it is for again n again, and dependency array 
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task))
  }, [task])

  return (
    <BoardProvider
      value={{
        task,
        addTask,
        editTask,
        removeTask,
        taskStatus: updateStatus,
      }}
    >
      <h1>Task board</h1>

      <BoardForm />

      {task.map((t) => (
        <BoardItems key={t.id} task={t} />
      ))}
    </BoardProvider>
  )
}

export default App
