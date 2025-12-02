import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts' 
import './App.css'
import { TodoContext } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([]) //all items are kept in todos state
  
  const addTodo = (todo) =>{
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }
  /*
  so how it works is, 
  -id = a new unique id is generated
  - ...todo = adds the id to the new todo item and this together creates a new object
   for ex - {{11, ...todo } ... prev} = {{11, milk, false} ...prev}
  - the ...prev adds this new entry to the actual object holding all the other todos

   **the place where the text added is todoItem.jsx
  */

  const updatedTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? todo : prevTodo
      )
    );
  };

  /*
  Goes through all todos
Finds the one with matching ID
Replaces it with the new todo you give
Leaves all others unchanged
  */
  

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo)=>todo.id !== id))
  }
  /*
  Loop through all todos
  Skip the one with matching ID
  Keep all others
  Update state with the new list
  UI refreshes → deleted item disappears
  */

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }
  /*
  “Find the checkbox with roll number id.
  If it was ticked, untick it.
  If it was unticked, tick it.”
  */

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])
  //it runs only once due to depend
  //localStorage → JSON.parse → setTodos

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
//this converts JS to string then saves it to localStorage


  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, toggleComplete, updatedTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=> (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo = {todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
