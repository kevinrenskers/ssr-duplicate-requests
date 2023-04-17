import { browser } from '$app/environment'
import { QueryClient } from '@tanstack/svelte-query'
import { getPosts } from '$lib/data'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
        staleTime: 60 * 1000,
      },
    },
  })

  await queryClient.prefetchQuery({
    queryKey: ['posts', 10],
    queryFn: () => getPosts(10, fetch),
  })

  return { queryClient }
}
