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

export async function getStaticProps(context) {
  let { preview = false } = context

  // TODO: subscribe to get latest data

  const humans = await client.fetch(`
    *[_type == "human" ${!preview ? `&& !(_id in path('drafts.**'))` : ''}] | order(name asc) {
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
