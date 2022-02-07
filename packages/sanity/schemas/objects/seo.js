export default {
  name: 'seo',
  title: 'Seo',
  type: 'object',
  options: { collapsible: true, collapsed: false, },
  fields: [
    {
      name: 'title',
      title: 'Meta title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Meta description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => doc.title || doc.seo.title,
      }
    },
  ],
}
