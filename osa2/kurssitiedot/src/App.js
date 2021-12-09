import React from 'react'




const Header = (props) => {
  const {course} = props
  //console.log(props)
  return <h1>{course.name}</h1>    

}

const Part = (props) => {
  
  return (
    <div>
      <p>
        {props.part.name} {props.part.excercises}
      </p>
    </div>
  )
}


const Content = (props) => {
  const {course} = props
  return (
    <div>
      {course.parts.map(part => 
          <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Total = (props) => {
  const {course} = props
  console.log(course.parts)
  const total = course.parts.reduce( (sum, part) =>
    sum + part.exercises, 0)
  return (
    <div>
      <p>
        <b>total of {total} exercises</b>
      </p>
    </div>
  )
}

const Course = (props) => {
  //console.log(props)
  const {course} = props
  
  return (
    <div>
      <Header course={course} />     
      <Content course={course} />
      <Total course={course} />
  </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
      
    </div>
  )
}

export default App
