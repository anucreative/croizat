import { ReactNode, ComponentType } from 'react'

import styles from './styles.module.css'

type Props = {
  children: ReactNode
  href: string
  as?: ComponentType
  target?: string
}

export function Button({ href, as: Component = 'a', children, target }: Props) {

  return (
    <Component href={href} className={styles.button} target={target}>{children}</Component>
  )
}