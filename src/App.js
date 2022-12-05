import React, { Component } from 'react'
import PersonsWrapper from "./components/PersonWrapper/personsWrapper";
import classes from "./App.css";
import TableTypes from './components/TableTypes/tableTypes'
import TypesPopup from "./components/TypesPopup/typesPopup";

export default class App extends Component {
  state = {
    showPopup: false,
    posDrugElement: null,
    posDrugElementId: null,
    types:[
      {
        'name': 'First name',
        'id': '0',
        'order': '0'
      },
      {
        'name': 'Last name',
        'id': '1',
        'order': '1'
      },
      {
        'name': 'Age',
        'id': '2',
        'order': '2'
      },
      {
        'name': 'Status',
        'id': '3',
        'order': '3'
      },
      {
        'name': 'City',
        'id': '4',
        'order': '4'
      },
      {
        'name': 'Phone',
        'id': '5',
        'order': '5'
      }
    ],
    persons:[
      {
        filter: 'all',
        id: '0',
        person: [
          {
            'name': 'First name',
            'value': 'Dima'
          },
          {
            'name': 'Last name',
            'value': 'Levandovskyi'
          },
          {
            'name': 'Age',
            'value': '21'
          },
          {
            'name': 'Status',
            'value': 'Free'
          },
          {
            'name': 'City',
            'value': 'Zhitomir'
          },
          {
            'name': 'Phone',
            'value': '0935020622'
          }
        ]
      },
      {
        filter: 'all',
        id: '1',
        person: [
          {
            'name': 'First name',
            'value': 'Artem'
          },
          {
            'name': 'Last name',
            'value': 'Danilov'
          },
          {
            'name': 'Age',
            'value': '27'
          },
          {
            'name': 'Status',
            'value': 'Have kid'
          },
          {
            'name': 'City',
            'value': 'Kiev'
          },
          {
            'name': 'Phone',
            'value': '0977777777'
          }
        ]
      },
      {
        filter: 'all',
        id: '2',
        person: [
          {
            'name': 'First name',
            'value': 'Tanya'
          },
          {
            'name': 'Last name',
            'value': 'Levandovskya'
          },
          {
            'name': 'Age',
            'value': '25'
          },
          {
            'name': 'Status',
            'value': 'Have kid'
          },
          {
            'name': 'City',
            'value': 'Kiev'
          },
          {
            'name': 'Phone',
            'value': '0635138106'
          }
        ]
      }
    ]
  }

  sortRow = (name, value) =>{
    this.state.persons.forEach((person, index)=>{
      person.person.forEach(item =>{ 
        if (item.name === name ) {
          if (item.value.includes(value)) {
            let copyPerson = [...this.state.persons];

            copyPerson.map(element =>{
              return(
                element.id === person.id ? element.filter = 'all' : null
              )
            })
  
            this.setState({
              persons: copyPerson
            })
          } else if(value === '') {
            let copyPerson = [...this.state.persons];

            copyPerson.map(element =>{
              return(
                element.filter = 'all'
              )
            })
  
            this.setState({
              persons: copyPerson
            })
          } else {
            let copyPerson = [...this.state.persons];

            copyPerson.map(element =>{
              return(
                element.id === person.id ? element.filter = 'hidden' : null
              )
            })
  
            this.setState({
              persons: copyPerson
            })
          }
        }
      })
    })
  }

  showPopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  changeType = (id, value) =>{
    let copyTypes = [...this.state.types]
    copyTypes.forEach( type =>{
      
      if (type.id === id) {
        type.name = value
      }
    })
    
    let copyPersonsNew = [...this.state.persons]

    copyPersonsNew.forEach(personArr =>{
      personArr.person.forEach((person, index) =>{
        id = parseInt(id)
        if(index === id){
          person.name = value
        }
      })
    })


    this.setState({
      types: copyTypes,
      persons: copyPersonsNew
    })
  }

  addType = () =>{
    let copyTypesNew = [...this.state.types]
    copyTypesNew.push({"name": `New type ${this.state.types.length}`, "id": `${this.state.types.length}`, 'order': `${this.state.types.length}`})

    let copyPersonsNew = [...this.state.persons]
    copyPersonsNew.forEach(person =>{
      person.person.push({"name": `New type ${this.state.types.length}`, "value": ''})
    })
    this.setState({
      types: copyTypesNew,
      persons: copyPersonsNew
    })
  }

  changePerson = (name, id, value) =>{
    let changePersonArr = [...this.state.persons]

    changePersonArr.forEach((personArr, index) =>{
      if(id === index){
        personArr.person.forEach(person =>{
          if(person.name === name){
            person.value = value
          }
        })
      }
    })
    this.setState({
      persons: changePersonArr
    })
  }

  removeType = (id) =>{
    let copyTypes = [...this.state.types]
    let copyPerson = [...this.state.persons]
    copyTypes.forEach((type, index) =>{
      if ( index === id) {
        copyPerson.forEach(personArr =>{
          personArr.person.forEach((person, i) =>{
            if(person.name === type.name){
              delete personArr.person[i];
            }
          })
        });
      }
    })
    copyTypes.splice(id, 1)

    this.setState({
      persons: copyPerson,
      types: copyTypes
    })
  }

  sortArray = (copyTypes) =>{

    copyTypes.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      }
      if (a.order < b.order) {
        return -1;
      }
      return 0;
    });


    this.setState({
      types: copyTypes
    })
  }

  dragDrop = (event, type) =>{

    let tupeOrder = type.order;
    event.preventDefault()
    let copyTypes = [...this.state.types];

    copyTypes.forEach(item =>{
      if(item.id === type.id){
        item.order = this.state.posDrugElement
      } else if (item.id === this.state.posDrugElementId) {
        item.order = tupeOrder
      }
    })
 
    this.sortArray(copyTypes)
  }

  onDragStart = (e, type) =>{
    this.setState({
      posDrugElement: type.order,
      posDrugElementId: type.id
    })
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <>
        <table className={classes.table}>
          <TableTypes 
            persons={this.state.persons} 
            types={this.state.types} 
            sortRow={this.sortRow} 
            showPopup={this.showPopup}
            />
          <PersonsWrapper 
            persons={this.state.persons} 
            types={this.state.types} 
            lenght={this.state.types.length} 
            changePerson={this.changePerson}
          />
        </table>
        {
          this.state.showPopup
          ? <TypesPopup 
              onDragOver={this.onDragOver} 
              onDragStart={this.onDragStart} 
              dragDrop={this.dragDrop} 
              showPopup={this.showPopup} 
              addType={this.addType} 
              changeType={this.changeType} 
              types={this.state.types} 
              removeType={this.removeType}
            />
          : null
        }
      </>
    )
  }
}