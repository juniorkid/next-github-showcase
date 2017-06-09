import React from 'react'
import Head from 'next/head'
import Header from '../components/ecosystems/Header'
import Footer from '../components/ecosystems/Footer'

const withPage = (title = '') => (ComposedComponent) => (props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
        <ComposedComponent {...props}/>
      <Footer />
    </div>
  )
}

export default withPage
