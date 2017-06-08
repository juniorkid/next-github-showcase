import React from 'react'
import {string, number, func} from 'prop-types'
import {Card} from 'semantic-ui-react'

const RepoItem = ({id, name, html_url: htmlUrl, language, onClick}) => {
  return (
    <a onClick={onClick}>
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
    </a>
  )
}

RepoItem.propTypes = {
  id: number,
  name: string,
  html_url: string,
  language: string,
  onClick: func
}

export default RepoItem
