import "./bestcollection.css"

import Item from "../item/item"
import { useEffect, useState } from "react"
import axios from "axios"



function NewCollection(){
    const[new_collections,setnewcollection]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/bestsellers").then((response)=>{
            setnewcollection(response.data)
        })
        .catch((err)=>{
            console.log("error")
        })

    },[])
    return(
        <div className="new-collections" id="new-collection">
            <h1>Best Sellers</h1>
            <hr  className="styled-hr" />
            <div className="collections">
                {
                new_collections.map((item,index)=>{
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.newprice} old_price={item.oldprice}></Item>
                })}
                
            </div>

        </div>
    )
}
export default NewCollection