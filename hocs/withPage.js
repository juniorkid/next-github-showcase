import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { Container } from 'semantic-ui-react'

const PageContainer = styled(Container)`
  padding: 50px 0;
  min-height: 500px;
`

const Header = styled.div`
  width: 100%;
  height: 75px;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
`

const Footer = styled.div`
  width: 100%;
  height: 75px;
  background: darkgrey;
  clear: both;
  position: absolute;
  z-index: 10;
  margin-top: -3em;
`

export default (title = '') => (ComposedComponent) => (props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Container fluid>
        <Header>
          Github
        </Header>
      </Container>
      <PageContainer>
        <ComposedComponent {...props} />
      </PageContainer>
      <Footer>
      </Footer>
    </div>
  )
}
