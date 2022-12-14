import Link from 'next/link'
import type { WP_REST_API_Post } from 'wp-types';

import { Button } from '../Button'
import { Post } from '../Post';

import styles from './styles.module.css'

type Props = {
  posts: WP_REST_API_Post[]
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
        {posts.map(post => <Post key={post.id} post={post} />)}
      </ul>
      <Button as={Link} href="/news">Voir toutes les nouvelles</Button>
    </section>
  );
}


