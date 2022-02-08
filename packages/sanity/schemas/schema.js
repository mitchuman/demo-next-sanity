import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import page from './documents/page'
import testPg from './documents/test-pg'
import human from './documents/human'
import skill from './documents/skill'

// objects
import seo from './objects/seo'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // documents
    page,
    testPg,
    human,
    skill,

    // objects
    seo,
  ]),
})
