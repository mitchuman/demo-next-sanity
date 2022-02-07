import sanityClient from '@sanity/client'
import { dev } from './env'

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: '2020-01-01',
  useCdn: !dev,
}

export const client = preview => preview
  ? sanityClient(config)
  : sanityClient({
    ...config,
    useCdn: false,
    token: process.env.SANITY_TOKEN,
  })
