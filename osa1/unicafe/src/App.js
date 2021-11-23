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

const Statisticline = (props) => {
  return (
    <tr>
      <td>{props.text} </td>
      <td>{props.value} </td>
    </tr>
    
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
      <table>
        <tbody>
        <Statisticline text="good" value={props.good}/>
        <Statisticline text="neutral" value={props.neutral}/>
        <Statisticline text="bad" value={props.bad}/>
        <Statisticline text="all" value={props.allClicks}/>
        <Statisticline text="average" value={props.average}/>
        <Statisticline text="positive" value={props.positive}/>
        </tbody>
      </table>
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
