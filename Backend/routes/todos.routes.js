const express = require("express");
const { totalmem } = require("os");
const { TodoModal } = require("../modal/Todo.modal");
const { auth } = require("../middleware/auth.middleware");

const todoRoutes = express.Router();
todoRoutes.use(auth)

// GET request for Todo
todoRoutes.get("/", async(req,res)=>{
    const {username}= req.body
    try{
        const todos = await TodoModal.find({username});
        res.status(200).send(todos)

    }catch(err){
        res.status(500).send({"Massage":err})
    }
})

// POST Request for Todo 

todoRoutes.post("/create", async(req,res)=>{
    try{
        const newTodo = new TodoModal(req.body);
        await newTodo.save()
        res.status(200).send({"msg":"New Todo has been Added", "todo":req.body});

    }catch(err){
        res.status(500).send({"Massage":err})
    }
})

// PATCH Request for Todo 

todoRoutes.patch("/update/:id", async(req,res)=>{
    const {id} = req.params;
    const {username}= req.body
    try{
        const todo = await TodoModal.findOne({_id:id});
        if(todo){
            if(username == todo.username)
            {
                await TodoModal.findByIdAndUpdate({_id:id}, req.body);
                res.status(200).send({"msg":" Todo has been Updated", "todo":req.body});
            }else{
                res.status(400).send({"msg":"You Do not have Authority to update this Todo"});
            }
        }else{
            res.status(400).send({"Massage":`Invalid id :- ${id}`})
        }

    }catch(err){
        res.status(500).send({"Massage":err})
    }
})

// DELETE Request for Todo 

todoRoutes.delete("/delete/:id", async(req,res)=>{
    const {id} = req.params;
    const {username}= req.body
    try{
        const todo = await TodoModal.findOne({_id:id});
        if(todo){
            if(username == todo.username)
            {
                await TodoModal.findByIdAndDelete({_id:id});
                res.status(200).send({"msg":" Todo has been Deleted"});
            }else{
                res.status(400).send({"msg":"You Do not have Authority to Delete this Todo"});
            }
        }else{
            res.status(400).send({"Massage":`Invalid id :- ${id}`})
        }

    }catch(err){
        res.status(500).send({"Massage":err})
    }
})
module.exports = {todoRoutes}