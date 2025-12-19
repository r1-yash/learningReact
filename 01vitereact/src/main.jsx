import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App'

function MyApp(){
    return (
        <div>
            <h1>My app</h1>
        </div>
    )
}

// const reactElemrnt  = {
//     type: 'a',
//     props: {
//         href: 'https://google/com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }
//so my reactElement isnt working coz in customReact we wrote a custom render code itself

//but here our anotherElement followed their convention, so it worked 
const anotherElement = (
    <a href = "https://google.com">Visit Google</a>
)

const reactElement = React.createElement(
    //first parameter is tag
    'a',
    //second is object
    {href: 'https://google.com', target: '_blank' },
    'Click me to visit Google'
)
createRoot(document.getElementById('root')).render(
   <App />
   //anotherElement
   //reactElement
)
