export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    { name: 'title', type: 'string', },
    { name: 'seo', title: 'SEO', type: 'seo', group: 'seo' },
  ],
}
