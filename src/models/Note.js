const mongoose = require('mongoose');
const noteSchema = mongoose.Schema({
    id:{
        type:String,
        required :true,
        unique:true,
    },
    userId:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
    },
    dateAdded:{
        type:Int32Array,
        required :true,
    }
});
module.exports = mongoose.model("Note",noteSchema);