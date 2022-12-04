import { Parser } from 'html-to-react'

type Props = {
  params: { slug: string }
  searchParams: { id: string }
}

async function getPosts() {
  const res = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/gymnasecroizat.wordpress.com/posts')
  return await res.json()
}

const parser = new Parser()

export default async function Page({ params, searchParams }: Props) {
  const data = await getPosts()

  // Wordpress content comes as a big string so we convert to React elements
  return data.posts.map(post => {

    const elements = parser.parse(post.content.replace(/\n/g, ''))

    return elements
  })
}
