import React from 'react'

const WorkoutCard = ({ workout }) => {
  return (
  // you could also use fragments instead of a div here too: <> </>
  workout ? 
  <div>
    <h4>{workout.title}</h4>
    <p>{workout.date}</p>
  </div> :
  <p>Workout Card</p>
  )
}

export default WorkoutCard