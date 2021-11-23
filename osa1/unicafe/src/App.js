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

const Part = (props) => {
  return (
    <div>
      
        {props.name} {props.amount}
      
    </div>
  )
}

const Statistics = (props) => {
  if (props.allClicks === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1> 
      <Part name="good" amount={props.good}/>
      <Part name="neutral" amount={props.neutral}/>
      <Part name="bad" amount={props.bad}/>
      <Part name="all" amount={props.allClicks}/>
      <Part name="average" amount={props.average}/>
      <Part name="positive" amount={props.positive}/>
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

/*
  const increaseGoodByOne = () => setGood(good + 1)
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  const increaseBadByOne = () => setBad(bad + 1)

  const countall = () => 
  const countAverage = () => setAverage(all/3)
  */

  const handleGoodClick = () => {
    setGood(good + 1)
    setAllClicks(allClicks + 1)
    setAll(all + 1)
    setAverage(all/3)
    setPositive(good/allClicks)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAllClicks(allClicks + 1)
    setAverage(all/3)
    setPositive(good/allClicks)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAllClicks(allClicks + 1)
    setAll(all - 1)
    setAverage(all/3)
    setPositive(good/allClicks)
  }


  return (
    <div>
      <Header/>
      <Button
        handleClick={handleGoodClick}
        text='good'
      />
      <Button
        handleClick={handleNeutralClick}
        text='neutral'
      />     
      <Button
        handleClick={handleBadClick}
        text='bad'
      /> 
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allClicks={allClicks}
        average={average}
        positive={positive}

      />


    </div>
  )
}

export default App
