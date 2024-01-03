import { useEffect, useRef, useState } from "react";
import { Link, Navigate } from "react-router-dom"
import styled from "styled-components"

const Login = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [showPassword, setShowpassword] = useState<boolean>(false)
    const [user, setUser]=useState({email:"",password:""})

type userData =  {
    email:string,
    password:string,
    sername:string
}
    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        if(user?.email == emailRef.current?.value)
        {
            if(user?.password == passwordRef.current?.value)
            {
                alert("Login Success");
                const userDataJSON = JSON.stringify(true);
                localStorage.setItem('isAuth', userDataJSON);
                window.location.href="/"
            }else{
               alert("Password is Invalid");
            }
        }else{
            alert("Email is Invalid");
        }
        
    };
    const getStoredUserData = () => {
        const storedUserData = localStorage.getItem('user');

        if (storedUserData) {
            const parsedUserData = JSON.parse(storedUserData) as userData;
            setUser(parsedUserData);
        }
    };

    useEffect(()=>{
        getStoredUserData()
    },[])

    return <>
        <DIV>
            <div className="loginBox">
                <form onSubmit={handleSubmit}>
                    <h2>Login Page</h2>
                    <input type="text" placeholder="Enter Email" ref={emailRef} required />
                    <div className="password-input">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            ref={passwordRef}
                            required
                        />
                        <input
                            type="checkbox"
                            className="show-password-checkbox"
                            onClick={() => setShowpassword(!showPassword)}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
                <p>Don't have an Account <Link to="/signup">Register</Link></p>
            </div>
        </DIV>

    </>
}

export { Login }


const DIV = styled.div`
    width: 100%;
    .loginBox {
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
    form > input {
        padding: 10px;
        margin-bottom:10px;
        border-radius:5px;
        cursor: pointer;
    }
    input:nth-child(4)
    {
        font-size: 20px;
        background-color:green;
        color:white;
    }
    a {
        color: red;
        text-decoration:none;
    }
    .password-input {
        border:2px solid black;
        border-radius:5px;
        margin-bottom:10px;
        display: flex;
        position: relative;
        overflow: hidden;
    }
    .password-input input:nth-child(1){
        width: 100%;
        padding: 10px;
        border: none;
        
    }
    .show-password-checkbox {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }

`