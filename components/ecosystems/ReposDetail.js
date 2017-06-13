import React from 'react'
import { find } from 'lodash'
import withRepos from '../../hocs/withRepos'
import ReposItem from '../molecules/ReposItem'
import fetch from "isomorphic-fetch"
import {Container, Segment, Dimmer, Loader} from 'semantic-ui-react'
import {STATUS} from '../../constants/status'

class ReposDetail extends React.Component {
  constructor(props) {
      super(props)
  }
  componentDidMount(){
      const {orgName, name, showReposById} = this.props
      showReposById(orgName, name)
  }

  renderReposByStatus = (reposFetchStatus, repos) => {
      switch (reposFetchStatus) {
        case STATUS.REQUEST:
          return <Dimmer active inverted>
                    <Loader size='massive' inverted>Loading</Loader>
                 </Dimmer>
        case STATUS.SUCCESS:
          return <ReposItem repos={repos}/>
        case STATUS.FAILURE:
          return <div>{reposErrorMessage}</div>
        default:
          return null
      }
  }

  render() {
    const {repos, reposFetchStatus} = this.props
    return (
        <Container>
            {this.renderReposByStatus(reposFetchStatus, repos)}
        </Container>
    )
  }
}

export default withRepos(ReposDetail)