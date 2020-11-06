import { Component } from 'react'
import Header from './Header'
import Form from './Form'
import Household from './Household'

class App extends Component {
  // mock initial data for App
  state = {
    houseMembers: [
      {
        name: 'Charles Baxter',
        desc: 'Household Contact',
        fruit: 'Apple',
      },
      {
        name: 'Maxwell Baxter',
        desc: 'Household Contact',
        fruit: 'Orange',
      },
      {
        name: 'Donna Baxter',
        desc: 'Household Contact',
        fruit: 'Peach'
      },
      {
        name: 'Debbie Baxter',
        desc: 'Household Contact',
        fruit: 'Grapes'
      },
    ]
  }

  handleSubmit = (member) => {
    // skip duplicates and empties
    console.log(`Seeking to add ${member.name.trim()}`)

    let found = this.state.houseMembers.find( (item) => {
      return member.name.trim() === item.name
    })
    
    if (found || member.name.trim() === ''
              || member.desc.trim() === ''
              || member.fruit.trim() === '' ) {
      alert(`Duplicates and record with empty fields cannot be added to household`)
    } else {
      this.setState({houseMembers: [...this.state.houseMembers, member]})
    }
  }

  removeMember = (index) => {
    console.log(`Removing index ${index}`)
    this.setState({houseMembers: this.state.houseMembers.filter((item, idx) => {
        return idx !== index
      }),
    })
  }


  render() {
    const {houseMembers} = this.state 
    return (
      <div>
        <Header />
        <hr />
        <Household householdData={houseMembers} removeMember={this.removeMember} />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App;
