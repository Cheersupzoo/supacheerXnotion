import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}
const blogUrl = 'https://beta.blog.supacheer.com/feed_json'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch(blogUrl)
  const json = await response.json()
  res.status(200).json(json)
}
