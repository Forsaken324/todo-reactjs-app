
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import EditTask from './components/tasks/EditTask.jsx';
import TodoForm from './components/main/TodoForm.jsx';
import { TaskProvider } from './contexts/TaskProvider.jsx';
import Todo from './components/main/Todo.jsx';

createRoot(document.getElementById('root')).render(
  <TaskProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Todo />} />
          <Route path="todos/new" element={<TodoForm />}/>
          <Route path='todos/edit/:id' element={<EditTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </TaskProvider>
)
