import "./newletter.css"


function Newletter(){
    return(
        <div className="newsletter">
            <h1>Get Exclusive Offers On Email</h1>
            <p>Subscribe to our news letter and stay updated</p>
            <div>
                <input type="email" placeholder="Your email id">
                </input>
                <button>Subscribe</button>
            </div>

        </div>
    )
}
export default Newletter

