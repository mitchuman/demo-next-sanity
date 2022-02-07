import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// documents
import human from './documents/human'
import skill from './documents/skill'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    human,
    skill,
  ]),
})
