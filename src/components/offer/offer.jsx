 import "./offer.css"
 import { assests} from "../../assets/assets/assests"
import { Link } from "react-router-dom"
 
 
 function Offer(){
    const handleScroll = () => {
        const section = document.getElementById("new-collection");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
    return(
        <div className="offers">
            <div className="offers-left">
      <h1>Exclusive</h1>
      <h1>Offers for you</h1>
      <p>ONLY ON BEST SELLERS PRODUCT</p>
      <button onClick={handleScroll}>Check Now</button>
    </div>
            <div className="offers-right">
                <img src={assests.exclusive} alt=""></img>


            </div>

        </div>
    )
 }

 export default Offer