import S from '@sanity/desk-tool/structure-builder'
import IFrame from 'sanity-plugin-iframe-pane'
import resolveUrl from '../../resolve-url'

export default (parent) => S.view
  .component(IFrame)
  .options({
    url: doc => resolveUrl(doc, parent),
    reload: {
      button: true,
      revision: true,
    }
  })
  .title('Preview')
