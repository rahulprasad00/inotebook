import React from 'react'
import { useContext } from 'react'
import noteContext from '../../context/notes/noteContext'

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote} = context;

  const { note ,updateNote} = props
  return (
    <div className="p-4 lg:w-1/2 w-full">
      <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{note.title}</h2>
          <p className="leading-relaxed text-base">{note.description}</p>
          <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer" onClick={()=>{updateNote(note)}}>View
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
          <i className="fa-solid fa-trash cursor-pointer" onClick={()=>{deleteNote(note._id)}}></i>

      </div>
    </div>

  )
}

export default Noteitem
