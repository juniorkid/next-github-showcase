import React from 'react'
import {Card} from 'semantic-ui-react'

const RepoItem = ({id, name, html_url: htmlUrl, language}) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {`${id}: ${name}`}
        </Card.Header>
        <Card.Description>
          {htmlUrl}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {language}
      </Card.Content>
    </Card>
  )
}

export default RepoItem
