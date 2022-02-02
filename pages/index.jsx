import { client } from 'lib/sanity'

const IndexPg = ({ humans }) => {
  return <>
    <h1>Home</h1>

    <ul>
      {humans?.map(human => (
        <li>{human.name}</li>
      ))}
    </ul>
  </>
}

export default IndexPg

export async function getStaticProps() {
  const humans = await client.fetch(`*[_type == "human"]`)

  return {
    props: {
      humans,
    }
  }
}
