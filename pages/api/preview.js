export default function handler(req, res) {
  const {
    redirect = '/',
    exit = false,
    secret
  } = req.query

  if (exit) {
    res.clearPreviewData()
  }

  else {
    if (!secret) {
      return res.status(401).json({ message: 'Missing secret' })
    }

    if (secret !== process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET) {
      return res.status(401).json({ message: 'Invalid secret' })
    }

    res.setPreviewData({})
  }

  res.writeHead(307, { Location: redirect })

  return res.end()
}
