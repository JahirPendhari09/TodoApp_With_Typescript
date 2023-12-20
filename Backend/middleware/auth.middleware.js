
var jwt = require('jsonwebtoken');

const auth = async(req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1];
    try{
        if(token){
            jwt.verify(token, 'todo_app',(err, decoded) =>{
                if(err) {
                    res.status(200).send({"msg":err})
                }
                else{
                    req.body.username = decoded.username
                    next();
                }
            });
        }else{
            res.status(400).send({"Massage":"Please Login !!"})
        }
    }
    catch(err){
        res.status(500).send({"Massage":err})
    }
}

module.exports={auth}