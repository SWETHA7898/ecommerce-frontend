import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { assests } from "../../assets/assets/assests";


import "./Navbar.css"
import { StoreContext } from "../../context/store";




function Navbar(){
    const[menu,setmenu]=useState("")
    const {totalcartitems}=useContext(StoreContext)
    const menuref=useRef()

    const drop_toogle=(e)=>{
        menuref.current.classList.toggle("navmenu-visible")
        e.target.classList.toggle("open")

    }
    return(
        
        
        <div className="navbar">
            <div className="header"> 
           
            Paws<span>&Co</span>

            </div>
            <img  onClick={drop_toogle} src={assests.nav} alt="" className="nav-dropdown"></img>
           
           <ul className="navmenu " ref={menuref}>
            <li className={menu=="home"?"active":""} onClick={()=>setmenu("home")}><Link to="/">Shop</Link></li>
            <li className={menu=="dogs"?"active":""}  onClick={()=>setmenu("dogs")}><Link to="/dogs">Dogs</Link></li>
            <li className={menu=="cats"?"active":""}  onClick={()=>setmenu("cats")}><Link to="/cats">Cats</Link></li>
            <li className={menu=="avians"?"active":""}  onClick={()=>setmenu("avians")}><Link to="/avians">Avians</Link></li>
            <li className={menu=="fishes"?"active":""}  onClick={()=>setmenu("fishes")}><Link to="/fishes">Fishes</Link></li>
            
           </ul>
           <div className="navright">
          
           <div className="cart">
            <Link to="/cart"> <i class="fa-solid fa-cart-shopping" style={{fontSize:"20px"}}></i></Link>  
           <div className="dot">{totalcartitems()}</div>
           </div>
           <Link to="/loginsignup"><button>sign in</button></Link>
           </div>
           
            
           
           

        </div>
        
        
    )
}
export default Navbar