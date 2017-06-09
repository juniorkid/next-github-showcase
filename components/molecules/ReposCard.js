import React from 'react'
import { Card } from 'semantic-ui-react'
import {number, string, func, shape, arrayOf, date} from 'prop-types'

const ReposCard = ({repos, className, onClick}) => {
  return (
    <a onClick={onClick}>
      <Card className={className}>
        <Card.Content>
          <Card.Header>
            {`${repos.id}: ${repos.name}`}
          </Card.Header>
            <Card.Meta>
              <span className='date'>
                {repos.created_at}
              </span>
            </Card.Meta>
          <Card.Description>
            {repos.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {repos.language}
        </Card.Content>
      </Card>
    </a>
  )
}

ReposCard.propTypes = {
  repos: shape({
      id: number,
      name: string,
      created_at: date,
      description: string,
      language: string,
  }), 
  className: string, 
  onClick: func
}

ReposCard.defaultProps = { 
  className: '', 
  onClick: ()=>{}
}

export default ReposCard
