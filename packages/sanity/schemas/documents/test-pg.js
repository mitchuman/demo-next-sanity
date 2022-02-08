export default {
  name: 'test-pg',
  title: 'Test page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    { name: 'title', type: 'string', },
    {
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    },
  ],
}
