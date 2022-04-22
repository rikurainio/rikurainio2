import Layout from '../components/layout'
import '../styles/styles.css'
import '../styles/navbar.css'
import '../styles/footer.css'
import '../styles/quote.css'
import '../styles/heading.css'
import '../styles/rows.css'
import '../styles/badge.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}