import React, { Component } from 'react'

const status = {
  request: 'request',
  success: 'success',
  failure: 'failure'
}

const api = (org) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (org === 'facebook') {
        return resolve([
          {
            name: 'nook',
            id: '4',
            language: 'en',
            html_url: 'http//google.com'
          },
          {
            name: 'kkkk',
            id: '3',
            language: 'en',
            html_url: 'http//google.com'
          }
        ])
      }
      return reject(new Error())
    }, 2000)
  })
}

const withRepos = (ComposedComponent) => (
  class extends Component {

    state = {
      status: '',
      data: [],
    }

    searchRepoWithOrganizeName = (orgName) => {
      this.setState({
        status: status.request,
        data: []
      })

      // fetch(`https://api.github.com/orgs/${orgName}/repos`)
      api(orgName)
      // .then(res => res.json())
      .then(res => {
        console.log('res', res)
        this.setState({
          status: status.success,
          data: res
        })
      })
      .catch(error => {
        this.setState({
          status: status.failure,
          data: null
        })
      })
    }

    render() {
      const { status, data } = this.state

      return (
        <ComposedComponent
          status={status}
          repoList={data}
          searchRepoWithOrganizeName={this.searchRepoWithOrganizeName}
          {...this.props}
        />
      )
    }
  }
)

export default withRepos
