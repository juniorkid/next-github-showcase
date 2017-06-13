import React from 'react'
import { Item, Grid, Statistic, Image, Header, Icon } from 'semantic-ui-react'

const ReposItem = ({repos = {}}) => {
    const {owner = {}} = repos
    console.log(repos)
    return (
        <Grid padded>
            <Grid.Row>
                <Grid.Column textAlign='center'>
                    <Image as='a' href={repos.html_url} src={owner.avatar_url} size='medium' centered='true'/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Header as='h1' icon textAlign='center'>
                    <Header.Content>
                        {repos.name}
                    </Header.Content>
                </Header>
            </Grid.Row>
            <Grid.Row columns={4} divided >
                    <Grid.Column textAlign='center'>
                        <Statistic>
                            <Statistic.Label>FORKS</Statistic.Label>
                            <Statistic.Value>
                                <Icon name='fork' /> 
                                {repos.forks_count}
                            </Statistic.Value>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Statistic>
                            <Statistic.Label>OPEN ISSUES</Statistic.Label>
                            <Statistic.Value>
                                <Icon name='pencil' /> 
                                {repos.open_issues_count
                            }</Statistic.Value>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Statistic>
                            <Statistic.Label>SUBSCRIBERS</Statistic.Label>
                            <Statistic.Value>
                                <Icon name='favorite' /> 
                                {repos.subscribers_count}
                            </Statistic.Value>
                        </Statistic>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Statistic>
                            <Statistic.Label>WATCHERS</Statistic.Label>
                            <Statistic.Value>
                                <Icon name='eye' /> 
                                {repos.watchers_count}
                            </Statistic.Value>
                        </Statistic>
                    </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Item.Group>
                    <Item>
                        <Item.Content>
                            <Item.Meta>Description</Item.Meta>
                            <Item.Description>
                                {repos.description}
                            </Item.Description>
                            <Item.Meta>Language</Item.Meta>
                            <Item.Description>
                                {repos.language}
                            </Item.Description>
                            <Item.Meta>Author</Item.Meta>
                            <Item.Description>
                                {owner.login}
                            </Item.Description>
                             <Item.Meta>Created at</Item.Meta>
                            <Item.Description>
                                {repos.created_at}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Grid.Row>
        </Grid>
    )
}

export default ReposItem