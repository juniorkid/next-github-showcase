import React from 'react'
import {string, number} from 'prop-types'
import {Card} from 'semantic-ui-react'
import Link from 'next/link'

const RepoItem = ({id, name, html_url: htmlUrl, language}) => {
  return (
    <Link href={`/repos?id=${id}`}>
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
    </Link>
  )
}

RepoItem.propTypes = {
  id: number,
  name: string,
  html_url: string,
  language: string
}

export default RepoItem
