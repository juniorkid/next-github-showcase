import React from 'react'
import {string, number, func} from 'prop-types'
import styled from 'styled-components'
import {Card} from 'semantic-ui-react'

const RepoItem = ({id, name, html_url: htmlUrl, language, onClick, mouseOver}) => {

  const CardWrapper = styled(Card)`
    cursor: pointer;
    
    :hover {
      box-shadow: 5px 8px 14px rgba(0,0,0,.13);
    }
  `

  return (
    <a onClick={onClick} >
      <CardWrapper>
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
      </CardWrapper>
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
