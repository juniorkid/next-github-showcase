import React from 'react'
import {Grid} from 'semantic-ui-react'
import RepoItem from '../RepoItem'

const renderRepoList = (repoList = []) => (
  repoList.map((repo) => (
    <Grid.Column key={repo.id}>
      <RepoItem {...repo}/>
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
