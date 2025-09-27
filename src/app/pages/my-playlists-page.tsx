import { Playlists } from '../features/playlists.tsx'
import { useMeQuery } from '../features/auth/api/use-me.tsx'
import { Navigate } from '@tanstack/react-router'

export const MyPlaylistsPage = () => {
  const { data, isPending } = useMeQuery()

  if (isPending) return <span>Loading....</span>
  if (!data) return <Navigate to="/" replace />

  return (
    <div>
      <h1>My Playlists</h1>
      <Playlists userId={data.userId} />
    </div>
  )
}
