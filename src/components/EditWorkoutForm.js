import React from 'react';
import { updateWorkout, deleteWorkout } from '../actions/myWorkouts'
import { setEditWorkoutForm, resetNewWorkoutForm } from '../actions/workoutForm'
import WorkoutForm from './WorkoutForm.js'
import { connect } from 'react-redux'

class EditWorkoutForm extends React.Component {

  componentDidMount() {
    this.props.workout && this.props.setEditWorkoutForm(this.props.workout)
  }

  componentDidUpdate(preProps) {
    this.props.workout && !preProps.workout && this.props.setEditWorkoutForm(this.props.workout)
  }

  componentWillUnmount() {
    this.props.resetNewWorkoutForm()
  }

  handleSubmit = (formData) => {
    const { updateWorkout, workout, history } = this.props
    updateWorkout({
      ...formData,
      workoutId: workout.id
    }, history)
  }
  
  render() {
    const { workout, deleteWorkout, history } = this.props;
    const workoutId = workout ? workout.id : null
    return <div>
              <WorkoutForm editMode handleSubmit={this.handleSubmit} /> 
              <button className="deleteButton" onClick={() => deleteWorkout(workoutId, history)}>Delete Workout</button>
           </div> 
  }
}

export default connect(null, { updateWorkout, setEditWorkoutForm, resetNewWorkoutForm, deleteWorkout })(EditWorkoutForm);