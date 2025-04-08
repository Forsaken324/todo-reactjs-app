import React, { useContext } from 'react';
import { TaskContext } from '../../contexts/TaskProvider';
import './todoform.css';

const TodoForm = () => {
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
    setSubmited(!submited);
  }

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
    setSubmited(!submited);
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
            <button className='cancel-btn' onClick={cancelTask}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoForm;
