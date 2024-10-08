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
import { useState } from "react";

function App() {

  const [showAlert, setalert] = useState({message:"Invalid Credentials",type:"hidden"});

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NoteState><Navbar /><Alert showAlert={showAlert} setalert={setalert}/><Home setalert={setalert} /></NoteState></>  //Wrapping all components in NoteState to use the states in every component
    },
    {
      path: "/about",
      element: <><NoteState><Navbar /><About /></NoteState></>
    },
    {
      path: "/signup",
      element: <><Alert showAlert={showAlert} setalert={setalert}/><SignUp setalert={setalert} /></>
    },
    {
      path: "/login",
      element: <><Alert showAlert={showAlert} setalert={setalert}/><Login  setalert={setalert}/></>
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
