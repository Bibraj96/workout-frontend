import React from 'react';
import { updateNewWorkoutForm } from '../actions/workoutForm.js'; // 1) grab action creator
import { connect } from 'react-redux' 


// Redux gives us a prop called updateNewWorkoutForm which, when invoked, Redux will dispatch
const WorkoutForm = ({ formData, updateNewWorkoutForm, userId, workout, history, handleSubmit }) => {
  const {title, date} = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewWorkoutForm(name, value) // 4) not just an invocation of action creator, this is redux dispatching it with appropriate args.
  }

  return (
    <form onSubmit={event => {

      console.log("Got to WorkoutForm")
      handleSubmit(event, formData, userId, history)
      }}>
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
    formData: state.workoutForm,
    userId
  }
}

// 2) pass action creator to redux's connect fn

export default connect(mapStateToProps, { updateNewWorkoutForm })(WorkoutForm);