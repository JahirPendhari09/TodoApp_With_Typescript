import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Signup } from "../pages/Signup"
import { Homepage } from "../pages/Homepage"
import { Navbar } from "./Navbar"

const AllRoutes =()=>{
    return <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
    </Routes>
    </>
}

export {AllRoutes}