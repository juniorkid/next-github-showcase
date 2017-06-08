import React from 'react';
import { compose } from 'recompose';
import { Container } from 'semantic-ui-react';
import withPage from '../hocs/withPage';
import {
  Grid,
  Image,
  Card,
  Icon,
  Segment,
  Header,
  Dimmer,
  Loader
,} from 'semantic-ui-react';
import { withRepo } from '../hocs/withRepo';

const ReposPage = compose(
  withRepo(),
  withPage('repos page')
)(
  (
    ({
      repoValue: {
        id,
        name,
        icon,
        description,
        html_url,
        language,
      },
      status,
    }) => {
      return (
        <Container>
          {
            status === 'request' ?
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
              :
              <Grid>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Card>
                      <Image src={icon} />
                      <Card.Content>
                        <Card.Header>
                          {name}
                        </Card.Header>
                        <Card.Meta>
                        <span className='date'>
                          {id}
                        </span>
                        </Card.Meta>
                        <Card.Description>
                          {html_url}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <a>
                          <Icon name='user' />
                          {language}
                        </a>
                      </Card.Content>
                    </Card>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Segment>
                      <Header as="h2">Description</Header>
                      <Header as="h4">{description}</Header>
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
          }
        </Container>
      );
    }
  )
);

export default (ReposPage);
