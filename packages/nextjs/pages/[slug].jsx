import { client, processData } from 'utils/sanity'
import SEO from 'lib/SEO'

const Page = ({ page }) => <>
  <SEO {...page.seo} />

  <h1>{page.title}</h1>
  <p>{page.seo.description}</p>

  <p>Go back <a href="/">home</a>.</p>
</>

export default Page

export async function getStaticPaths() {
  const pages = await client(true).fetch(`*[_type == "page"] | order(title asc)`)

  return {
    paths: pages.map(pages => ({ params: { slug: pages.seo.slug.current } })),
    fallback: false,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const page = await client(preview).fetch(`*[_type == "page" && seo.slug.current == $slug]`, { slug: params.slug })

  return {
    props: {
      page: processData(page, preview)[0],
      preview,
    }
  }
}
