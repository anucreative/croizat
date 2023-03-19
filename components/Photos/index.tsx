'use client'

import { useState } from 'react'

import Image, { StaticImageData } from 'next/image'

import styles from './styles.module.css'

type Photo = {
  name: string,
  image: StaticImageData
}

export function Photos(props: Photo) {
  // Have to fetch deeply nested images in gallery
  const photos = props.children?.props?.children?.props?.children
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
    const nextImage = (index >= photos.length - 1) ? 0 : index + 1
    setIndex(nextImage)
  }

  //show previous image in lightbox
  const showPrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    const nextImage = (index >= 0) ? photos.length - 1 : index - 1
    setIndex(nextImage)
  }

  return (
    <>
      <section id="photos">
        <ul className={styles.list}>
          {photos.map((node: React.ReactNode, i: number) => {
            // Photo props are nested as well
            const photo = node.props?.children?.props
            return (
              <li className={styles.item} key={photo?.src} >
                <Image className={styles.logo} onClick={() => showImage(i)} src={photo['data-orig-file']} alt={photo.alt} fill />
              </li>
            )
          })}
        </ul>
      </section >
      {isShowing && (
        <div className={styles.lightbox} onClick={hideLightBox}>
          <button className={styles.button} onClick={showPrev}>&lsaquo;</button>
          <div className={styles.image}>
            <Image className={styles.cover} src={photos[index].props?.children?.props?.['data-orig-file']} alt="" fill />
          </div>
          <button className={styles.button} onClick={showNext}>&rsaquo;</button>
        </div>
      )}
    </>
  )
}



