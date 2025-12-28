import { createContext, useContext } from "react";

export const BoardContext = createContext ({
    tasks: [],
    addTask: () => {},
    editTask: () => {},
    removeTask: () =>{},
    taskStatus: () => {},
})

export const BoardProvider = BoardContext.Provider

export const useBoard = () =>{
    return useContext(BoardContext)
}

//so the stage 1 for context is the js file where we declare every single thing, the feature 
//but there is no logic or anything, purely decleration :-
/*
Stage-1 Context declares the shared API and data shape.
No logic, no state, no side effects.
*/