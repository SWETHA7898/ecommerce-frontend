import "./header.css"
import { assests } from "../../assets/assets/assests"




function Header()
{
    return(
        <div className="hero">
          
          <div className="hero-content">
              <h1>New Arrivals Only</h1>
            
              <p>products</p>
              <p>for your favourite ones</p>
            
            <div className="hero-latest-btn">
              <div >Latest Products</div>
              <img src={assests.arrow} style={{width:"20px"}}></img>
            </div>
           
           

          </div>
          

          </div>
          
        
    )
}
export default Header