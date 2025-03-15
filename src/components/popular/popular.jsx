import "./popular.css"

import Item from "../item/item"
import { useEffect, useState } from "react"
import axios from "axios"

function Popular(){
    const[data,setdata]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/popular").then((res)=>setdata(res.data))
        .catch((err)=>console.log("err"))

    },[])
    return(
        <div className="popular">
            <h1>POPULAR IN DOGS</h1>
            <hr/>
            <div className="popular-item">
                {data.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.newprice} old_price={item.oldprice}></Item>
                })}
            </div>
        </div>
    )
}
export default Popular