import React, {Component} from 'react'

const api = (org) => {
    return new Promise((resolve ,reject)=>{
        setTimeout(()=>{
            if(org === 'facebook'){
                return resolve([
                    {
                        name:'nook',
                        id:'4',
                        language:'en',
                        html_url:'http//google.com'
                    },
                    {
                        name: 'kkkk',
                        id:'3',
                        language:'en',
                        html_url:'http//google.com'
                    }
                ])
                   }
        } , 2000    )
    })
}

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

      // fetch(`https://api.github.com/orgs/${orgName}/repos`)
      api(orgName)
      // .then(res => res.json())
      .then(res => {
          console.log('res',res)
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
          repoList={data} 
          searchRepoWithOrganizeName={this.searchRepoWithOrganizeName} 
          {...this.props}
        />
      )
    }
  }
)

export default withRepos
