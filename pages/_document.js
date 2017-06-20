import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
     <html>
       <Head>
         <link rel='stylesheet' href="../static/css/main.css"/>
       </Head>
       <body>
         {this.props.customValue}
         <Main />
         <NextScript />
         <script src="../static/js/vendor/mediabox.min.js" />
         <script src="../static/js/vendor/modernizr-2.8.3.min.js" />
       </body>
     </html>
    )
  }
}
