import { useBoard } from "../contetxs/BoardContext";
import { use, useCallback, useContext, useState } from "react";

function BoardItems (){
    //importing the features from the context api
    const {editTask, addTask, removeTask, taskStatus} =useBoard();

    //for edit functionality, we need two states .. one for togglign state of edit and for for holding the temporary text to be put
    const [text, setText] = useState(task.text)
    const [edit, isTaskEditable] = useState(false)

    



} 