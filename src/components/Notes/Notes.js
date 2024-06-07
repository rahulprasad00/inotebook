import React, { useEffect, useState } from 'react'
import { useContext} from 'react'
import noteContext from '../../context/notes/noteContext'
import Noteitem from '../Noteitem/Noteitem';
import AddNote from '../AddNote/AddNote';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes ,editNote } = context;
    const [showing, setshowing] = useState('hidden');
    const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "default" })


    const handleClick = (e) => {
        editNote(note.id,note.etitle,note.edescription,note.etag)
        setshowing("hidden");
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        getNotes();             // UseEffect to fetch all notes Only once
    }, [])                     // No Parameter is passed => function run only once

    const updateNote = (currentNote) => {
        setshowing('');  //current keyword is used with Useref
        setNote({id:currentNote._id,etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag})
    }

    return (
        <>
            <AddNote />

            <div className={`fixed z-10 inset-0 overflow-y-auto ${showing} drop-shadow-lg`}>
                <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-[50rem]  sm:w-full sm:p-6">
                        <div className="sm:flex sm:items-start">
                            <div
                                className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                <i className="fa-solid fa-pen-to-square"></i>
                                
                            </div>
                            <div className="mt-4 pt-2 text-center sm:mt-0 sm:ml-4 sm:text-left w-full mr-[2rem] h-full">
                                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                    Edit Note
                                </h3>

                                <div className=" w-full">
                                    <label htmlFor="etitle" className="leading-7 text-sm text-gray-600"  >Title</label>
                                    <input type="text" id="etitle" name="etitle" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={onChange} value={note.etitle} />
                                </div>

                                <div className="relative">
                                    <label htmlFor="etag" className="leading-7 text-sm text-gray-600"  >Tag</label>
                                    <input type="text" id="etag" name="etag" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={onChange} value={note.etag} />
                                </div>
                                <div className="relative">
                                    <label htmlFor="edescription" className="leading-7 text-sm text-gray-600" >Description</label>
                                    <textarea id="edescription" name="edescription" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-[30rem] text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={onChange} value={note.edescription}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse mr-[2rem] ">
                            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto ">
                                <button type="button" onClick={handleClick}
                                    className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-green-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-green-500 focus:outline-none focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                    Save Changes
                                </button>
                            </span>
                            <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                                <button type="button" onClick={()=>{setshowing("hidden")}}
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                    Cancel
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>




            <section className="text-gray-600 body-font">
                <div className='sm:text-3xl text-2xl font-medium title-font  text-gray-900 text-center'>Your Notes</div>
                <div className="container px-5 py-10 mx-auto flex flex-wrap">
                    {notes.map((note) => {
                        return <Noteitem key={note._id} note={note} updateNote={updateNote} />;
                    })}
                </div>
            </section>
        </>


    )
}

export default Notes
