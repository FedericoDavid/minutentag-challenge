import type { AppProps } from 'next/app'
import { Noto_Sans } from 'next/font/google'

import '@/styles/globals.css'

const roboto = Noto_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
