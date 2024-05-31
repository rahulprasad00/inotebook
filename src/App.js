import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import NoteState from "./context/notes/NoteState";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NoteState><Navbar/><Home/></NoteState></>  //Wrapping all components in NoteState to use the states in every component
    },
    {
      path: "/about",
      element: <><NoteState><Navbar/><About/></NoteState></>
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
