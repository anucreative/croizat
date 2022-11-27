import { ReactNode } from 'react'

import { Work_Sans } from '@next/font/google'

import './global.css'

const workSans = Work_Sans({
  weight: ['400', '700'],
  subsets: ["latin"]
});


type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={workSans.className}>
      <body>{children}</body>
    </html>
  );
}
