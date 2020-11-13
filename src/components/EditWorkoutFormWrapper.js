import React from 'react';
import { updateWorkout } from '../actions/myWorkouts'
import { setEditWorkoutForm } from '../actions/workoutForm'
import WorkoutForm from './WorkoutForm.js'
import { connect } from 'react-redux'
// We need to make this a class component so that we can populate the edit form fields using a componentDidMount

class EditWorkoutFormWrapper extends React.Component {

  componentDidMount() {
    this.props.workout && this.props.setEditWorkoutForm(this.props.workout)
  }

  handleSubmit = (event, formData, userId, history) => {
    const { updateWorkout, workout } = this.props
    event.preventDefault()
    console.log("Got to WorkoutFormWrapper")
    updateWorkout({
      ...formData,
      workoutId: workout.id,
      userId
    }, history)
  }
  
  render() {
    const { handleSubmit, history } = this.props;
    return <WorkoutForm editMode history={history} handleSubmit={handleSubmit} />
  }
}

export default connect(null, { updateWorkout, setEditWorkoutForm })(EditWorkoutFormWrapper);