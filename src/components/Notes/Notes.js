import React from 'react'
import { useContext } from 'react'
import noteContext from '../../context/notes/noteContext'
import Noteitem from '../Noteitem/Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;

    return (
        <section class="text-gray-600 body-font">
            <div className='sm:text-3xl text-2xl font-medium title-font  text-gray-900 text-center'>Your Notes</div>
            <div class="container px-5 py-10 mx-auto flex flex-wrap">
                {notes.map((note) => {
                    return <Noteitem note={note} />;
                })}
            </div>
        </section>


    )
}

export default Notes
