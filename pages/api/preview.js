export default function handler(req, res) {
  const {
    redirect = '/',
    exit = false
  } = req.query


  if (exit) {
    res.clearPreviewData()
  } else {
    res.setPreviewData({})
  }
  res.redirect(307, redirect)
}
