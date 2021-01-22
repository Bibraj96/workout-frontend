import React from 'react';
import { updateNewWorkoutForm } from '../actions/workoutForm.js';
import { connect } from 'react-redux' 

const WorkoutForm = ({ formData, updateNewWorkoutForm, handleSubmit, editMode }) => {
  const {title, date, description} = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewWorkoutForm(name, value)
  }

  return (
    <div className="form">
      <h2>Add a New Workout</h2><br></br>
      <form onSubmit={event => {
        event.preventDefault()
        console.log("Got to WorkoutForm")
        handleSubmit(formData)
        }}>
        <input className="formInput"
        placeholder="Title" 
        name="title"
        onChange={handleChange}
        value={title}
        /><br/>
        <input className="formInput"
        placeholder="YYYY-MM-DD" 
        name="date"
        onChange={handleChange}
        value={date}
        /><br/>
        <textarea className="formInput"
        placeholder="Description" 
        name="description"
        onChange={handleChange}
        value={description}
        /><br/>
        <input className="btn newButton"
        type="submit" 
        value={editMode ? "Update Workout" : "Create Workout"}/>
      </form>
    </div>
)}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.workoutForm,
    userId
  }
}

export default connect(mapStateToProps, { updateNewWorkoutForm })(WorkoutForm);