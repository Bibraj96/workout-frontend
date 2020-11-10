import React from 'react';
import { updateNewWorkoutForm } from '../actions/newWorkoutForm.js';
import { connect } from 'react-redux'

const NewWorkoutForm = () => {

  const handleChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    updateNewWorkoutForm(name, value)
  }

  return (
    <form>
      <input
      placeholder="Title" 
      name="title"
      onChange={handleChange}
      value={""}
      /><br/>
      <input
      placeholder="Date" 
      name="date"
      onChange={handleChange}
      value={""}
      /><br/>
      <input 
      type="submit" 
      value="Create Workout"/>
    </form>
)}

export default connect()(NewWorkoutForm);