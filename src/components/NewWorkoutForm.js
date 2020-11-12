import React from 'react';
import { updateNewWorkoutForm } from '../actions/newWorkoutForm.js'; // 1) grab action creator
import { createWorkout } from '../actions/myWorkouts'
import { connect } from 'react-redux' 


// Redux gives us a prop called updateNewWorkoutForm which, when invoked, Redux will dispatch
const NewWorkoutForm = ({ formData, updateNewWorkoutForm, createWorkout, userId, history }) => {
  const {title, date} = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewWorkoutForm(name, value) // 4) not just an invocation of action creator, this is redux dispatching it with appropriate args.
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    createWorkout({
      ...formData,
      userId
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
      placeholder="Title" 
      name="title"
      onChange={handleChange}
      value={title}
      /><br/>
      <input
      placeholder="YYYY-MM-DD" 
      name="date"
      onChange={handleChange}
      value={date}
      /><br/>
      <input 
      type="submit" 
      value="Create Workout"/>
    </form>
)}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.newWorkoutForm,
    userId
  }
}

// 2) pass action creator to redux's connect fn

export default connect(mapStateToProps, { updateNewWorkoutForm, createWorkout })(NewWorkoutForm);