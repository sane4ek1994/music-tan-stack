import { useQuery } from '@tanstack/react-query'
import { LoginButton } from './login-button.tsx'
import { client } from '../../../../shared/api/client.ts'

export const AccountBar = () => {
  const query = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: async () => {
      const clientResponse = await client.GET('/auth/me')
      return clientResponse.data
    }
  })

  console.log(query)

  return (
    <div>
      {query.data && <LoginButton />}
      {/*{!query.data && <CurrentUser />}*/}
    </div>
  )
}
