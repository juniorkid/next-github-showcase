import React from 'react'
import {Input, Button} from 'semantic-ui-react'

/*const Searchbar = ({ onChange, loading }) => (
  <div>
    <Input action placeholder='Search...' fluid loading={loading} onChange={onChange}>
      <input />
      <Button content="search" type="submit"/>
    </Input>
  </div>
)*/

class Searchbar extends React.Component {
  state = {
    value: ''
  }

  onSubmit = () => {
    this.props.onSubmit(this.state.value)
  }

  onChange = (e) => {
    this.setState({value: e.target.value})
  }

  render () {
    const {value} = this.state
    const {loading} = this.props

    return (
      <Input 
        placeholder='Search...' 
        loading={loading} 
        onChange={this.onChange} 
        value={value}
        action 
        fluid
      >
        <input />
        <Button content="search" type="submit" onClick={this.onSubmit}/>
      </Input>
    )
  }
}

export default Searchbar
