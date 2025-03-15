import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState, useEffect } from "react";
import auth from "../../config/firebase";

import { StoreContext } from "../../context/store";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPassword] = useState("");
    const [error, setError] = useState("");
    const { setCart } = useContext(StoreContext);

    const handleLogin = (e) => {
       
        
        console.log('User logged in:', { email, pass });
        signInWithEmailAndPassword(auth,email,pass).then((res)=>{
            navigate('/')
        })
        .catch(()=>{
            console.log("Error")
        })

      
    };
   

    return (
        <div className="logins">
            <div className="logincontainer">
                <h1>Login</h1>
                <div className="loginfields">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={pass}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button onClick={() => handleLogin(email, pass)}>Login</button>
                <p className="error">{error}</p>
                <p className="loginp">
                    Create an account?
                    <Link to="/loginsignup">
                        <span> Click Here</span>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
