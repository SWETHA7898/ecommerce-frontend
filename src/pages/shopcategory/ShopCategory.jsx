import { useContext, useEffect, useState } from "react"
import "./ShopCategory.css"
import { StoreContext } from "../../context/store"
import Item from "../../components/item/item"


function ShopCategory(props){
    const { contextvalue, setContextvalue } = useContext(StoreContext);
    const [search, setSearch] = useState("");


    const filterCategories = Array.isArray(props.category) ? props.category : [props.category];

    const filteredProducts = (contextvalue?.filter(item => {
        const categories = Array.isArray(item.category) ? item.category : [item.category];
        return categories.some(category => filterCategories.includes(category)) && item.show;
    })) || [];

    useEffect(() => {
        console.log("Search Term:", search);
        if (search) {
            const filteredCard = contextvalue.map(card => {
                const matchesCategory = Array.isArray(card.category)
                    ? card.category.some(cat => cat.toLowerCase().includes(search.toLowerCase()))
                    : card.category.toLowerCase().includes(search.toLowerCase());
                
                const matchesName = card.name.toLowerCase().includes(search.toLowerCase());
                const show = matchesCategory || matchesName;

                console.log("Card:", card.name, "Show:", show);
                return { ...card, show };
            });
            setContextvalue(filteredCard);
        } else {
            setContextvalue(prev => prev.map(card => ({ ...card, show: true })));
        }
    }, [search, setContextvalue]);

    return (
        <div className="shop-category"> 
            <div className="sort">
                <input
                    type="text"
                    placeholder="Search your product"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <i className="fa-solid fa-magnifying-glass" style={{ color: "#333333" }}></i> 
            </div>
            {
                contextvalue.filter(card => card.show).length == 0 && (
                    <h1>No Items to Show, Try searching with different value</h1>
                )
            }

            <div className="sort-category">
                {filteredProducts.map(item => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShopCategory