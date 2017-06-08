import React from 'react'
import {Input} from 'semantic-ui-react'

const Searchbar = ({ onChange, loading }) => (
  <div>
    <Input
      action={{ icon: 'search' }}
      placeholder='Search...'
      onChange={onChange}
      fluid
      loading={loading}
    />
  </div>
)

export default Searchbar
