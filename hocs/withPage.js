import React from 'react'
import Head from 'next/head'

export default (ComposedComponent, title = '') => (props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
      </Head>
      <ComposedComponent {...props} />
    </div>
  )
}
