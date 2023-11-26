import React from 'react'

import { Parser } from 'html-to-react'

import { Banner } from '../components/Banner'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Map } from '../components/Map'
import { Partners } from '../components/Partners'
import { Photos } from '../components/Photos'
import { Posts } from '../components/Posts'


async function getHome() {
  const res = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/gymnasecroizat.wordpress.com/posts/slug:home')
  return await res.json()
}

async function getPosts() {
  const res = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/gymnasecroizat.wordpress.com/posts')
  return await res.json()
}

const parser = new Parser()

const COMPONENTS = {
  map: Map,
  news: Posts,
  photos: Photos,
}

type ComponentKey = keyof typeof COMPONENTS

export default async function Page() {
  const [home, posts] = await Promise.all([getHome(), getPosts()])

  // Wordpress content comes as a big string so we convert to React elements
  const elements = parser.parse(home.content.replace(/\n/g, ''))

  return (
    <>
      <Header />
      <Banner>
        <video autoPlay loop muted playsInline>
          <source src="./header-video.mp4" type="video/mp4" />
        </video>
      </Banner>
      <section className='body'>
        {elements.map((child: React.ReactElement) => {
          const key: ComponentKey = child.props.id

          // We want to replace placeholders with actual components
          const Component = COMPONENTS[key]
          if (Component) {
            if (key === 'news') {
              return null
            }
            {/* @ts-expect-error Server Component */ }
            return <Component key={key} posts={key === 'news' ? posts.posts : undefined}>{child}</Component>
          }

          return React.cloneElement(child, { ...child.props, key });
        })}
        <Partners />
        <Contact />
        <Footer />
      </section>
    </>
  )
}
