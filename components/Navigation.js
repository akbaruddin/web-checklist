import Link from 'next/link'
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/performance">
        <a>Performance Tips</a>
      </Link>
    </nav>
  )
}