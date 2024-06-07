import React from 'react'
import { useContext ,useState } from 'react'
import noteContext from '../../context/notes/noteContext'

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title:"",description:"",tag:""})

    const handleClick = (e) => {
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""})             //To reset the notes field values 
    }
    const onChange = (e) => {
      setNote({...note,[e.target.name]:e.target.value})           // ... is the spread operator which ensures whatever previous value of note remains as it and new values are overwritten. Spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

}
    

    return (
        <section className="text-gray-600 body-font relative ">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Notes</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">"Scribble your dreams into reality"</p>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="title" className="leading-7 text-sm text-gray-600"  >Title</label>
                                <input type="text" id="title" name="title" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={onChange} value={note.title} required/>   
                                {/* value is added to reset the input field value on succesfull addition of notes        */}
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="tag" className="leading-7 text-sm text-gray-600"  >Tag</label>
                                <input type="text" id="tag" name="tag" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={onChange} value={note.tag} />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="description" className="leading-7 text-sm text-gray-600" >Description</label>
                                <textarea id="description" name="description" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={onChange} value={note.description} required></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleClick}>+ Add</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AddNote
