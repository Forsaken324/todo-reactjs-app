import React, { useContext, useState } from 'react';
import { TaskContext } from '../../contexts/TaskProvider';
import TodoForm from './TodoForm';

// icons
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

// router stuff
import { useNavigate } from 'react-router-dom';


import "./todo.css"


const Todo = () => {
    const { submited, setSubmited, tasks, setTask } = useContext(TaskContext);

    let navigate = useNavigate();
    // Toggle the state to show/hide the form
    const toggleForm = () => {
        navigate("todos/new");
    };

    const completeTask = (index) => {
        // Copy the current tasks array
        // ... spread operator
        const updatedTasks = [...tasks];

        // Update the completed status of the task at the given index
        updatedTasks[index].completed = true;

        // Set the updated tasks array to the state
        setTask(updatedTasks);
    };

    const editTask = (index) => {
        navigate(`todos/edit/${index}`);



    }

    const deleteTask = (index) => {
        const updatedTasks = [...tasks];

        const deleteItem = updatedTasks[index];

        const newTasks = updatedTasks.filter((item) => item != deleteItem);

        setTask(newTasks);

    }

    return (
        <section className="todo">
                <div className="todo-main">
                    <div className="todo-head-add-btn">
                        <div className="header-sec">
                            <h2>Todo List</h2>
                        </div>
                        <div className="add-btn">
                            <button className='add-item' onClick={toggleForm}>Add Item</button>
                        </div>
                    </div>
                    <div className="tasks">
                        {tasks.length > 0 ? (
                            tasks.map((item, index) => (
                                <div key={index} className="contain-task">
                                    <div className="todo-item">
                                        <div className="title-and-description">
                                            <h2>Title: {item.title}</h2>
                                            <p>Description: {item.description}</p>
                                        </div>
                                        <div className="status-container">
                                            {item.completed ? <FaCheckCircle className='completed' /> : <IoMdCloseCircle className='not-completed' />}
                                        </div>

                                    </div>

                                    <div className="helper-btns">
                                        <div className="complete-sect">
                                            <button className='complete-btn' onClick={() => completeTask(index)}>complete</button>
                                        </div>
                                        <div className="other-help-btns">
                                            <div className="update-sec">
                                                <button className='update-btn' aria-label='update' onClick={() => editTask(index)}><MdModeEditOutline style={{"fill": "white"}} /></button>
                                            </div>
                                            <div className="delete-sec">
                                                <button className='delete-btn' aria-label='delete' onClick={() => deleteTask(index)}><MdDelete style={{"fill": "white"}} /></button>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            ))
                        ) : (
                            <p>No tasks added yet.</p>
                        )}
                    </div>
                </div>
        </section>

    );
};

export default Todo;
