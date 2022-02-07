import S from '@sanity/desk-tool/structure-builder'
import IFrame from 'sanity-plugin-iframe-pane'
import resolveUrl from '../../resolve-url'

export default S.view
  .component(IFrame)
  .options({
    url: doc => resolveUrl(doc),
    reload: {
      button: true,
      revision: true,
    }
  })
  .title('Preview')
