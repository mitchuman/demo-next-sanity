import PreviewButton from 'lib/PreviewButton'
import 'styles/app.css'

const App = ({ Component, pageProps }) => <>
  <Component {...pageProps} />
  <PreviewButton preview={pageProps.preview} />
</>

export default App
