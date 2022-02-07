export default doc => {
  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://human-nextjs.netlify.app'

  const url = new URL(baseUrl)

  url.pathname = '/api/preview'
  url.searchParams.append('redirect', `/${ doc.seo?.slug.current ?? '' }`)
  url.searchParams.append('secret', process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET)

  return url.toString()
}
