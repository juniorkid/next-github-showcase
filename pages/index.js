import React from 'react'
import withPage from '../hocs/withPage'
import SearchContainer from '../components/ecosystems/SearchContainer'

class Homepage extends React.Component {
  render(){
    return(
      <div>
        <SearchContainer />
      </div>
    )
  }
}

export default withPage('Homepage')(Homepage)
