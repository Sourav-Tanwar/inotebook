import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState =(props)=>{
    const notesInitial = [
        {
          "_id": "63f9e0a3113568e5d7e134c0",
          "user": "63f9da9d4e103a0e0aed294d",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-25T10:19:15.541Z",
          "__v": 0
        },
        {
          "_id": "63fa2531112a9bfff385119e",
          "user": "63f9da9d4e103a0e0aed294d",
          "title": "My Title1",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-25T15:11:45.820Z",
          "__v": 0
        },
        {
          "_id": "63fa26e1e53e7353364a6639",
          "user": "63f9da9d4e103a0e0aed294d",
          "title": "My Title1 updated",
          "description": "Please wake up early updated",
          "tag": "personal",
          "date": "2023-02-25T15:18:57.307Z",
          "__v": 0
        },
        {
          "_id": "63f9e0a3113568e5d7e134c0",
          "user": "63f9da9d4e103a0e0aed294d",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-25T10:19:15.541Z",
          "__v": 0
        },
        {
          "_id": "63fa2531112a9bfff385119e",
          "user": "63f9da9d4e103a0e0aed294d",
          "title": "My Title1",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-25T15:11:45.820Z",
          "__v": 0
        },
        {
          "_id": "63fa26e1e53e7353364a6639",
          "user": "63f9da9d4e103a0e0aed294d",
          "title": "My Title1 updated",
          "description": "Please wake up early updated",
          "tag": "personal",
          "date": "2023-02-25T15:18:57.307Z",
          "__v": 0
        }
      ]
      const [notes, setnotes]= useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes,setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;