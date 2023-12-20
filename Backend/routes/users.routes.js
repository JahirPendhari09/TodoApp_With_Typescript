
const express = require("express");
const { UserModal } = require("../modal/User.modal");

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const userRoutes = express.Router();

userRoutes.post("/create",async(req,res)=>{
    const {email,password,username} = req.body;
    try{
        const isEmailPresent = await UserModal.findOne({email});
        if(isEmailPresent)
        {
            res.status(400).send({"Massage":"This Email Address is Already Used please use Different Email Address"})
        }else{
            bcrypt.hash(password, 5 , async(err, hash)=> {
                if(err)
                {
                    res.status(200).send({"Massage":err})
                }else{
                    const newUser = new UserModal({
                        email,username,password:hash
                    });
                    await newUser.save();
                    res.status(200).send({"Massage":"New User has been Added","new User":req.body})
                }
            });
        }

    }catch(err){
        res.status(500).send({"Massage":err})
    }

})


userRoutes.post("/login", async(req,res)=>{
    const {email,password}= req.body;
    try{
        const user = await UserModal.findOne({email})
        if(user)
        {
            const token = jwt.sign({ username:user.username,}, 'todo_app', { expiresIn: '7d' });
            bcrypt.compare(password, user.password, (err, result)=> {
                if(result){
                    res.status(200).send({"Massage":"Login Successful", "token":token})
                }else{
                    res.status(200).send({"Massage":"Password is Invalid"})
                }
            });
        }else{
            res.status(400).send({"Massage":"Email Address is Invalid"})
        }

    }catch(err){
        res.status(500).send({"Massage":err})
    }
})


module.exports ={userRoutes}


