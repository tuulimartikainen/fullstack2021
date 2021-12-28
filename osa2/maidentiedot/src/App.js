import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Components/Filter'
import Country from './Components/Country'


const App = () => {
  console.log('App toimii')
  const [countries, setcountries] = useState([]) 
  const [country, setCountry] = useState()
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setcountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const showFiltered = searchValue === ''
    ? []
    : countries.filter(country => country.name.common.startsWith(searchValue))
    

const handleFilter = (event) => {
  setSearchValue(event.target.value)
}


  return (
    <div>
      <Filter searchValue={searchValue}
        handleFilter={handleFilter}/>
      
      
      {showFiltered.length > 10 
          ? "Too many matches, specify another filter" 
          : showFiltered.length === 1 
            ? <Country country={showFiltered[0]}/>       
            : showFiltered.map((country, i) => 
            <p key={i}>{country.name.common}</p>
            )}
        

    </div>
  )



}


export default App

