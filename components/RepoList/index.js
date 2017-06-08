import React from 'react'
import { array, string } from 'prop-types'
import {Grid} from 'semantic-ui-react'
import RepoItem from '../RepoItem'

const renderRepoList = (repoList = []) => (
  repoList.map((repo) => (
    <Grid.Column key={repo.id}>
      <RepoItem {...repo} />
    </Grid.Column>
  ))
)

const RepoList = ({repoList, className}) => {
  return (
    <Grid columns={4} className={className}>
      {renderRepoList(repoList)}
    </Grid>
  )
}

RepoList.propTypes = {
  repoList: array,
  className: string
}

export default RepoList
