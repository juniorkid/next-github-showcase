import React, {Component} from 'react'

const withRepos = (ComposedComponent) => (
  class extends Component {
    
    state = {
      isLoading: false,
      data: []
    }

    searchRepoWithOrganizeName = (orgName) => {
      this.setState({
          isLoading: true,
          data: []
      })

      fetch(`https://api.github.com/orgs/${orgName}/repos`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          isLoading: false,
          data: res
        })
      })
      .catch(error => {
        this.setState({
          isLoading: false,
          data: null
        })
      })
    }
    
    render () {
      const { isLoading, data } = this.state
      
      return (
        <ComposedComponent 
          isFetchingRepo={isLoading} 
          repo={data} 
          searchRepoWithOrganizeName={this.searchRepoWithOrganizeName} 
          {...this.props}
        />
      )
    }
  }
)

export default withRepos
