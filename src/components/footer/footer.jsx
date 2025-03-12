import "./footer.css"

function Footer(){
    return(
        <div className="footer">
            <div className="footer-logo">
                <p>
                Paws<span>&Co</span>
                </p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            <div className="copyright">
                <hr></hr>
                <p>Copyright@ 2025 all right reserved</p>
            </div>
        </div>
    )
}
export default Footer