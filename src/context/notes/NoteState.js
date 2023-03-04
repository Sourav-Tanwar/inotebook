import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState =(props)=>{
    const notesInitial = [
        {
          "_id": "63f9e0a3115323568e5d7e134c0",
          "user": "63f9da9d4e103a0e0aed294d",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-25T10:19:15.541Z",
          "__v": 0
        },
        {
          "_id": "63f5235a2531112a9bfff385119e",
          "user": "63f9da9d4e103a0e0aed294d",
          "title": "My Title1",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-25T15:11:45.820Z",
          "__v": 0
        },
        {
          "_id": "63fa53426e1e53e7353364a56639",
          "user": "63f9da9d4e103a0e0aed294d",
          "title": "My Title1 updated",
          "description": "Please wake up early updated",
          "tag": "personal",
          "date": "2023-02-25T15:18:57.307Z",
          "__v": 0
        },
        {
          "_id": "63f9e0a3113568e5d753e134c0",
          "user": "63f9da9d4e103a0e0aed294d",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-25T10:19:15.541Z",
          "__v": 0
        },
        {
          "_id": "63f52a2531112a9bfff385116559e",
          "user": "63f9da9d4e103a0e0aed294d",
          "title": "My Title1",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-25T15:11:45.820Z",
          "__v": 0
        },
        {
          "_id": "63fa26e1e53e735336234254a6639",
          "user": "63f9da9d4e103a0e0aed294d",
          "title": "My Title1 updated",
          "description": "Please wake up early updated",
          "tag": "personal",
          "date": "2023-02-25T15:18:57.307Z",
          "__v": 0
        }
      ]
      const [notes, setNotes]= useState(notesInitial)

      //Add a Note
      const addNote = (title,description,tag)=>{
        console.log("Adding a new note");
        const note ={
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
      const deleteNote = (id)=>{  
        console.log("Deleting the note with id" + id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }
      //Edit a Note
      const editNote = (id,title, description,tag)=>{
        
      }
    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;