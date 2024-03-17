import { useContext, useRef } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, error, dispatch } = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        // console.log("------------"+user+"..."+isFetching);
        loginCall({ email: email.current.value, password : password.current.value}, dispatch);
        // console.log("------------"+user.username+"..."+isFetching);
    };
    
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social Networking</h3>
                <span className="lognDesc">Connect with friends and families from any corner to any other corner of the world.</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                    <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
                    <input placeholder="Password" type = "password" required minLength="6" className="loginInput" ref = {password}/>
                    <button className="loginButton" type="submit" disabled={isFetching}>
                        {isFetching ? <CircularProgress color="inherit" size="20px"/> : "Log In"}
                    </button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">{isFetching ? <CircularProgress color="inherit" size="20px"/> : "Create a New Account"}</button>
                </form>
            </div>
        </div>
    </div>
  )
}
