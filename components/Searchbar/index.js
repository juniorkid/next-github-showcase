import React from 'react'
import {Input, Icon} from 'semantic-ui-react'

const Searchbar = () => (
  <Input 
    icon={<Icon name='search' inverted circular link />}
    placeholder='Search...'
  />
)

export default Searchbar
