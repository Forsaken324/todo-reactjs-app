import { TaskProvider } from "./contexts/TaskProvider";

// import Todo from "./components/main/Todo";
import NavBar from "./components/navigation/NavBar";

import "./App.css";
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavBar />
      
      <div className="outlet">
        <Outlet />
      </div>
    </>
  )
}


export default App;
