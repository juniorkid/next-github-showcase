import React, {Component} from 'react'
import styled from 'styled-components'
import Searchbar from '../components/Searchbar'
import RepoList from '../components/RepoList'

import withPage from '../hocs/withPage'

const RepoListContainer = styled.div`
  margin: 30px 0;
`

class IndexPage extends Component {
  render () {
    return (
      <div>
        <Searchbar />
        <RepoListContainer>
          <RepoList />
        </RepoListContainer>
      </div>
    )
  }
}

export default withPage(IndexPage, 'Homepage')
