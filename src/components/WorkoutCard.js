import React from 'react'

const WorkoutCard = ({ workout }) => {
  return (
  // you could also use fragments instead of a div here too: <> </>
  <div>
    <h4>{workout.title}</h4>
    <p>{workout.date}</p>
  </div>
  )
}

export default WorkoutCard