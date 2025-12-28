import { useState } from "react";
import { useBoard } from "../context";

function BoardForm() {
  const [input, setInput] = useState("");
  const { addTask } = useBoard();

  const eventHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    addTask(input);
    setInput("");
  };

  return (
    <form onSubmit={eventHandler}>
      <input
        type="text"
        placeholder="Enter Task.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default BoardForm;


//this takes the input, rather than cooking it up in app.jsx, wwe prefer to do it here