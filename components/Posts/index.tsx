import Link from 'next/link'

import buttonStyles from '../Button/styles.module.css'
import { Post, PostType } from '../Post';

import styles from './styles.module.css'

type Props = {
  posts: PostType[]
}

async function getPosts() {
  const res = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/gymnasecroizat.wordpress.com/posts')
  return await res.json()
}

export async function Posts({ posts }: Props) {
  if (!posts) {
    posts = await getPosts()
  }

  return (
    <section id="events" className="section">
      <h2>Évènements</h2>
      <ul className={styles.list}>
        {posts.map(post => <Post key={post.slug} post={post} />)}
      </ul>
      <Link className={buttonStyles.button} href="/news">Voir toutes les nouvelles</Link>
    </section>
  );
}


