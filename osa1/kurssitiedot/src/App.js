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

const Content = (part) => {
  return (
    <div> 
      <p>
        {part.name} {part.excercises}
      </p>    
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
      <Content name={part1} excercises={exercises1}/>
      <Content name={part2} excercises={exercises2}/>
      <Content name={part3} excercises={exercises3}  />
      <Total number={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App