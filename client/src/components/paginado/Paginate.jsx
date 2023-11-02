/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Paginate=({page,total})=>{
    const pageNumbers =[];
    for(let i=1 ; i<= total ; i++){ // inicio 1 para no tener pag 0
        pageNumbers.push(i)
    }

    return(
        <div>
            {pageNumbers.map((pageNumber)=>(
                <button key={pageNumber} onClick={()=> page(pageNumber)}>
                    {pageNumber}
                </button>
            ))}
        </div>
    )

}

export default Paginate;