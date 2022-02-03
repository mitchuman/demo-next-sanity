import { useRouter } from 'next/router'
import Link from 'next/link'

const PreviewButton = ({ preview }) => {
  const router = useRouter()

  return preview
    ? <Link href={`/api/preview?exit=1`}>Exit preview</Link>
    : <Link href={`/api/preview?redirect=${ router.pathname }`}>Preview</Link>
}

export default PreviewButton
