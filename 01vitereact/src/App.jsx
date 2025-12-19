import React, { useState } from 'react'
import Chai from "./chai"

function App() {
  const naming = "yoyo"
  const [count, setCount] = useState(0)

  return (
    <>
    <Chai/>
    <h2> so we wrap it into an empty div called fragment and here we see about variable i.e {naming}</h2>
    <h3>jsx allows return of only one, so we giving one itself, it has multiple though</h3>
    </>
    
  )
}

export default App
