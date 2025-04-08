import { TaskProvider } from "./contexts/TaskProvider";
import Todo from "./components/main/Todo";
import NavBar from "./components/navigation/NavBar";

import "./App.css";

const App = () => {
  return (
    <>
      <TaskProvider>
        <NavBar />
        <Todo />
      </TaskProvider>
    </>
  )
}


export default App;
