import { Header } from '../../components/Header'
import { Posts } from '../../components/Posts'

async function getPosts() {
  const res = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/gymnasecroizat.wordpress.com/posts')
  return await res.json()
}


export default async function Page() {
  const posts = await getPosts()

  return (
    <>
      <Header />
      <section className='body'>
        <Posts posts={posts.posts} />
      </section>
    </>)

}
