import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    name: '',
    desc: '',
    fruit: '',
  }

  state = this.initialState

  handleChange = (event) => { 
    const {name, value} = event.target
    event.preventDefault()

    this.setState ({
      [name]: value,
    })
  }
  
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const {name, desc, fruit} = this.state

    return (      
      <div className="member-form" id="myForm">
        <form id="myForm">
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange} />
          <label htmlFor="desc">Desc</label>
          <input 
            type="text"
            name="desc"
            id="desc"
            value={desc}
            onChange={this.handleChange} />
          <label htmlFor="fruit">Fruit</label>
          <input 
            type="text"
            name="fruit"
            id="fruit"
            value={fruit}
            onChange={this.handleChange} />
          <input type="button" className="form-button" value="Add new member" onClick={this.submitForm} />
        </form>
      </div>
    )
  }
}

export default Form