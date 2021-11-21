import React from 'react'




const Header = (course) => {
  console.log(course)
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
  return (
    <div> 
      <Part name={props.name} excercises={props.excercises}/>
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

  function totalnumber(a,b,c){
    return a+b+c
  }

  return (
    <div>
        <Header name={course} />
        
        <Content name={part1.name} excercises={part1.exercises} 
        name2={part2.name} excercises2={part2.exercises}
        name3={part3.name} excercises3={part3.exercises}
        />

      <Total number={totalnumber(part1.exercises, part2.exercises, part3.exercises)} />
    </div>
  )
}

export default App