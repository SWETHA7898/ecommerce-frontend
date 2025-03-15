import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext();

const defaultCart = () => {
    let cart = {};
    for (let i = 0; i <= 300; i++) {
        cart[i] = 0;
    }
    return cart;
};

const StoreContextProvider = (props) => {
    const [cartitem, setCart] = useState(defaultCart());
    const [contextvalue, setContextvalue] = useState([]);
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        axios.get("http://localhost:3000/allproducts")
            .then((response) => {
                console.log("✅ Fetched data:", response.data);
                setContextvalue(response.data.map(item => ({ ...item, show: true })));
                setLoading(false);
            })
            .catch((error) => {
                console.error("❌ Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    const addcart = async (itemId) => {
        // ✅ Update local cart first for better UX
        setCart((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));

       
    };

    const removecart = async (itemId) => {
        setCart((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
        }));
      
    };

    const amount = () => {
        let total = 0;
        for (const item in cartitem) {
            if (cartitem[item] > 0) {
                const iteminfo = contextvalue.find((product) => product.id === Number(item));
                if (iteminfo) {
                    total += iteminfo.newprice * cartitem[item];
                }
            }
        }
        console.log("💰 Total Amount:", total);
        return total;
    };

    const totalcartitems = () => {
        let item = 0;
        for (const i in cartitem) {
            if (cartitem[i] > 0) {
                item += cartitem[i];
            }
        }
        console.log("🛒 Total Cart Items:", item);
        return item;
    };

    const value = { contextvalue, setContextvalue, cartitem, addcart, removecart, amount, totalcartitems };

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;