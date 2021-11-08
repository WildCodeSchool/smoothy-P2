import React from 'react'
import './PageListSetter.css'
import more from  './arrow2.png'


function PageListSetter({page, setPage,}) {

    const handleClick = () => {
        
    setPage(++page)

}
    return (
      
        <div className='more-button'>
            <img  className='more-button-style' onClick={handleClick} src={more} alt="arrow" />
        </div>

       
    )
}

export default PageListSetter
