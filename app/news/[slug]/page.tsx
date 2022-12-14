
import React from 'react'

import { Parser } from 'html-to-react'
import Image from 'next/image'

import { Banner } from '../../../components/Banner'
import { Header } from '../../../components/Header'

import styles from './styles.module.css'

type Props = {
  params: { slug: string }
  searchParams: { id: string }
}

async function getPost(slug: string) {
  const res = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/gymnasecroizat.wordpress.com/posts/slug:${slug}`)
  return await res.json()
}

const parser = new Parser()


export default async function Page({ params }: Props) {
  const post = await getPost(params.slug)
  console.debug('getPost', post)

  const { content, excerpt, post_thumbnail, title } = post

  // Wordpress content comes as a big string so we convert to React elements
  const elements = parser.parse(content.replace(/\n/g, ''))
  const heading = parser.parse(title)
  const lead = parser.parse(excerpt)

  return (<>
    <Header />
    {post_thumbnail && (
      <Banner>
        <Image src={post_thumbnail.URL} alt={title} fill objectFit="cover" />
        <section className={styles.masthead}>
          <h1 className={styles.title}>{heading}</h1>
          {excerpt && <div className={styles.excerpt}>{lead}</div>}
        </section>
      </Banner>
    )}
    <section className={styles.content}>
      {elements}
    </section>
  </>)

}
