const Img = ({ src, alt = '', ...props }) => {
  // override default transformations if `.url()` is used
  src = typeof src === 'string'
    ? src
    : src.auto('format').url()

  // add width and height attr
  const { w, h } = src.match(/(?<w>\d+)x(?<h>\d+)/)?.groups
  const params = new URLSearchParams(new URL(src).search)
  let width = params.get`w` || Math.round(w / h * params.get(`h`)) || w
  let height = params.get`h` || Math.round(h / w * params.get(`w`)) || h

  // TODO: add srcset

  return (
    <img src={src} alt={alt} width={width} height={height} loading="lazy" {...props} />
  )
}

export default Img
