import React from 'react'
import {Input, Button} from 'semantic-ui-react'
import {withState} from 'recompose'

/*const Searchbar = ({ onChange, loading }) => (
  <div>
    <Input action placeholder='Search...' fluid loading={loading} onChange={onChange}>
      <input />
      <Button content="search" type="submit"/>
    </Input>
  </div>
)*/

/*class Searchbar extends React.Component {
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
}*/

const withValue = withState('value', 'setValue', '')

const Searchbar = withValue(({ onChange, onSubmit, loading, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
      e.preventDefault()
        onSubmit(value)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <Input action placeholder='Search...' fluid onChange={handleChange} >

        <input />
        <Button content="search" type="submit" onClick={handleSubmit} loading={loading} />
      </Input>
        </form>
    </div>
  )
})

export default Searchbar
