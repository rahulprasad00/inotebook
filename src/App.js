import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert/Alert";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NoteState><Navbar/><Home/><Alert/></NoteState></>  //Wrapping all components in NoteState to use the states in every component
    },
    {
      path: "/about",
      element: <><NoteState><Navbar/><About/></NoteState></>
    },
    {
      path: "/signup",
      element: <><SignUp/></>
    },
    {
      path: "/login",
      element: <><Login/></>
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
