import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskProvider";
import { useState } from "react";


// router stuff
import { useParams, useNavigate } from "react-router-dom";


const EditTask = () => {

    let navigation = useNavigate();

    const {
        _title,
        _setTitle,
        _description,
        _setDescription,
        _submited,
        _setSubmited,
        tasks,
        setTask,
    } = useContext(TaskContext);

    let { id } = useParams();

    const copy = [...tasks];
    const currentTask = copy[id];
    
    const [titleEdit, setTitleEdit] = useState(currentTask.title);
    const [descriptionEdit, setDescriptionEdit] = useState(currentTask.description);

    const handleCancel = () => {
        navigation("/");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedTasks = [...tasks]

        const currentTask = updatedTasks[id];

        const editedTask = {
            title: titleEdit,
            description: descriptionEdit,
            completed: currentTask.completed
        }

        updatedTasks[id] = editedTask;

        // const updatedTaskFiltered = updatedTasks.filter((item) => item !== currentTask);

        // // after removing the old task, add the new task
        // const newTaskArray = [editedTask];

        setTask(updatedTasks);

        navigation("/")
    }

    return (
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <p style={{"fontSize": "15px", "paddingBottom": "10px"}}>Welcome to the edit section</p>
                    <label htmlFor="title">Title: </label><br />
                    <input
                        type="text"
                        id="title"
                        value={titleEdit}
                        placeholder="Enter task title"
                        onChange={(e) => setTitleEdit(e.target.value)}
                    /><br />
                    <label htmlFor="description">Description: </label><br />
                    <textarea
                        name="description"
                        id="description"
                        rows={4}
                        cols={20}
                        placeholder="Enter task description"
                        value={descriptionEdit}
                        onChange={(e) => setDescriptionEdit(e.target.value)}
                    ></textarea>
                    <br />
                    <div className="btn-contain">
                        <button className='add-btn-form' type="submit">Add Task</button>
                        <button type='button' onClick={handleCancel} className='cancel-btn'>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditTask;