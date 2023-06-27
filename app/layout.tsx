import { ReactNode } from 'react'

import { Montserrat } from '@next/font/google'

import './global.css'

const baseFont = Montserrat({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font--work-sans',
});


type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={baseFont.className}>
      <body>{children}</body>
    </html>
  );
}
