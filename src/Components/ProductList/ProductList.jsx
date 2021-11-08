import React from 'react'
import './PageListSetter.css'
import moreProducts from  '../../Assets/moreProducts.png'


function PageListSetter({page, setPage,produits}) {

    const handleClick = () => {
        
    setPage(++page)

    console.log(produits)

}
    return (
      
        <div className='more-button'>
            <img  className={/\d/.test(produits)
         ? 'hidden-button-style'
         : 'more-button-style'} 
         onClick={handleClick} 
         src={moreProducts} alt="more-products" />
        </div>

       
    )
}

export default PageListSetter
