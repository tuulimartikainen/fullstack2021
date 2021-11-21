import React from 'react'




const Header = (course) => {
  return (
    <div>
      <p>
        {course.name}
      </p>
    </div>
  )
}

const Part = (part) => {
  return (
    <div>
      <p>
        {part.name} {part.excercises}
      </p>
    </div>
  )
}


const Content = (props) => {
  return (
    <div> 
      <Part name={props.name1} excercises={props.excercises1}/>
      <Part name={props.name2} excercises={props.excercises2}/>
      <Part name={props.name3} excercises={props.excercises3}/>          
    </div>

  )
}

const Total = (total) => {
  return (
    <div>
      <p>
        Number of exercises {total.number}
      </p>
    </div>
  )
}

const App = () => {
  // const-määrittelyt
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>
        <Header name={course} />
        </h1> 
        <Content name1={part1} excercises1={exercises1} name2={part2} excercises2={exercises2}
         name3={part3} excercises3={exercises3}/>
      <Total number={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App