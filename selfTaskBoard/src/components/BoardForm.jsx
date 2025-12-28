import { useState } from "react";
import { useBoard } from "../contetxs/BoardContext";

function boardForm() {

    const [input, setInput] = useState("")
    const addTask = {addTask}

    const eventHandler = (e) =>{
        e.preveneDefault();

        addTask(input)
        setInput("")

    }

    return(
        <form>
            <input
            type="text"
            placeholder="Enter Task .."
            value={input}
            onChange={(e)=> e.setInput(e.target.value)}
            >
            </input>
            <button type="submit"> Add</button>
        </form>
    )
}

export default boardForm

//this takes the input, rather than cooking it up in app.jsx, wwe prefer to do it here