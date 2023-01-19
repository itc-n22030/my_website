import styles from 'styles/sample2.module.css'
export default function Hero ({ title, subtitle, h3, h4, p1, p2 }) {
  return (
    <div>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <h2 className={styles.h3}>{h3}</h2>
	  <p className={styles.p1}>{p1}</p>
        <h2 className={styles.h4}>{h4}</h2>
        <p className={styles.p2}>{p2}</p>
      </div>
    </div>
  )
}
