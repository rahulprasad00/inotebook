import React from 'react'
import { useContext ,useEffect} from 'react'   // importing useContext to access States using Context api
import noteContext from '../../context/notes/noteContext'     //importing the context

const About = () => {

  const a=useContext(noteContext);
  useEffect(() => {
    a.update();
  }, [])
  

  return (
    <div>
      This is About {a.state.name} and he is class {a.state.class}
    </div>
  )
}

export default About