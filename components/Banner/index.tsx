import React from 'react'

import styles from './styles.module.css'

export function Banner({ children }: { children: React.ReactNode }) {
  return (
    <div id='banner' className={styles.banner}>
      {children}
    </div>
  )
}