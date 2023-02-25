const express = require('express');
const router  = express.Router();
const { body, validationResult } = require('express-validator');
var fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');


//ROUTE 1 Get All the Notes using: Get "/api/auth/fetchallnotes".   login required
router.get('/fetchallnotes',fetchuser,async (req, res)=>{
    try {
    const notes = await Note.find({user: req.user.id});
    res.json(notes)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error");
    }   
})


//ROUTE 2 ADD a new notes using: POST "/api/auth/addnote".   login required
router.get('/addnote',fetchuser,[ 
    body('title','Enter a valid title').isLength({ min: 3 }),
    body('description','Description must be atleast 5 characters').isLength({ min: 5 }),
    ],async (req, res)=>{
    
    try {
    const {title,description,tag} = req.body;
    //If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } 
    const notes = new Note({
        title,description,tag,user: req.user.id
    })
    const saveNote = await notes.save()
    
    res.json(saveNote)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router