import { useLogoutMutation } from '../api/use-logout-mutation.tsx'

export const LogoutButton = () => {
  const mutation = useLogoutMutation()

  const handleLoginClick = () => {
    mutation.mutate()
  }

  return <button onClick={handleLoginClick}>Logout</button>
}
