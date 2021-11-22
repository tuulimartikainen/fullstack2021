import React, { useState } from 'react'

const Header = () => {
  return <h1>give feedback</h1>    

}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Part = (button) => {
  return (
    <div>
      
        {button.name} {button.amount}
      
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGoodByOne = () => setGood(good + 1)
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  const increaseBadByOne = () => setBad(bad + 1)

  return (
    <div>
      <Header/>
      <Button
        handleClick={increaseGoodByOne}
        text='good'
      />
      <Button
        handleClick={increaseNeutralByOne}
        text='neutral'
      />     
      <Button
        handleClick={increaseBadByOne}
        text='bad'
      /> 
   
      <h1>statistics</h1> 
      <Part name="good" amount={good}/>
      <Part name="neural" amount={neutral}/>
      <Part name="bad" amount={bad}/>
    </div>
  )
}

export default App
