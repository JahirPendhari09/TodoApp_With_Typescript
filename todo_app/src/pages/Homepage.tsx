import { useState } from "react"
import { TodoCart } from "../components/TodoCart";

 export type TODOS= {
    title:String,
    description:String,
    status:Boolean,
    id:Number
}
const Homepage=()=>{
    const [ todos, setTodos ] = useState<TODOS[]>([{
        title:"Learn Java",
        description:"Learning Java First Time",
        status:false,
        id:1
    }]);

    return <>
    <div>
        <h1>Home Page</h1>
        {
            todos?.length >0 && todos?.map((item,i)=>{
                return <TodoCart {...item} key ={i}/>
            })
        }

    </div>
    </>
}

export {Homepage}