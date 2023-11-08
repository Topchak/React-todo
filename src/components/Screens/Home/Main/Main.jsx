import {useState, useEffect} from 'react'
import styles from './Main.module.css'
import TodoItem from '../TodoItem/TodoItem'

function Main({todo, clearTodo}) {
  const [empty, setEmpty] = useState(false)


  useEffect(() => {
    if (todo.length === 0) {
      setEmpty(true)
    } else {
      setEmpty(false)
    }
  }, [todo])


  const element = todo.map((item,i) => {
    return <TodoItem key={i} text={item.text} id={i}/>
  })

  return (
    <div className={styles.main}>
      <span onClick={clearTodo}  className={styles.clear}>Clear all</span>
      {
      empty ? <span>Here will be your todos</span> : element
      }
    </div>
  )
}
export default Main