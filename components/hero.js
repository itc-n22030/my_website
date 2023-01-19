import styles from 'styles/hero.module.css'
export default function Hero ({ title, subtitle, subtitle2 }) {
  return (
    <div>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.subtitle2}>{subtitle2}</p>
      </div>
    </div>
  )
}
