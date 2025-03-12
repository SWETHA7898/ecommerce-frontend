import Navbar from "./components/navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/home"
import Products from "./pages/products/Products"
import Cart from "./pages/cart/Cart"
import ShopCategory from "./pages/shopcategory/ShopCategory"
import LoginSignUp from "./pages/loginsignup/LoginSignUp"
import { BrowserRouter } from "react-router-dom"
import Footer from "./components/footer/footer"



function App(){
  return(
    <div className="app">
      <BrowserRouter>
      
      
     
      
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/dogs" element={<ShopCategory category="Dog"></ShopCategory>}></Route>
        <Route path="/cats" element={<ShopCategory category="Cat"></ShopCategory>}></Route>
        <Route path="/avians" element={<ShopCategory category="avian"></ShopCategory>}></Route>
        <Route path="/fishes" element={<ShopCategory category="fishes"></ShopCategory>}></Route>
        <Route path="/cart" element={<Cart></Cart>}/>
     
    <Route path="/product" element={<Products />} />
    <Route path="/product/:productID" element={<Products />} />

        <Route path="/loginsignup" element={<LoginSignUp></LoginSignUp>}/>


        

      </Routes>
      <Footer></Footer>
      </BrowserRouter>

      

    </div>
    
  )
}




export default App