import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //we have to use let rather than const
  let [counter, yashCounter] = useState(5)//HOOK

  //let counter = 5, the above line we using hook type shit, setCounter is name 

  function addCount(){
    if(counter < 20){
      counter+= 1;
    }
    else{
      console.log("Cant go above 20");
    }
    
    yashCounter(counter) // yashCounter is like funtion, and we pass it like that
    console.log("value", counter);
  }

  function removeValue(){
    counter-=1;
    if(counter > 0){
      yashCounter(counter)
    }
    else{
      console.log("Counter cannot go below 0");
    }
    
  }
  return (
    
    <>
      <h1>Lecture 5</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addCount
      }>Add value</button>
      <br/>
      <button onClick={removeValue}>Subtract value</button>
      <p>anotherDisplay: {counter}</p>
    </>
  )
}

export default App
