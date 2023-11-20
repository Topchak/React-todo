import {useState, useEffect} from 'react'
import styles from './Main.module.css'
import TodoItem from '../TodoItem/TodoItem'

function Main({todo}) {
  const [empty, setEmpty] = useState(true)

  useEffect(() => {
    if (todo.length === 0) {
      setEmpty(true)
    } else {
      setEmpty(false)
    }
  }, [todo])
  const element = todo.map((item, index) => {
    return <TodoItem key={index} text={item.text} id={index}/>
  })

  return (
    <div className={styles.main}>
      {
      empty ? <span>Here will be your todos</span> : element
      }
    </div>
  )
}
export default Main