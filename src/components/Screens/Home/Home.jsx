import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Title from './Title/Title';
import Main from './Main/Main';
import InputForm from './InputForm/InputForm';

function Home() {

  const storedData = JSON.parse(localStorage.getItem('todo')) || [];
  const [todo, setTodo] = useState(storedData);

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem('todo'));
    if (storedTodo) {
      setTodo(storedTodo);
    }
  }, []);


  const addTodo = (value) => {
    if(value){
      setTodo([ ...todo, { text: value}])
    }
  }

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])



  return (
    <div className={styles.home}>
      <Title/>
      <p className={styles.descr__todos}>You can create and delete your todos here</p>
      <Main todo={todo} clearTodo={() => setTodo([])}/>
      <p className={styles.descr__form}>Enter your todo here:</p>
      <InputForm onFormSubmit={addTodo} />
    </div>
  );
}

export default Home;
