import { createRootRoute } from '@tanstack/react-router'
import { RouteLayout } from '../layouts/root-layout.tsx'

export const Route = createRootRoute({
  component: RouteLayout,
})
