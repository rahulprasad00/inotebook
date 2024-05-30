import express from 'express';
import fetchuser from '../middleware/fetchuser.js';
import { Notes } from '../models/Notes.js';
import { validationResult, body } from 'express-validator';

const router = express.Router();

//ROUTE 1:Get All the Notes using GET:"/api/notes/getuser".login Required.

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });   // find is used because we need to find 'all' notes of a user.
        res.json(notes); // req.user can be used because we have imported fetchuser.
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }

})

//ROUTE 2:Add a new Note using: POST "/api/notes/addnote".login Required.

router.post('/addnote', fetchuser, [

    body('title', 'Enter valid title').isLength({ min: 3 }),
    body('description', 'Enter at least 5 characters').isLength({ min: 5 })
], async (req, res) => {
    //If there are errors, return Bad request and the errors.
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { title, description, tag } = req.body;

        const note = new Notes({
            title, description, tag, user: req.user.id
        })

        const savedNote = await note.save();

        res.json(savedNote);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }

})

//ROUTE 3:Update Note using: PUT "/api/notes/updatenote".login Required.

router.put('/updatenote/:id', fetchuser, async (req, res) => {   //:id is used to take id as parameter to update notes of specific user

    const { title, description, tag } = req.body;
    //Create newNote object

    try {
        const newNote = {};

        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") };

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");  // if current user tries to update the notes of other user
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json({ note });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }

})


//ROUTE 4:Delete Note using: DELETE "/api/notes/deletenote".login Required.

router.delete('/deletenote/:id', fetchuser, async (req, res) => {   //:id is used to take id as parameter to delete notes of specific user


    // Find note to be deleted and delete it
    try {
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not Found") };

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");  // if current user tries to delet the notes of other user
        }

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", note: note });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error");
    }

})
export default router;