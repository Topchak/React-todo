import {useRef} from 'react'
import styles from './InputForm.module.css'

function InputForm({onFormSubmit}) {
  const inputRef = useRef();

const getValue = (e) =>{
  e.preventDefault();
  const inputValue = inputRef.current.value;
  if(inputValue){
    onFormSubmit(inputValue)
    inputRef.current.value = '';
  }else{
    return alert("Please enter your todo")
  }
   
}

  return (
    <form onSubmit={getValue} className={styles.form__wrapper}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Enter your todo"
        defaultValue=""
      />
      <button className={styles.button}>Add</button>
    </form>
  )
}
export default InputForm