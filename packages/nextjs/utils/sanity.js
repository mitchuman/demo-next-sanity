import sanityClient from '@sanity/client'
import { dev } from './env'

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
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

    let filtered_data = data.filter(({ _id }) => !draft_ids.includes(_id))

    return filtered_data
  }

  return data
}
