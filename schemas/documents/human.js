export default {
  name: 'human',
  title: 'Human',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', },
    {
      name: 'skills',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'skill' }],
        },
      ],
    },
  ],
}
