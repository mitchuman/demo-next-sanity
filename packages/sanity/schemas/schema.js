import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import page from './documents/page'
import human from './documents/human'
import skill from './documents/skill'

// objects
import seo from './objects/seo'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // documents
    page,
    human,
    skill,

    // objects
    seo,
  ]),
})
