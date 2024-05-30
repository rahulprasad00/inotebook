import mongoose from "mongoose";
const { Schema } = mongoose;

const NotesSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'                      // written in export statement of User.js
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    tag:{
        type:String,
        default:"General",
    },
    date:{
        type:Date,
        default:Date.now 
    },
  });

export const Notes = mongoose.model('notes', NotesSchema)