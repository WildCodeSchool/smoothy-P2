import React from 'react'
import './ArrowUp.css'
import upArrow from '../../../Assets/arrowUp.svg'
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
