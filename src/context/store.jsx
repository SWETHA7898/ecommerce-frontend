import { createContext, useState, useEffect } from "react";
import { all_product } from "../assets/assets/assests";

export const StoreContext = createContext();



const defaultcart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const StoreContextProvider = (props) => {
    const [cartitem, setCart] = useState(defaultcart());
    const [contextvalue, setContextvalue] = useState(all_product);

    
    
    const addcart = (itemid) => {
        setCart((prev) => {
            const updatedCart = { ...prev, [itemid]: prev[itemid] + 1 };
           
            
            return updatedCart;
        });
    };

   
    
    const removecart = (itemid) => {
        setCart((prev) => {
            const updatedCart = { ...prev, [itemid]: Math.max(prev[itemid] - 1, 0) };
          
            
            return updatedCart;
        });
    };
    const amount = () => {
        let total = 0;
        for (const item in cartitem) {
            if (cartitem[item] > 0) {
                const iteminfo = contextvalue.find((product) => product.id === Number(item));
                if (iteminfo) {
                    total += iteminfo.new_price * cartitem[item];
                  
                }
            }
        }
        console.log("Total Amount:", total);
        return total;
    };
    
    const totalcartitems=()=>{
        let item=0;
        for(const i in cartitem){
            if(cartitem[i]>0)
                
                {
                item+=cartitem[i]
                console.log(item)
            }
        }
        console.log(item)
        return item
    }
    const value = { contextvalue, setContextvalue, cartitem, addcart, removecart ,amount,totalcartitems};

    

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
