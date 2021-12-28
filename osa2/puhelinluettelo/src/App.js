import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import Person from './Components/Person'
import PersonForm from './Components/PersonForm'
import people from './services/people'
import Notification from './Components/Notification'
import Error from './Components/Error'

const App = () => {
  console.log('App toimii')
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [alertMessage, setAlertMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    console.log('effect')
    people
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

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
    
    people
      .create(newObject)
      .then(response => {
          setAlertMessage( `Added ${newObject.name} to the phonebook`)
          setPersons(persons.concat(newObject))
          setNewName('')
          setNewNumber('')
          setTimeout(() => {
            setAlertMessage(null)
          }, 5000)
      })    

  } else {
    
    if (window.confirm(`${newName} is already added to phonebook, replace the old 
    number with a new one?`)){
      const changedPerson = persons.find(n => n.name === newName)
      people
      .update(changedPerson.id, newObject)
      .then(response => {
          setPersons(persons.map(person => person.id !== changedPerson.id ? person : response.data))
          setNewName('')
          setNewNumber('')
      })
    }


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

const removeName = (event) => {
  const i = event.target.value
  event.preventDefault()
  console.log(i)
  if (window.confirm("poistetaanko varmasti?")){
  people
    .remove(i)
    .then(response => {
      console.log('poistettu palvelimelta')  
      setPersons(persons.filter(n => n.id !== i))
    })
    .catch(error => {
      console.log('fail') 
      setErrorMessage( `Information has already been removed from server`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
  })
}
}



  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={alertMessage} />
      <Error message={errorMessage} />
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
           <Person key={i} 
           person={person} 
           removeName={removeName}
           nameToRemove={person}/> 
          )}
    </div>
  )

}

export default App
