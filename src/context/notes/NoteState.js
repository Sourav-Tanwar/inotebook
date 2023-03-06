import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  //Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmOWRhOWQ0ZTEwM2EwZTBhZWQyOTRkIn0sImlhdCI6MTY3NzMzODM3NH0.STJvcF9rcHnKTeuwjiV0NU0bkgP9maCDvQUfgPbkTgg"
      },
      
    });

    const json =await response.json()
    console.log(json)
    setNotes(json)
  }


  //Add a Note
  const addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmOWRhOWQ0ZTEwM2EwZTBhZWQyOTRkIn0sImlhdCI6MTY3NzMzODM3NH0.STJvcF9rcHnKTeuwjiV0NU0bkgP9maCDvQUfgPbkTgg"
      },
      body: JSON.stringify({title,description,tag}),
    });

    console.log("Adding a new note");
    const note = {
      "_id": "63fa26e1e53e735336234254a6639",
      "user": "63f9da9d4e103a0e0aed294d",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-02-25T15:18:57.307Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }
  //Delete a Note
  const deleteNote = (id) => {
    console.log("Deleting the note with id" + id)
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }
  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmOWRhOWQ0ZTEwM2EwZTBhZWQyOTRkIn0sImlhdCI6MTY3NzMzODM3NH0.STJvcF9rcHnKTeuwjiV0NU0bkgP9maCDvQUfgPbkTgg"
      },
      body: JSON.stringify({title,description,tag}),
    });
    const json = response.json();

    //Logic to edit client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;