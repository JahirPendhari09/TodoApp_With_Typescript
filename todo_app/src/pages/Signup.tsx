import { useRef } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Signup =()=>{
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef =useRef<HTMLInputElement>(null);
    const usernameRef =useRef<HTMLInputElement>(null);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const newUser = {
            email:emailRef.current?.value,
            password:passwordRef.current?.value,
            username:usernameRef.current?.value
        }
        console.log(newUser)
      };

    return <>
        <DIV>
            <div className="signupBox">
                <form onSubmit={handleSubmit}>
                    <h2>Signup Page</h2>
                    <input type="text" placeholder="Enter Username" ref={usernameRef} required/>
                    <input type="text" placeholder="Enter Email" ref={emailRef} required />
                    <input type="password" placeholder="Enter Password" ref={passwordRef} required />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an Account <Link to="/login">Login</Link></p>
            </div>
        </DIV>
    </>
}

export {Signup}

const DIV = styled.div`
    width: 100%;
    
    .signupBox {
        width: 350px;
       padding: 20px;
       border: 1px solid black;
       border-radius:20px;
       margin: auto;
       margin-top:50px;
    }
    form {
        width: 90%;
        display: flex;
        flex-direction: column;
        margin: auto;
    }
    input {
        padding: 10px;
        margin-bottom:10px;
        border-radius:5px;
        cursor: pointer;
    }
    input:nth-child(5)
    {
        font-size: 20px;
        background-color:green;
        color:white;
    }
    a {
        color: red;
        text-decoration:none;
    }

`