import { client, processData } from 'utils/sanity'
import SEO from 'lib/SEO'

const IndexPg = ({ pages, humans }) => <>
  <SEO />

  <h1>Home</h1>

  <section>
    <h2>List of Pages:</h2>
    <ul>
      {pages?.map((page, key) => (
        <li key={key}>
          <a href={`/${page.seo.slug.current}`}>{page.title}</a>
        </li>
      ))}
    </ul>
  </section>

  <section>
    <h2>List of Humans:</h2>
    <ul>
      {humans?.map((human, i) => (
        <li key={i}>
          {human.name}
          {!!human.skills?.length && (
            <ul>
              {human.skills.map(((skill, j) => (
                <li key={j}>{skill.name}</li>
              )))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </section>
</>

export default IndexPg

export async function getStaticProps({ preview = false }) {
  const pages = await client(preview).fetch(`*[_type == "page"] | order(title asc)`)
  const humans = await client(preview).fetch(`*[_type == "human"] | order(name asc) { ..., skills[]->{name} }`)

  return {
    props: {
      pages: processData(pages, preview),
      humans: processData(humans, preview),
      preview,
    }
  }
}
