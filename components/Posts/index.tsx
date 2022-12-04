import Link from 'next/link'
import type { WP_REST_API_Post } from 'wp-types';

import { Button } from '../Button'
import { Post } from '../Post';

import styles from './styles.module.css'

type Props = {
  posts: WP_REST_API_Post[]
}

export function Posts({ posts }: Props) {
  return (
    <section>
      <h2>Évènements</h2>
      <ul className={styles.list}>
        {posts.map(post => <Post post={post} />)}
      </ul>
      <Button as={Link} href="/news">Voir toutes les nouvelles</Button>
    </section>
  );
}


