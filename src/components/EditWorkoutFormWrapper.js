import React from 'react';
import { updateWorkout } from '../actions/myWorkouts'
import { setEditWorkoutForm, resetNewWorkoutForm } from '../actions/workoutForm'
import WorkoutForm from './WorkoutForm.js'
import { connect } from 'react-redux'
// We need to make this a class component so that we can populate the edit form fields using a componentDidMount

class EditWorkoutFormWrapper extends React.Component {

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
    const { handleSubmit, history } = this.props;
    return <WorkoutForm editMode handleSubmit={this.handleSubmit} /> // we're passing these to the WorkoutForm to be invoked
  }
}

export default connect(null, { updateWorkout, setEditWorkoutForm, resetNewWorkoutForm })(EditWorkoutFormWrapper);