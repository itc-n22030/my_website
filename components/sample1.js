import styles from 'styles/about.module.css'
export default function Hero ({ title }) {
  return (
    <div>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  )
}
