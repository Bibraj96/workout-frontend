import React from 'react';
import { updateNewWorkoutForm } from '../actions/workoutForm.js'; // 1) grab action creator
import { connect } from 'react-redux' 


// Redux gives us a prop called updateNewWorkoutForm which, when invoked, Redux will dispatch
const WorkoutForm = ({ formData, updateNewWorkoutForm, userId, workout, handleSubmit, editMode }) => {
  const {title, date, description} = formData

  const handleChange = event => {
    const { name, value } = event.target
    updateNewWorkoutForm(name, value) // 4) not just an invocation of action creator, this is redux dispatching it with appropriate args.
  }

  return (
    <div className="form">
      <form onSubmit={event => {
        event.preventDefault()
        console.log("Got to WorkoutForm")
        handleSubmit(formData) //passed down from either wrapper and invoked here
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
        <input className="newButton"
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

// 2) pass action creator to redux's connect fn

export default connect(mapStateToProps, { updateNewWorkoutForm })(WorkoutForm);