import React from 'react'
import { Link } from 'react-router-dom'

const WorkoutCard = ({ workout }) => {
  return (
  // you could also use fragments instead of a div here too: <> </>
  workout ? 
  <div>
    <h4>{workout.title}</h4>
    <p>{workout.date}</p>
    <Link to={`/workouts/${workout.id}/edit`}>Edit Workout</Link>
  </div> :
  <p>Workout Card</p>
  )
}

export default WorkoutCard