import { useMutation, useQueryClient } from '@tanstack/react-query'
import { client } from '../../../../shared/api/client.ts'

export const useLogoutMutation = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await client.POST('/auth/logout', {
        body: {
          refreshToken: localStorage.getItem('music-fun-refresh-token')!
        }
      })
      return response.data
    },
    onSuccess: () => {
      localStorage.removeItem('music-fun-refresh-token')
      localStorage.removeItem('music-fun-access-token')
      queryClient.resetQueries({
        queryKey: ['auth', 'me']
      })
    }
  })

  return mutation
}
