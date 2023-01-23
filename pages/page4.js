import styles from 'styles/nav3.module.css'
export default function Page4 () {
  return (
    <nav className={styles.title}>
      <h1>Menu</h1>
      <ul className={styles.list}>
        <li>
          <h2>Food</h2>
          <ul className={styles.menu}>
            <li>Pasta</li>
            <li>Pizza</li>
          </ul>
        </li>
        <li>
          <h2>Drink</h2>

          <ul className={styles.menu}>
            <li>Coffee</li>
            <li>Caramel Macchiato</li>
            <li>Matcha Latte</li>
          </ul>
        </li>
        <li>
          <h2>Sweets</h2>
          <ul className={styles.menu}>
            <li>Pan Cake</li>
            <li>Pudding</li>
            <li>Muffin</li>
          </ul>
        </li>
      </ul>
    </nav>

  )
}
