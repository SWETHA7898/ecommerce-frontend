import "./bestcollection.css"
import {new_collections} from "../../assets/assets/assests"
import Item from "../item/item"



function NewCollection(){
    return(
        <div className="new-collections" id="new-collection">
            <h1>Best Sellers</h1>
            <hr  className="styled-hr" />
            <div className="collections">
                {
                new_collections.map((item,index)=>{
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
                })}
                
            </div>

        </div>
    )
}
export default NewCollection