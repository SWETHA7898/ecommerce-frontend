import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import "./index.css"

import StoreContextProvider from "./context/store";


const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(
 <StoreContextProvider>
   <App></App>
 

 </StoreContextProvider>
 
  
  
)
