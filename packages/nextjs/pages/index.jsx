import { client } from 'lib/sanity'
import { dev } from 'lib/env'
import PreviewButton from 'components/PreviewButton'

const IndexPg = ({ humans, preview }) => {
  return <>
    <h1>Home</h1>

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

    {!!dev && <PreviewButton preview={preview} />}
  </>
}

export default IndexPg

export async function getStaticProps({ preview = false }) {
  const humans = await client(preview).fetch(`
    *[_type == "human"] | order(name asc) {
      name,
      skills[]->{name}
    }
  `)

  return {
    props: {
      humans,
      preview,
    }
  }
}
