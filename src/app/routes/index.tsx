import { createFileRoute } from '@tanstack/react-router'
import PlayListsPage from '../pages/play-lists-page.tsx'

export const Route = createFileRoute('/')({
  component: PlayListsPage,
})
