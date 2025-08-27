import { useQuery } from '@tanstack/react-query'
import { client } from '../../shared/api/client.ts'

export const Playlists = () => {
  const query = useQuery({
    queryKey: ['playlists'],
    queryFn: () => client.GET('/playlists'),
  })

  console.log('Status: ' + query.status)
  console.log('fetchStatus: ' + query.fetchStatus)

  if (query.isPending) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <ul>
        {query.isFetching ? '🕧' : ''}
        {query.data?.data?.data.map(playlist => (
          <li key={playlist.id}>{playlist.attributes.title}</li>
        ))}
      </ul>
    </div>
  )
}
