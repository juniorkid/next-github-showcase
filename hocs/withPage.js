import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const PageContainer = styled.div`
  margin-top: 50px;
`

export default (ComposedComponent, title = '') => (props) => {
  return (
    <PageContainer>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
      </Head>
      <ComposedComponent {...props} />
    </PageContainer>
  )
}
