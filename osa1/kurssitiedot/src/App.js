import React from 'react'




const Header = (course) => {
  return <h1>{course.name}</h1>    

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
 const t = props.parts

  return (
    <div>
      <p>
      <Part name={t[0].name} exercises={t[0].exercises}/>
      <Part name={t[1].name} exercises={t[1].exercises}/>
      <Part name={t[2].name} exercises={t[2].exercises}/>
      </p>
    </div>
  )
}

const Total = (props) => {
  const t = props.parts
  return (
    <div>
      <p>
        Number of exercises {t[0].exercises + t[1].exercises
         + t[2].exercises}
      </p>
    </div>
  )
}

const App = () => {
  // const-määrittelyt
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const parts = [part1, part2, part3]



  return (
    <div>
        <Header name={course} />     
        <Content parts={parts}/>
        <Total parts={parts} />
    </div>
  )
}

export default App