import React from 'react'
import Router from 'next/router'
import { array, string } from 'prop-types'
import { Grid } from 'semantic-ui-react'
import RepoItem from '../RepoItem'

const renderRepoList = (repoList = []) => (

  repoList.map((repo) => (
      <Grid.Column key={repo.id} >
        <RepoItem {...repo} onClick={() => Router.push(`/repos?id=${repo.id}`)}/>
      </Grid.Column>
    ))
)

const RepoList = ({ repoList, className }) => {
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
