import React from 'react'
import {Input, Button, Grid} from 'semantic-ui-react'
import {withState} from 'recompose'

const withValue = withState('value', 'setValue', '')
const Searchbar = withValue(({onSubmit, value, setValue, loading}) => {
  const handleSubmit = () => {
    onSubmit(value)
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={14}>
        <Input placeholder="...search" fluid onChange={handleInputChange}/>
        </Grid.Column>
        <Grid.Column width={2}>
          <Button type="submit" onClick={handleSubmit} loading={loading} >
            Search
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
})

/*class Searchbar extends React.Component {
  state = {
    value: ''
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.value)
  }

  handleInputChange = (e) => {
    this.setState({value: e.target.value})
  }

  render () {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={14}>
          <Input placeholder="...search" fluid onChange={this.handleInputChange}/>
          </Grid.Column>
          <Grid.Column width={2}>
            <Button type="submit" onClick={this.handleSubmit}>
              Search
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}*/

export default Searchbar
