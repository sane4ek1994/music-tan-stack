import { LoginButton } from './login-button.tsx'
import { useMeQuery } from '../api/use-me.tsx'
import styles from './account-bar.module.css'
import { CurrentUser } from './current-user/current-user.tsx'

export const AccountBar = () => {
  const query = useMeQuery()

  if (query.isPending) return <span>loading...</span>

  return (
    <div className={styles.meInfoContainer}>
      {!query.data && <LoginButton />}
      {query.data && <CurrentUser />}
    </div>
  )
}
