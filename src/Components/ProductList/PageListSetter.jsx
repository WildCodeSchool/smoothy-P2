import React from 'react'
import './PageListSetter.css'

function PageListSetter({page, setPage,}) {

    const handleClick = () => {
        
    setPage(++page)

    console.log(page)
}
    return (
      
        <div className='button'>
         <button onClick={handleClick}>Plus de produits</button> 
        </div>
       
    )
}

export default PageListSetter
