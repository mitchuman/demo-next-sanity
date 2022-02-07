import Head from 'next/head'

const defaultTitle = 'demo-nextjs-sanity'

const SEO = ({ title, description }) => (
  <Head>
    <title>
      {title
        ? `${ title } | ${ defaultTitle }`
        : defaultTitle
      }
    </title>

    <meta name="description" content={description} />
  </Head>
)

export default SEO
