import { ReactNode } from 'react'

import styles from './styles.module.css'

type Props = {
  as?: keyof JSX.IntrinsicElements
  children: ReactNode
  href?: string
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => null
  target?: string
  width?: string
}

export function Button({ as: Component = 'a', children, href, target, width = 'auto' }: Props) {

  return (
    <Component href={href} className={`${styles.button} ${styles[width]}`} target={target}>{children}</Component>
  )
}