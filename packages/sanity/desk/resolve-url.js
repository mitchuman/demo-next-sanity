export default (doc, parent) => {
  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://human-nextjs.netlify.app'

  const url = new URL(baseUrl)

  const redirect = parent + (doc.seo?.slug.current ?? '')

  url.pathname = '/api/preview'
  url.searchParams.append('redirect', redirect)
  url.searchParams.append('secret', process.env.SANITY_STUDIO_PREVIEW_SECRET)

  return url.toString()
}
