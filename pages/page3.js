import Link from 'next/link'
import styles from 'styles/nav2.module.css'
export default function Page3 () {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link legacyBehavior href='/'>
            <a>TOP</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='/'>
            <a>ABOUT</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='/'>
            <a>NEWS</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href='/'>
	     <a>LINK</a>
          </Link>
        </li>

  </ul>
    </nav>

  )
}
