import { ReactNode } from 'react'

import styles from './styles.module.css'

type Props = {
  as?: keyof JSX.IntrinsicElements
  children: ReactNode
  disabled?: boolean
  href?: string | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (event: any) => null
  target?: string
  type?: string
  width?: string
}

export function Button({ children, disabled, href, target, type = 'button', width = 'auto', ...rest }: Props) {

  if (type === 'submit' || type === 'button') {
    <button className={`${styles.button} ${styles[width]}`} disabled={disabled} {...rest}>{children}</button>
  }

  return (
    <a className={`${styles.button} ${styles[width]}`} href={href} target={target} {...rest}>{children}</a>
  )
}