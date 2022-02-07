import S from '@sanity/desk-tool/structure-builder'
import Iframe from './lib/views/iframe'
import JsonPreview from './lib/views/json-preview'

export const getDefaultDocumentNode = ({ documentId, schemaType }) => {
  return S.document().views([
    S.view.form(),
    ['page', 'human'].includes(schemaType) && Iframe,
    JsonPreview,
  ].filter(Boolean))
}

const AllDocuments = S.documentTypeListItems()
  .filter(item => ![
    // add document types to filter
  ].includes(item.getId()))

export default () =>
  S.list()
    .title('Content')
    .items([
      ...AllDocuments,
    ])
