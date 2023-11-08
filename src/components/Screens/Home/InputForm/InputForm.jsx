import {useState, useRef} from 'react'
import styles from './InputForm.module.css'

function InputForm({onFormSubmit}) {
  const [error, setError] = useState(false)

  const inputRef = useRef();

  const getValue = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    if (inputValue) {
      onFormSubmit(inputValue)
      inputRef.current.value = '';
      setError(false)
    } else {
      setError(true)
    }
  }

  const handleInput =()=>{
    if(error){
      setError(false)
    }
  }

  return (
    <form onSubmit={getValue} className={styles.form__wrapper}>
      <input
        ref={inputRef}
        className={`${styles.input} ${error ? styles.error : ''}`}
        type="text"
        placeholder="Enter your todo"
        defaultValue=""
        onInput={handleInput}/>
      <button className={styles.button}>Add</button>
    </form>
  )
}
export default InputForm