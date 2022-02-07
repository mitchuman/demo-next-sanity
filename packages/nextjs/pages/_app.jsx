import PreviewButton from 'lib/PreviewButton'

const App = ({ Component, pageProps }) => <>
  <Component {...pageProps} />
  <PreviewButton preview={pageProps.preview} />
</>

export default App
