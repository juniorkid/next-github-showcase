import React from 'react'
import {Input, Button} from 'semantic-ui-react'

const Searchbar = ({ onChange, loading }) => (
  <div>
    <Input action placeholder='Search...' fluid loading={loading} onChange={onChange}>
      <input />
      <Button content="search" type="submit"/>
    </Input>
  </div>
)

export default Searchbar
