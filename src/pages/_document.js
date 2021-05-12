import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { Box, ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <body style={{
          "display": "table",
        }}>
          <ColorModeScript />
          <Main />
          <NextScript>
          </NextScript>
        </body>

      </Html>
    )
  }
}
