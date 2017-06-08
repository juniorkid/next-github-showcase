import React from 'react'
import {string, number, func} from 'prop-types'
import {Card} from 'semantic-ui-react'
import withHover from 'react-with-hover'

const RepoItem = ({id, name, html_url: htmlUrl, language, onClick, mouseOver}) => {


  return (
    <a onClick={onClick} >
      <Card style={mouseOver ? {border: '2px solid powderblue'}: null}>
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

export default withHover( { transform: (flag) => ({ mouseOver: flag }) })(RepoItem)
