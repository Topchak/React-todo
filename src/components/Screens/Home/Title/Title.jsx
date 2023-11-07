import styles from './Title.module.css'

function Title() {
  return (
    <div className={styles.title}>
      <h1>Write a Todo</h1>
      <p className="highlighted-text"></p>
    </div>
  )
}
export default Title