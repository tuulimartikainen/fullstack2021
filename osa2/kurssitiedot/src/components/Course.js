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
    console.log("Kurssi toimii")
    const {course} = props
    
    return (
      <div>
        <Header course={course} />     
        <Content course={course} />
        <Total course={course} />
    </div>
    )
  }

  export default Course