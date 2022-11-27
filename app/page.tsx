import React from 'react'

import { Parser } from 'html-to-react'

import { Header } from '../components/Header'
import { Map } from '../components/Map'

async function getHome() {
  const res = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/gymnasecroizat.wordpress.com/posts/slug:home')
  return await res.json()
}

const components = {
  map: Map,
}

export default async function Page() {
  const data = await getHome()

  // Wordpress content comes as a big string so we convert to React elements
  const parser = new Parser()
  const elements = parser.parse(data.content.replace(/\n/g, ''))

  return (
    <>
      <Header />
      <section className='body'>
        {elements.map((child: React.ReactElement) => {
          const key = child.props.id

          // We want to replace placeholders with actual components
          const Component = components[key]
          if (Component) {
            return <Component key={key}>{child}</Component>
          }

          return React.cloneElement(child, { ...child.props, key });
        })}
      </section>
    </>
  )
}
