import { useContext, createContext, useState, useEffect, useRef } from "react";


export const ContextTodoItem = createContext();

export const ContextTodoItemProvider = ({ children }) => {



  return (
    <ContextTodoItem.Provider value={{ }}>
      {children}
    </ContextTodoItem.Provider>
  )
}


export const useTodoItem = () => {
  return useContext(ContextTodoItem);
}