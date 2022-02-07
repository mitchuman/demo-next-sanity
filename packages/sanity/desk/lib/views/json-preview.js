import * as React from 'react'
import S from '@sanity/desk-tool/structure-builder'

const JsonPreview = ({ document }) => (
  <pre style={{ padding: '1rem' }}>
    {JSON.stringify(document.displayed, null, 2)}
  </pre>
)

export default S.view
  .component(JsonPreview)
  .title('JSON')
