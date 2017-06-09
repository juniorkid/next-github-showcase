import React from 'react'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import {withState, compose} from 'recompose'
import {Container} from 'semantic-ui-react'

import {STATUS} from '../../constants/status'
import withRepos from '../../hocs/withRepos'
import Searchbar from '../molecules/Searchbar'
import ReposList from '../organisms/ReposList'

const SearchContainerWrapper = styled.div`
  padding: 30px 0;
  min-height: 500px;
`

const SearchContainer = ({reposFetchStatus, reposList, reposErrorMessage, searchReposWithOrgName}) => {
  const renderReposListByStatus = (reposFetchStatus) => {
      switch (reposFetchStatus) {
        case STATUS.REQUEST:
          return <div>loading...</div>
        case STATUS.SUCCESS:
        console.log(reposList)
          return <ReposList reposList={reposList}/>
        case STATUS.FAILURE:
          return <div>{reposErrorMessage}</div>
        default:
          return null
      }
  }

  return (
    <SearchContainerWrapper>
      <Container>
        <Searchbar onSubmit={searchReposWithOrgName} loading={reposFetchStatus === STATUS.REQUEST}/>
        {renderReposListByStatus(reposFetchStatus)}
      </Container>
    </SearchContainerWrapper>
  )
}

export default withRepos(SearchContainer)
