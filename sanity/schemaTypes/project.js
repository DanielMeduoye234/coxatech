export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'image', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'link', title: 'Project Link', type: 'url' },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }]
    }
  ]
}
