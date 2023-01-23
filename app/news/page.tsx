import { Banner } from '../../components/Banner'
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
      <Banner>
        <video autoPlay loop muted playsInline>
          <source src="./sophia.mp4" type="video/mp4" />
        </video>
      </Banner>
      <section className='body'>
        {/* @ts-expect-error Server Component */}
        <Posts posts={posts.posts} />
      </section>
    </>)

}
