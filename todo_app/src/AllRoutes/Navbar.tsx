import { Link } from "react-router-dom"
import styled from 'styled-components';


const Navbar = () => {
    return <>
        <DIV>
            <div className="box-1">
                <Link to="/">Home</Link>
            </div>
            <div className="box-2">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </DIV>
    </>
}

export { Navbar }

const DIV = styled.div`
    display: flex;
    width: 100%;
    height: 50px;
    padding-top: 10px;
    background-color:lightblue;
    font-size: 20px;
    .box-1 {
        width: 100%;
        text-align:left;
        margin-left: 20px;
    }
    .box-2 {
        width: 100%;
        display: flex;
        justify-content:flex-end;
        margin-right:20px;
        gap:100px;
    }
    a {
        text-decoration:none;
    }
    a:hover{
        color:red;
    }
    
`