import { useState,useRef, useEffect , useContext} from 'react';
import ContextTodoItemProvider from '../../../../Context/ContextTodoItem';

import {BsTrash2 } from 'react-icons/bs'
import styles from "./TodoItem.module.css";
function Todo({text, id}) {

  // const {deleteTodo} = useContext(ContextTodoItemProvider)

  const [isDone, setIsDone] = useState(false)
  const [isDeleted, setIsDeleted] = useState(false)

  const textRef = useRef()

  const deleteTodoItem = (id) =>{
    setIsDeleted(id)
    console.log(id);
  }


  const done = () =>{
    setIsDone(!isDone)
  }

  useEffect(()=>{
    if(isDone){
      textRef.current.style.textDecoration = "line-through"
    }else{
      textRef.current.style.textDecoration = "none"
    }
  },[isDone])

  return (
    <div className={styles.todo} id={id}>
      <div className={styles.text__wrapper}>
      <button ref={textRef} onClick={done} className={styles.text}>{text}</button>
      </div>
      <div className={styles.button__wrapper}>
        <button onClick={(e) => deleteTodoItem(id)} className={styles.button}><BsTrash2/></button>
      </div>
    </div>
  )
}
export default Todo