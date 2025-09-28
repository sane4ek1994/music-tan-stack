import { Playlists } from '../widgets/playlists/playlists.tsx'
import { useMeQuery } from '../features/auth/api/use-me.tsx'
import { Navigate } from '@tanstack/react-router'
import { AddPlaylistForm } from '../features/playlists/add-playlist/ui/add-playlist-form.tsx'

export const MyPlaylistsPage = () => {
  const { data, isPending } = useMeQuery()

  if (isPending) return <span>Loading....</span>
  if (!data) return <Navigate to="/" replace />

  return (
    <div>
      <h1>My Playlists</h1>
      <hr />
      <AddPlaylistForm />
      <hr />
      <Playlists userId={data.userId} />
    </div>
  )
}
