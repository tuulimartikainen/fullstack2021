import React from 'react'



const Country = (props)  => {
    console.log('Country toimii')
    console.log(props)
    const name = props.country.name.common

    const languages = props.country.languages
    console.log(languages)
    return (
      <div>
          <h1>{name}</h1>
        <p>
          {'capital'} {props.country.capital}
        </p>
        <p>
        {'population'} {props.country.population} 
        </p>
        <h2>languages</h2>
            <ul>
                {languages.map((item, i) => 
                <li key={i}>{item}</li>
                )}
            </ul>
      </div>
    )
  }

export default Country