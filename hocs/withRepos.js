import React from 'react'
import {STATUS} from '../constants/status'

const withRepos = (ComposedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        reposFetchStatus: '',
        reposList: [],
        reposErrorMessage: ''
      }
    }

  searchReposWithOrgName = (orgName) => {
    this.setState({
      reposFetchStatus: STATUS.REQUEST,
      reposList: [],
      reposErrorMessage: ''
    })
    fetch(`https://api.github.com/orgs/${orgName}/repos`)
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          this.setState({
            reposFetchStatus: STATUS.FAILURE,
            reposErrorMessage: data.message,
            reposList: []
          })
        } else {
          this.setState({
            reposFetchStatus: STATUS.SUCCESS,
            reposList: data
          })
        }
      })
  }

    render () {
      const {reposFetchStatus, reposList, reposErrorMessage} = this.state
      return (
        <ComposedComponent 
          reposFetchStatus={reposFetchStatus} 
          reposList={reposList} 
          reposErrorMessage={reposErrorMessage}
          searchReposWithOrgName={this.searchReposWithOrgName}
          {...this.props}
        />
      )
    }
  }
}

export default withRepos
