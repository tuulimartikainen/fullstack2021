import React, { useState } from 'react'

const Anecdote = (props) => {
  return <div>
    <h1>Anecdote of the day</h1>
    {props.name} <br></br>
    has {props.vote} votes  
    </div>

}

const Button = (props) => {

  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const MostVoted = (props) => {
  return <div>
    <h1>Anecdote with most votes</h1>
    {props.name} <br></br>
    has {props.vote} votes  
    </div>

}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
]
const votes = Array(anecdotes.length).fill(0)
const copy = [...votes]

const App = () => {

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([])
  
  //const [mostVoted, setMostVoted] = useState(0)
  //const [highestScore, setHighestScore] = useState(0)

  const handleClickAnecdote = () => {
    
    setSelected(Math.floor(Math.random() * 7))
  }

  const handleClickVote = () => {
    
    setPoints((copy[selected] += 1))
    //console.log(r)
    //if (r > highestScore) {
      //setHighestScore(r)
      //setMostVoted(anecdotes[anecdoteInQuestion])
    //}
  }

  return (
    <div>
      <Anecdote name={anecdotes[selected]}
      vote={copy[selected]} />
            
      <Button 
        handleClick={handleClickVote}
        text='vote'
      />
      
      <Button
        handleClick={handleClickAnecdote}
        text='next anecdote'
      />

      <MostVoted
      name={anecdotes[copy.indexOf(Math.max(...copy))]}
      vote={Math.max(...copy)}
      />



    </div>
  )
}

export default App