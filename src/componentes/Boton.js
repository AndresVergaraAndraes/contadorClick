import React from "react";
import '../css/Boton.css'

const Boton =({texto,esBoton,manejarClick})=>{
return(
    <button
   className={esBoton=="1" ? "boton-click" :
   esBoton=="2"? "no-megusta":
   "boton-noclick"}
    onClick={manejarClick}>
{texto}
    </button>
)
}
export default Boton;