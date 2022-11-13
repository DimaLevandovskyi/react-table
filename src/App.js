import React, { Component } from 'react'
import PersonsWrapper from "./components/personsWrapper";

export default class App extends Component {
  state = {
    persons:[
      {
        first_name: 'Dima',
        last_name: 'Levandovskyi',
        age: '21',
        status: 'free',
        city: 'Zhitomir',
        phone: '0935020622'
      },
      {
        first_name: 'Artem',
        last_name: 'Danilov',
        age: '27',
        status: 'Have kid',
        city: 'kiev',
        phone: '0977777777'
      },
      {
        first_name: 'Tanya',
        last_name: 'Levandovskya',
        age: '25',
        status: 'Have kid',
        city: 'kiev',
        phone: '0635138106'
      }
    ]
  }
  render() {
    return (
      <>
        <table className='table'>
          <PersonsWrapper persons={this.state.persons} />
        </table>
      </>
    )
  }
}
