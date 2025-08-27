import { Link } from '@tanstack/react-router'
import styles from './header.module.css'
import type { ReactNode } from 'react'

type Props = {
  renderAccountBar: () => ReactNode
}

export const Header = ({ renderAccountBar }: Props) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.linksBlock}>
        <Link to="/">Playlists</Link>
        <Link to="/my-playlists">My playlists</Link>
        <Link to="/oauth/callback">TEMP TANSTACK OAUTH</Link>
      </div>

      <div>{renderAccountBar()}</div>
    </div>
  </header>
)
