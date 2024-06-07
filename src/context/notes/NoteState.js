import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {

  const host = "http://localhost:5000/";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial)

  //Get all Notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NjQ3ZTBhMDg1MjIwNTljZjQ1OTE5In0sImlhdCI6MTcxNjkzMDU3N30.70JYVd9EbHyon19PHd_17ondDnvVEGt4hRke_ozfFMI"
      },
    });
    const json = await response.json();  //Parsing the json
    console.log(json)
    setNotes(json);

  }



  //Add a Note
  const addNote = async (title, description, tag) => {
    //API Call
    const response = await fetch(`${host}api/notes/addnote`, {
      method: "POST",
      headers: {                                                   //This is equivalent to the header of postman
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NjQ3ZTBhMDg1MjIwNTljZjQ1OTE5In0sImlhdCI6MTcxNjkzMDU3N30.70JYVd9EbHyon19PHd_17ondDnvVEGt4hRke_ozfFMI"
      },
      body: JSON.stringify({ title, description, tag }),          //This is equivalent to the body of postman
    });

    console.log("Note added")
    const json = await response.json();  //Parsing the json
    console.log(json)
    // let note = {
    //   "_id": "665b7rahulbb4b75d43adf3559evdfb",
    //   "user": "665647e0a08522059cf45919",
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "date": "2024-06-01T19:05:36.425Z",
    //   "__v": 0
    // }
    let note=json;
    console.log(note);
    setNotes(notes.concat(note));
  }

  //Delete a Note
  const deleteNote = async (id) => {
    //API Call
    const response = await fetch(`${host}api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NjQ3ZTBhMDg1MjIwNTljZjQ1OTE5In0sImlhdCI6MTcxNjkzMDU3N30.70JYVd9EbHyon19PHd_17ondDnvVEGt4hRke_ozfFMI"

      },
    });
    const json = await response.json();  //Parsing the json
    console.log(json);

    let newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
  }

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NjQ3ZTBhMDg1MjIwNTljZjQ1OTE5In0sImlhdCI6MTcxNjkzMDU3N30.70JYVd9EbHyon19PHd_17ondDnvVEGt4hRke_ozfFMI"

      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json)
    //Logic to edit note

    let newNotes= await JSON.parse(JSON.stringify(notes))     // We created a copy of the notes as in React we cannot directly update the notes in place

    for (let index = 0; index < newNotes.length; index++) {
      if (newNotes[index]._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }

    setNotes(newNotes);
  }


  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState