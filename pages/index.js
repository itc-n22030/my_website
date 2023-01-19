import Link from 'next/link'
import Hero from '../components/hero'
import Container from 'components/container'
export default function Home () {
  return (
    <Container>
      <Hero
        title='Welcome to my website'
      />
      <Link legacyBehavior href='about'>
        <a>Sample Website</a>
      </Link>
      <Link legacyBehavior href='page2'>
        <a>Prep Times</a>
      </Link>
      <Link legacyBehavior href='page3'>
        <a>Navigation Bar</a>
      </Link>
      <Link legacyBehavior href='page4'>
        <a>DropDown Menu</a>
      </Link>
      <Link legacyBehavior href='page5'>
        <a>Pop Menu</a>
      </Link>
    </Container>
  )
}
