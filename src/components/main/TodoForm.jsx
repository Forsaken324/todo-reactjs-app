import React, { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskProvider';
import './todoform.css';

// router stuff

import { useNavigate } from 'react-router-dom';

const TodoForm = () => {

  let navigate = useNavigate();

  const {
    title,
    setTitle,
    description,
    setDescription,
    submited,
    setSubmited,
    tasks,
    setTask,
  } = useContext(TaskContext);

  const cancelTask = () => {
    navigate("/")
  }

  // navigator
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty title or description to prevent submitting empty tasks
    if (!title.trim() || !description.trim()) {
      alert('Please fill out both fields!');
      return;
    }

    const newTask = {
      title: title,
      description: description,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTask(updatedTasks);

    // Reset form fields after submission
    setTitle('');
    setDescription('');

    // Trigger submission state change
    // setSubmited(!submited); // no need, making use of react router now

    // navigating to home screen

    navigate("/");
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label><br />
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task title"
          /><br />
          <label htmlFor="description">Description: </label><br />
          <textarea
            name="description"
            id="description"
            rows={4}
            cols={20}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter task description"
          ></textarea>
          <br />
          <div className="btn-contain">
            <button className='add-btn-form' type="submit">Add Task</button>
            <button type='button' className='cancel-btn' onClick={cancelTask}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
