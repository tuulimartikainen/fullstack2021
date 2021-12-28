import React from 'react'

const Filter = (props) => {
 console.log('filter toimii')
    return (
        <form>
            <div>find countries <input 
            value={props.searchValue}
            onChange={props.handleFilter}/>
            </div>
      </form>
    )
}
export default Filter