import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import Person from './Components/Person'
import PersonForm from './Components/PersonForm'
import people from './services/people'
import Notification from './Components/Notification'

const App = () => {
  console.log('App toimii')
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    console.log('effect')
    people
      .getAll()
      .then((data) =>{
        setPersons(data)
      })
  }, [])

  const notifyWith = (message, type='success') =>{
    setNotification({ message, type })
    setTimeout(()=>{
      setNotification(null)
    }, 5000)
  }
  console.log('render', persons.length, 'notes')

  const showFiltered = searchValue === ''
    ? persons
    : persons.filter(person => person.name.startsWith(searchValue))
  
const addName = (event) => {
  event.preventDefault()
  console.log('button clicked' , event.target)
  const found = persons.find(p => p.name === newName)

  if (found) {
    const ok = window.confirm(`${found.name} already in phonebook, replace the old number with new one?`)
    if (ok) {
      people.update(found.id, {
        name: found.name,
        number: newNumber})
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== found.id ? person : returnedPerson))
          notifyWith(`Changed number of  ${found.name}`)
          setNewName('')
          setNewNumber('')
        })
      }
    

  } else {
    
    people.create({
      name: newName,
      number: newNumber   
      }).then(addedPerson=>{
        setPersons(persons.concat(addedPerson))
        notifyWith(`Added ${newName}`)
        setNewName('')
        setNewNumber('')
    }).catch(error=>{
      console.log('in APP', error.response.data)
      notifyWith(`${error.response.data}`, 'error')
    })
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

const removeName = (id) => {
  const deletedName = persons.find(p => p.id === id)
  const confirm = window.confirm(`Delete ${deletedName.name}`)
  if (confirm){
  console.log(deletedName)
  people
    .remove(id)
    .then(response => {
      console.log('poistettu palvelimelta')  
      setPersons(persons.filter(n => n.id !== id))
      notifyWith(`Deleted ${deletedName.name}`)
    })
    .catch(error => {
      console.log('fail') 
      notifyWith(`${deletedName.name}had already been removed`, 'error')
  })
}
}



  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter searchValue={searchValue}
        handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm addName={addName}
      newName={newName}
      handleNameChange={handleNameChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
        <Person persons={showFiltered} deletePerson={removeName}/>
    </div>
  )

}

export default App
