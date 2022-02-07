import { useRouter } from 'next/router'
import { dev } from 'utils/env'
import Link from 'next/link'

const PreviewButton = ({ preview }) => {
  const router = useRouter()

  const params = new URLSearchParams()
    params.append('redirect', router.asPath)
    params.append('secret', process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET)

  if (preview) {
    params.append('exit', 1)
  }

  if (!dev) return null

  return (
    <Link href={`/api/preview?${ params.toString() }`}>
      {preview ? 'Exit preview' : 'Preview'}
    </Link>
  )
}

export default PreviewButton
