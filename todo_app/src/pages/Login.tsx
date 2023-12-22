import styled from "styled-components"

const Login = () => {
    return <>
        <DIV>
            <div className="loginBox">
                <form>
                    <h1>Login Page</h1>
                    <input type="text" placeholder="Enter Username" required/>
                    <input type="text" placeholder="Enter Email" required />
                    <input type="password" placeholder="Enter Password"  required />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </DIV>

    </>
}

export { Login }


const DIV = styled.div`
    width: 100%;
    .loginBox {
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