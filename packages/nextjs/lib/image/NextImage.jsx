import { config } from 'utils/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import Img from 'next/image'

const NextImage = ({ image, options, imageBuilder, ...props }) => {
  const imageProps = useNextSanityImage(
    config,
    image,
    {
      ...options,
      imageBuilder,
    }
  )

  return (
    <Img {...imageProps} {...props} />
  )
}

export default NextImage
