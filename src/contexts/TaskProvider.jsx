import { createContext, useEffect, useState } from "react";


export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
    const storedTasks = JSON.parse( localStorage.getItem('tasks')) || [];
    const [tasks, setTask] = useState(storedTasks);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [submited, setSubmited] = useState(true);


    useEffect(() => {
        if(tasks.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }, [tasks])

    return (
        <>
            <TaskContext.Provider value={
                {
                    title,
                    setTitle,
                    description,
                    setDescription,
                    submited,
                    setSubmited,
                    tasks,
                    setTask,
                }
            }>
                {children}
            </TaskContext.Provider>
        </>
    )

}