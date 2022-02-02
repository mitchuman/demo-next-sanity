import { client } from 'lib/sanity'
import Link from 'next/link'
import { useRouter } from 'next/router'

const IndexPg = ({ humans, preview }) => {
  const router = useRouter()

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

    {preview
      ? <Link href={`/api/preview?exit=1`}>Exit preview</Link>
      : <Link href={`/api/preview?redirect=${ router.pathname }`}>Preview</Link>
    }
  </>
}

export default IndexPg

export async function getStaticProps(context) {
  let { preview = false } = context

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
