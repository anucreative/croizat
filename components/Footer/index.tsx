'use client'


import Image from 'next/image'

import Mountain from '../../public/montagne.png'

import styles from './styles.module.css'


export function Footer() {


  return (
    <>
      <footer className={styles.footer}>
        <Image className={styles.mountains} src={Mountain} alt="" fill />
      </footer>
    </>
  )
}