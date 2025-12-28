import { useBoard } from "../contetxs/BoardContext";
import {useState } from "react";

function BoardItems ({task}){
    //importing the features from the context api
    const {editTask, addTask, removeTask, taskStatus} =useBoard();

    //for edit functionality, we need two states .. one for togglign state of edit and for for holding the temporary text to be put
    const [text, setText] = useState(task.text)
    const [isEdit, setIsEditing] = useState(false)

    return (
        <div
        style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "8px",
                borderRadius: "6px",
            }}
            >
            {/* - readOnly when not editing
            - editable when isEditing = true   */}
        <input
                type="text"
                value={text}
                readOnly={!isEdit}
                onChange={(e) => setText(e.target.value)}
                style={{
                border: isEdit ? "1px solid black" : "none",
                outline: "none",
                width: "60%",
                }}
        />

        {/* - Edit → enables editing
        - Save → updates task text via App.jsx */}
        <button
        onClick={() => {
          if (isEdit) {
            editTask(task.id, text); // updates global state
          }
          setIsEditing(!isEdit);
        }}
        style={{ marginLeft: "6px" }}
      >
        {isEdit ? "Save" : "Edit"}
      </button>        

      <button
        onClick={() => removeTask(task.id)}
        style={{ marginLeft: "6px" }}
      >
        Delete
      </button>

      {task.status === "backlog" && (
        <button
          onClick={() => taskStatus(task.id, "in-progress")}
          style={{ marginLeft: "6px" }}
        >
          In Progress
        </button>
      )}

      {task.status === "in-progress" && (
        <button
          onClick={() => taskStatus(task.id, "done")}
          style={{ marginLeft: "6px" }}
        >
          Done
        </button>
      )}


        </div>
    )
} 

export default BoardItems;