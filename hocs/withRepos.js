import React from 'react'
import {find} from 'lodash'
import {STATUS} from '../constants/status'

const withRepos = (ComposedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        reposFetchStatus: '',
        reposList: [],
        reposErrorMessage: '',
        repos: {},
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
      .catch(console.error)
    }

    showReposById = (orgName, name) => {
      this.setState({
        reposFetchStatus: STATUS.REQUEST,
      })
      fetch(`https://api.github.com/repos/${orgName}/${name}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          reposFetchStatus: STATUS.SUCCESS,
          repos: data
        })
      })
    }

    render () {
      const {reposFetchStatus, reposList, reposErrorMessage, repos} = this.state
      return (
        <ComposedComponent 
          reposFetchStatus={reposFetchStatus} 
          repos={repos}
          reposList={reposList} 
          reposErrorMessage={reposErrorMessage}
          searchReposWithOrgName={this.searchReposWithOrgName}
          showReposById={this.showReposById}
          {...this.props}
        />
      )
    }
  }
}

export default withRepos
