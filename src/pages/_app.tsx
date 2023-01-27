import '@/styles/globals.css'
import '@/components/MoneyCard/styles.css'
import '@/pages/budget/styles.css'
import type { AppProps } from 'next/app'
import { wrapper } from '@/redux/store'
export function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


export default wrapper.withRedux(App);