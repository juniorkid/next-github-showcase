import React from 'react'
import { Input } from 'semantic-ui-react'

import withPage from '../hocs/withPage'

const IndexPage = () => {
  return (
    <div>
      <Input />
    </div>
  )
}

export default withPage(IndexPage, 'Homepage')
