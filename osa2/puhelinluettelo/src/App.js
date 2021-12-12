import React, { useState } from 'react'
import Filter from './Components/Filter'
import Person from './Components/Person'
import PersonForm from './Components/PersonForm'


const App = () => {
  console.log('App toimii')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const showFiltered = searchValue === ''
    ? persons
    : persons.filter(person => person.name.startsWith(searchValue))

const addName = (event) => {
  event.preventDefault()
  console.log('button clicked' , event.target)

  const newObject = {
    name: newName,
    number: newNumber    
  }
  const names = persons.map(person => person.name)

  if (!names.includes(newObject.name)) {
    
    setPersons(persons.concat(newObject))
    setNewName('')
    setNewNumber('')    

  } else {
    
    window.alert(`${newName} is already added to phonebook`)
    setNewName('')
    setNewNumber('')
  }
  

}

const handleFilter = (event) => {
  setSearchValue(event.target.value)
}

const handleNameChange = (event) => {
  setNewName(event.target.value)
}

const handleNumberChange = (event) => {
  setNewNumber(event.target.value)
}

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchValue={searchValue}
        handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm addName={addName}
      newName={newName}
      handleNameChange={handleNameChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
        {showFiltered.map((person, i) =>
           <Person key={i} person={person}/> 
          )}
    </div>
  )

}

export default App
