import React from 'react'
import { Button, Icon, Container } from 'semantic-ui-react'

import withPage from '../hocs/withPage'

const IndexPage = () => {
  return (
    <Container>
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
    </Container>
  )
}

export default withPage(IndexPage, 'Homepage')
