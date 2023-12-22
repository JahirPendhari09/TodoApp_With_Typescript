import styled from "styled-components"

const Signup =()=>{
    return <>
        <DIV>
            <div className="signupBox">
                <form>
                    <h1>Signup Page</h1>
                    <input type="text" placeholder="Enter Username" required/>
                    <input type="text" placeholder="Enter Email" required />
                    <input type="password" placeholder="Enter Password"  required />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </DIV>
    </>
}

export {Signup}

const DIV = styled.div`
    width: 100%;
    
    .signupBox {
        width: 400px;
       padding: 20px;
       border: 1px solid black;
       margin: auto;
       margin-top:50px;
    }
    form {
        width: 90%;
        display: flex;
        flex-direction: column;
        margin: auto;
    }
`