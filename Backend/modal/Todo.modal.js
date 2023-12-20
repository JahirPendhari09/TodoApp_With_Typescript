const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    username:String,
    title:String,
    status:Boolean,
    description:String
},
{versionKey:false}
)

const TodoModal = mongoose.model("todo",todoSchema)

module.exports ={TodoModal}