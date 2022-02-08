import { client, processData, urlFor } from 'utils/sanity'
import SanityImage from 'lib/image/SanityImage'
import NextImage from 'lib/image/NextImage'
import newtab from 'utils/newtab'

const TestPg = ({ data }) => <>
  <h1>{data.title}</h1>

  <h2><a href="https://www.sanity.io/docs/image-url" {...newtab}>@sanity/image-url</a></h2>
  <ul>
    <li>can add transformations (<code>width()</code>, <code>height()</code>, etc)</li>
    <li>no <code>srcset</code>, unless manually implemented</li>
  </ul>
  <figure className="flex flex-wrap">
    {data.images?.map((image, key) => (
      <SanityImage src={urlFor(image).width(200)} key={key} />
    ))}
  </figure>

  <h2><a href="https://www.sanity.io/plugins/next-sanity-image" {...newtab}>next-sanity-image</a></h2>
  <ul>
    <li>includes <code>srcset</code></li>
    <li>Need to wrap in element with <code>position: relative;</code> in order to set <code>width</code></li>
    <li>Can't set <code>height</code></li>
  </ul>
  <figure className="flex flex-wrap">
    {data.images?.map((image, key) => (
      <div className="relative" key={key}>
        <NextImage image={image} imageBuilder={b => b.width(200)} alt="" />
      </div>
    ))}
  </figure>
</>

export default TestPg

export async function getStaticProps({ preview = false }) {
  const data = await client(preview).fetch(`*[_type == 'test-pg']`)

  return {
    props: {
      data: processData(data)[0],
      preview,
    }
  }
}
