import "./Exploreproducts.css"
import { menu } from "../../assets/assets/assests"
import { Link } from "react-router-dom"



function Explore({category,setCategory}){
    return(
        <div className="explore-menu" id="explore-menu">
            <h1 className="menu-text">Find Everything for Your Furry & Feathered Friends</h1>
            
            <div className="explore-menu-list">
                {menu.map((item,index)=>{
                return  <div key={index} className="explore-menu-list-item">
                <Link 
                  to={item.pet_name.toLowerCase() === "dogs" ? "/dogs" : `/${item.pet_name.toLowerCase()}`} 
                  onClick={() => setCategory(prev => prev === item.pet_name ? "All" : item.pet_name)}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <img 
                    src={item.pet_images} 
                    className={category === item.pet_name ? "active" : ""} 
                    alt={item.pet_name}
                  />
                  <p>{item.pet_name}</p>
                </Link>
              </div>
                })}
            </div>
            
            
<hr/>
        </div>
    )
}
export  default Explore