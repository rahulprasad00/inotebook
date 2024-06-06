import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState=(props)=>{

    const notesInitial=[
        {
            "_id": "6656d93fabd7aa6036ebd8ad",
            "user": "665647e0a08522059cf45919",
            "title": "My Routine",
            "description": "Wake up early",
            "tag": "personal",
            "date": "2024-05-29T07:29:03.064Z",
            "__v": 0
        },
        {
            "_id": "665b70fcbb4b75d3adf35598",
            "user": "665647e0a08522059cf45919",
            "title": "My Routine5",
            "description": "Wake up early",
            "tag": "personal",
            "date": "2024-06-01T19:05:32.975Z",
            "__v": 0
        },
        {
            "_id": "665b70febb4b75d3adf3559a",
            "user": "665647e0a08522059cf45919",
            "title": "My Routine5",
            "description": "Wake up early",
            "tag": "personal",
            "date": "2024-06-01T19:05:34.657Z",
            "__v": 0
        },
        {
            "_id": "665b70ffbb4b75d3adf3559c",
            "user": "665647e0a08522059cf45919",
            "title": "My Routine5",
            "description": "Wake up early",
            "tag": "personal",
            "date": "2024-06-01T19:05:35.517Z",
            "__v": 0
        },
        {
            "_id": "665b7100bb4b75d3adf3559e",
            "user": "665647e0a08522059cf45919",
            "title": "My Routine5",
            "description": "Wake up early",
            "tag": "personal",
            "date": "2024-06-01T19:05:36.425Z",
            "__v": 0
        }
    ]
    
    const [notes, setNotes] = useState(notesInitial)
    
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState