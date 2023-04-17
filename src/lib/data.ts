import type { Post } from './types'

export const getPosts = async (
  limit: number,
  customFetch: typeof fetch = fetch,
) => {
  const response = await customFetch(
    'http://localhost:8000/api/products/',
  )
  const data = (await response.json()) as Post[]
  return data.filter((x) => x.id <= limit)
}

export const getPostById = async (
  id: number,
  customFetch: typeof fetch = fetch,
): Promise<Post> => {
  const response = await customFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  )
  const data = (await response.json()) as Post
  return data
}
