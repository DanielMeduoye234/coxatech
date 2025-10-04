import { StructureBuilder } from 'sanity/structure'

export const structure = (S) =>
  S.list()
    .title('Content')
    .items([
      // Projects
      S.documentTypeListItem('project').title('Projects'),

      // Categories
      S.documentTypeListItem('category').title('Categories'),

      // Graphics
      S.documentTypeListItem('graphic').title('Graphics'),
    ])
