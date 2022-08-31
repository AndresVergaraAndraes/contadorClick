import React from "react";
import '../css/Contador.css'

const Contador = ({numeroClick}) =>{
return(
    <div className="contador">
        {numeroClick}

    </div>
);
}
export default Contador;