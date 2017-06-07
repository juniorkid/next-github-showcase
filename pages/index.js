import React from 'react'
import Head from 'next/head'
import { Button, Icon } from 'semantic-ui-react'

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"></link>
      </Head>
      <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='right arrow' />
      </Button.Content>
    </Button>

    <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>

    <Button animated='fade'>
      <Button.Content visible>
        Sign-up for a Pro account
      </Button.Content>
      <Button.Content hidden>
        $12.99 a month
      </Button.Content>
    </Button>
    </div>
  )
}

export default IndexPage
