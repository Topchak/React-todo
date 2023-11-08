import { useState,useRef, useEffect} from 'react';

import {BsTrash2 } from 'react-icons/bs'
import styles from "./TodoItem.module.css";
function Todo({text,id}) {

  const [isDone, setIsDone] = useState(false)
  const textRef = useRef()


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
      <div className={styles.text__wrapper} >
      <button ref={textRef} onClick={done} className={styles.text}>{text}</button>
      </div>
      <div className={styles.button__wrapper}>
        <button className={styles.button}><BsTrash2/></button>
      </div>
    </div>
  )
}
export default Todo