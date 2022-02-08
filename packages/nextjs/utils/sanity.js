import { dev } from './env'
import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2020-01-01',
  useCdn: !dev,
}

export const client = (preview = dev) => !preview
  ? sanityClient(config)
  : sanityClient({
    ...config,
    useCdn: false,
    token: process.env.SANITY_TOKEN,
  })

export function processData(data, preview) {
  if (preview) {
    let draft_ids = data
      .filter(({ _id }) => _id?.startsWith('drafts.'))
      .map(({ _id }) => _id.replace('drafts.', ''))

    return data.filter(({ _id }) => !draft_ids.includes(_id))
  }

  return data
}

export const urlFor = image => ImageUrlBuilder(config).image(image)
