import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import withPage from '../hocs/withPage'
import ReposDetail from '../components/ecosystems/ReposDetail'

class Repos extends React.Component {
  render(){
    return(
      <div>
        <ReposDetail orgName={this.props.url.query.orgName} name={this.props.url.query.name}/>
      </div>
    )
  }
}

export default withPage('Repos')(Repos)
