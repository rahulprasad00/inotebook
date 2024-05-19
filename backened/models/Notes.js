import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({
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