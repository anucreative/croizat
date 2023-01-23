import Image from 'next/image'

import styles from './styles.module.css'

export type PostType = {
  excerpt: string
  featured_image: string
  id: string
  slug: string
  title: string
}

type Props = {
  post: PostType
}

export function Post({ post }: Props) {
  return (
    <li className={styles.card}>
      {post.featured_image && (
        <div className={styles.image}>
          <Image src={post.featured_image} alt={post.slug} fill style={{ objectFit: 'cover' }} />
        </div>
      )}
      <h3 className={styles.title}>
        <a className={styles.link} href={`/news/${post.slug}`}>
          {post.title}
        </a>
      </h3>
      <div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: post.excerpt }} />
    </li>
  )
}


