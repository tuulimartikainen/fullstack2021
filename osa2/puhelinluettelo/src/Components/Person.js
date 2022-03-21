import React from 'react'



const Person = ({persons, deletePerson})  => {
    console.log('Person toimii')
    return (
      persons.map(person => <p key = {person.id}>
        {person.name} {person.number} 
        <button onClick = { () => deletePerson(person.id) } >delete </button>
        </p>)     
    )
  }

export default Person