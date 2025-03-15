import { useContext, useEffect, useState } from "react";
import "./ShopCategory.css";
import { StoreContext } from "../../context/store";
import Item from "../../components/item/item";

function ShopCategory(props) {
    const { contextvalue } = useContext(StoreContext);
    const [search, setSearch] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        if (!contextvalue) return;

        // Convert props.category to lowercase for case-insensitive filtering
        const filterCategories = Array.isArray(props.category) 
            ? props.category.map(cat => cat.toLowerCase()) 
            : [props.category.toLowerCase()];

        const results = contextvalue.filter((item) => {
            // Ensure item.category is treated as an array
            const itemCategories = Array.isArray(item.category) 
                ? item.category.map(cat => cat.toLowerCase()) 
                : [item.category.toLowerCase()];

            // Check if the item matches the selected category
            const matchesCategory = itemCategories.some(category => filterCategories.includes(category));

            // Check if the item matches the search term
            const matchesSearch = search 
                ? item.name.toLowerCase().includes(search.toLowerCase()) || 
                  itemCategories.some(cat => cat.includes(search.toLowerCase()))
                : true;

            return matchesCategory && matchesSearch;
        });

        setFilteredResults(results);
    }, [search, contextvalue, props.category]);

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

            {filteredResults.length === 0 && (
                <h1>No Items to Show, Try searching with a different value</h1>
            )}

            <div className="sort-category">
                {filteredResults.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.newprice}
                        old_price={item.oldprice}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShopCategory;
