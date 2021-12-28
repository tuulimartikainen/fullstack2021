import React from 'react'



const Person = (props)  => {
    console.log('Person toimii')
    return (
      <div>
        <p>
          {props.person.name} {props.person.number} 
          <button 
          onClick={props.removeName}
          value={props.person.id}
          >delete</button>
        </p>
      </div>
    )
  }

export default Person