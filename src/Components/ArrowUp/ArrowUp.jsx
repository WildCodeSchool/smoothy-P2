import React from 'react'
import '../ProductList/ArrowUp.css'
import upArrow from '../ProductList/arrowUp2.png'

function ArrowUp() {

  const handleUp = ()=>{
  window.scroll({
    top:0,
    behavior: 'smooth'  
  });

}
    return (
        <div>
            <img  onClick={handleUp}  className="arrow-up" src={upArrow} alt="arrow-up"  />

        </div>
    )
}


export default ArrowUp
