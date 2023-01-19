import Link from 'next/link'

export default function Nav () {
  return (
    <nav>
      <ul>
        <li>
          <Link legacyBehavior href='/'>
            <a />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
