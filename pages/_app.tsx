import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

declare var window: any

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if(window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      })
      window.ethereum.on('accountsChanged', () => {
        window.location.reload();
      })
  }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
