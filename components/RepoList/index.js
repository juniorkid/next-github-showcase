import React from 'react'
import {Grid} from 'semantic-ui-react'
import RepoItem from '../RepoItem'

const renderRepoList = (repoList = [1,2,3,4,5,6,7,8,9,10]) => (
  repoList.map((repo) => (
    <Grid.Column key={repo.id}>
      <RepoItem />
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

export default RepoList
