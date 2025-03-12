import "./popular.css"
import { data } from "../../assets/assets/assests"
import Item from "../item/item"

function Popular(){
    return(
        <div className="popular">
            <h1>POPULAR IN DOGS</h1>
            <hr/>
            <div className="popular-item">
                {data.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item>
                })}
            </div>
        </div>
    )
}
export default Popular