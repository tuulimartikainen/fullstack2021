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
      <Part name={t[0].name} excercises={t[0].exercises}/>
      <Part name={t[1].name} excercises={t[1].exercises}/>
      <Part name={t[2].name} excercises={t[2].exercises}/>
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
        <Header name={course.name} />     
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
    </div>
  )
}

export default App