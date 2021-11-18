import React from "react";
import SortByProperty from "./SortByProperty";
import { Link } from "react-router-dom";

const cards = ({filterNutrigrade, num}) => {
    const filterNutrigradeTri = SortByProperty(filterNutrigrade, 'attributes.nutrition_grade_fr');
    return (
        <div className="propos1 bestchoic">
            <div className="container-Img-Bestchoic">
                <Link to={`/Product/${filterNutrigradeTri.map((pr)=>pr._id)[num]}`}>
                <img
                className="img-Left-Prod1"
                src={(filterNutrigradeTri.map((nameP)=>nameP.image_front_small_url)[num])}
                alt={""}
                />
                </Link>  
            </div>
            <div className="container-Infos-Bestchoic">
                <p className='healthy-name'>{(filterNutrigradeTri.map((nameP)=>nameP.product_name_fr)[num])}</p>
                <p>{(filterNutrigradeTri.map((brandP)=>brandP.brands_tags[0].replaceAll('-',' '))[num])}</p>
                <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + (filterNutrigradeTri.map((nameP)=>nameP.nutrition_grade_fr)[num])+ ".svg"} alt={''} />
            </div>
        </div>
    )
}

export default cards;