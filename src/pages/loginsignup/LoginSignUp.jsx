import "./LoginSignUp.css"

function LoginSignUp(){
    return(
        <div className="loginsignup">
            <div className="container">
                <h1>SignUp</h1>
                <div className="fields">
                    <input type="text" placeholder="Your name"></input>
                    <input type=" email" placeholder=" Your email">
                    </input>
                    <input type="password" placeholder="Password"></input>
                </div>
                <button >Continue</button>
                <p className="login">Already have an account ?<span>Login Here</span></p>
                <div className="login-agree">
                    <input type="checkbox" name="" id=""></input>
                    <p>By clicking i agree to the terms of privacy and policy</p>
                </div>

            </div>

        </div>
    )
}
export default LoginSignUp