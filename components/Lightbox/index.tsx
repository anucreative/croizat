'use client'

import { useState } from 'react'

import Image, { StaticImageData } from 'next/image'

import photo12 from '../../public/photos/12.jpg'
import photo2 from '../../public/photos/2.jpg'
import photo21 from '../../public/photos/21.jpg'
import photo3 from '../../public/photos/3.jpg'
import photo33 from '../../public/photos/33.jpg'
import photo43 from '../../public/photos/43.jpg'
import photo73 from '../../public/photos/73.jpg'

import styles from './styles.module.css'

type Photo = {
  name: string,
  image: StaticImageData
}

const PHOTOS: Photo[] = [
  {
    name: 'photo12',
    image: photo12
  },
  {
    name: 'photo2',
    image: photo2
  },
  {
    name: 'photo21',
    image: photo21
  },
  {
    name: 'photo3',
    image: photo3
  },
  {
    name: 'photo33',
    image: photo33
  },
  {
    name: 'photo43',
    image: photo43
  },
  {
    name: 'photo73',
    image: photo73
  },
]

// const PHOTOS = [photo12, photo2, photo21, photo3, photo33, photo43, photo73]

export function Lightbox() {
  const [index, setIndex] = useState(0)
  const [isShowing, setIsShowing] = useState(false)

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (index: number) => {
    setIndex(index)
    setIsShowing(true)
  }

  //hide lightbox
  const hideLightBox = () => {
    setIsShowing(false)
  }

  //show next image in lightbox
  const showNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const nextImage = (index >= PHOTOS.length - 1) ? 0 : index + 1
    setIndex(nextImage)
  }

  //show previous image in lightbox
  const showPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const nextImage = (index >= 0) ? PHOTOS.length - 1 : index - 1
    setIndex(nextImage)
  }

  console.debug({ index, isShowing })

  return (
    <>
      <section id="photos">
        <h2>La salle</h2>
        <ul className={styles.list}>
          {PHOTOS.map((photo, i) => {
            return (
              <li className={styles.item} key={photo.name} >
                <Image className={styles.logo} onClick={() => showImage(i)} src={photo.image} objectFit="cover" alt={photo.name} fill />
              </li>
            )
          })}
        </ul>

      </section >
      {isShowing && (
        <div className={styles.lightbox} onClick={hideLightBox}>
          <button className={styles.button} onClick={showPrev}>&lsaquo;</button>
          <div className={styles.image}>
            <Image src={PHOTOS[index].image} objectFit="cover" alt="" fill />
          </div>
          <button className={styles.button} onClick={showNext}>&rsaquo;</button>
        </div>
      )}
    </>
  )
}



