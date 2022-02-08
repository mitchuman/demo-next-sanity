import S from '@sanity/desk-tool/structure-builder'
import iframeView from './lib/views/iframe-view'
import jsonPreview from './lib/views/json-preview'

export const getDefaultDocumentNode = ({ documentId, schemaType }) => {
  return S.document().views([
    S.view.form(),
    schemaType === 'human' && iframeView('/'),
    schemaType === 'page' && iframeView('/pages'),
    jsonPreview,
  ].filter(Boolean))
}

const testPg = S.listItem()
  .title('Test page')
  .child(
    S.document()
      .schemaType('test-pg')
      .documentId('test-pg')
      .views([
        S.view.form(),
        iframeView('/'),
        jsonPreview
      ])
  )

const AllDocuments = S.documentTypeListItems()
  .filter(item => !['test-pg'].includes(item.getId()))

export default () =>
  S.list()
    .title('Content')
    .items([
      testPg,
      ...AllDocuments,
    ])
