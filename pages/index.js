import React, {Component} from 'react'
import {func, bool, array} from 'prop-types'
import {compose} from 'recompose'
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
    return (
      <div>
        <Searchbar
          onSubmit={this.props.searchRepoWithOrganizeName}
          loading={this.props.isFetchingRepo}
        />
        <RepoListContainer>
          <RepoList repoList={this.props.repoList} />
        </RepoListContainer>
      </div>
    )
  }
}

IndexPage.propTypes = {
  searchRepoWithOrganizeName: func,
  isFetchingRepo: bool,
  repoList: array
}

export default compose(
  withRepos,
  withPage('Homepage')
)(IndexPage)
