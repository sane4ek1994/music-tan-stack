import { useQuery } from '@tanstack/react-query'
import { client } from '../../shared/api/client.ts'
import { Pagination } from '../../shared/ui/pagination/pagination.tsx'
import { useState } from 'react'

type Props = {
  userId?: string
}

export const Playlists = ({ userId }: Props) => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  const query = useQuery({
    queryKey: ['playlists', { page, search, userId }],
    queryFn: async ({ signal }) => {
      const response = await client.GET('/playlists', {
        params: {
          query: {
            pageNumber: page,
            search,
            userId
          }
        },
        signal
      })
      if (response.error) {
        throw (response as unknown as { error: { message: string } }).error
      }
      return response.data
    }
  })

  console.log('Status: ' + query.status)
  console.log('fetchStatus: ' + query.fetchStatus)

  if (query.isPending) {
    return <div>Loading...</div>
  }

  if (query.isError) {
    return <div>Error: {JSON.stringify(query.error.message)}</div>
  }

  return (
    <div>
      <div>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
        />
      </div>
      <hr />
      <Pagination
        pagesCount={query.data.meta.pagesCount}
        currentPage={page}
        onChangePageNumber={setPage}
        isFetching={query.isFetching}
      />
      <ul>
        {query.isFetching ? '🕧' : ''}
        {query.data.data.map(playlist => (
          <li key={playlist.id}>{playlist.attributes.title}</li>
        ))}
      </ul>
    </div>
  )
}
