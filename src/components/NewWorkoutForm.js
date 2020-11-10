import React from 'react';
import { updateNewWorkoutForm } from '../actions/newWorkoutForm.js';
import { connect } from 'react-redux'

const NewWorkoutForm = ({ title, date, history }) => {

  const handleChange = event => {
    const { name, value } = event.target
    updateNewWorkoutForm(name, value)
  }
  
  const handleSubmit = event => {
    event.preventDefault()
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
      placeholder="Date" 
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
  const { title, date } = state.newWorkoutForm
  return {
    title,
    date
  }
}

export default connect(mapStateToProps, { updateNewWorkoutForm })(NewWorkoutForm);