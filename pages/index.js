import React, {Component} from 'react'
import styled from 'styled-components'
import Searchbar from '../components/Searchbar'
import RepoList from '../components/RepoList'

import withPage from '../hocs/withPage'
import withRepos from '../hocs/withRepos'

const RepoListContainer = styled.div`
  margin: 30px 0;
`

class IndexPage extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <Searchbar onChange={(e) => {console.log(e.target.value)}} />
        <RepoListContainer>
          <RepoList repoList={this.props.repo}/>
        </RepoListContainer>
      </div>
    )
  }
}

export default withRepos(withPage(IndexPage, 'Homepage'))
