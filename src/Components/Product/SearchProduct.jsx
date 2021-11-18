import React, { useState,useEffect } from "react";
import axios, { Axios } from "axios";
import { useHistory } from "react-router-dom";

import downchevron from "../../Assets/downchevron.png";
import "./SearchProduct.css";
import { Link } from "react-router-dom";

const dashRemover = (str) => {
  return str.replaceAll(("-", "_"), " ");
};


// 3273120030609
// 5053827192699

function sortByProperty(objArray, prop, direction){
  if (arguments.length<2) throw new Error("ARRAY, AND OBJECT PROPERTY MINIMUM ARGUMENTS, OPTIONAL DIRECTION");
  if (!Array.isArray(objArray)) throw new Error("FIRST ARGUMENT NOT AN ARRAY");
  const clone = objArray.slice(0);
  const direct = arguments.length>2 ? arguments[2] : 1; //Default to ascending
  const propPath = (prop.constructor===Array) ? prop : prop.split(".");
  clone.sort(function(a,b){
      for (let p in propPath){
              if (a[propPath[p]] && b[propPath[p]]){
                  a = a[propPath[p]];
                  b = b[propPath[p]];
              }
      }
      // convert numeric strings to integers
      a = a.match(/^\d+$/) ? +a : a;
      b = b.match(/^\d+$/) ? +b : b;
      return ( (a < b) ? -1*direct : ((a > b) ? 1*direct : 0) );
  });
  return clone;
}

const firstLetterUpperCase = (a) => {
  return (a + "").charAt(0).toUpperCase() + a.substr(1);
};

let arrayFilter =  []


const Searchproduct = ({ products }) => {
  const [useswitch, setSwitch] = useState("Composition");
  const [isActive, setActive] = useState(true);

  
  const handleChange = () => {
    setActive(!isActive);
    useswitch==="Composition"? setSwitch("environement") : setSwitch("Composition");
  };


  const [cat, setCat] = useState(null)
  const [code, setCode] = useState(null)
  const [equivProducts, setEquivProducts] = useState(null);


 
  useEffect(()=>{
    products && setCat(products[0].categories.split(",")[products[0].categories.split(",").length-2])
    products && setCode(products[0]._id.slice(0,5)+'xxxxxxxx')

  }, [products])
  

  useEffect(() => {
    const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=codes_tags&tag_contains_0=contains&tag_0=${code}&fields=categories,_id,code,product_name_fr,brands_tags,image_front_small_url,image_url,quantity,nutrition_grade_fr,nutrition_grade_fr,nutrition_grades,labels_old,brands,generic_name,_keywords,nutrition_grade_fr,brands_tags&page_size=1&json=true`;
    const getProducts = async () => {
      
    await axios
    .get(url).then(({ data }) => setEquivProducts(data.products))
    }
    getProducts()
  }, [cat]);
  /* {const equivProdructsFiltered = sortByProperty(equivProducts, 'attributes.nutrition_grade_fr')} */
  // console.log(cat)
  // console.log(equivProducts)


  useEffect(() => {
    return(
      arrayFilter = []
    )
  }, [arrayFilter])


  const replace = (qual) => { if (qual == "fat")
    {return "Matière grasse"}
      else {
        if (qual == "salt") {return "Sel"}
          else {
            if (qual == "saturated-fat") {return "Graisse saturée"}
              else {
                if (qual == "sugars") {return "Sucre"}
                  else {return "non défini"}
              }
          }
      }
  }

const level = (qual) => {if (qual == "low") {return "faible"}
else {
  if (qual == "moderate") {return "modéré"}
  else {
    if (qual == "high") {return "élevé"}
    else {return "non défini"}
  }
}
}

const ComponentAlergenes = () => {
 
  return (
    <div className="allAlergenes">
               
              
    {" "}
    {/*obligation de placer span afin de placer emoji propre a jsx */}
    <span role="img" aria-label="warning">
      {" "}
      ⚠️{" "}
    </span>{" "}
    {products[0].allergens_from_ingredients.split(',').forEach(elt => !elt.startsWith('en:') ? arrayFilter.push(elt.trim()):'none')}
    {products[0].allergens_from_ingredients 
    ? `Ce produit contient : ${[...new Set (arrayFilter)].join(", ").toUpperCase()}`
    : "Pas d'allergène renseigné sur ce produit"}
  </div>

  )
};


const [visible, setVisible] = useState(false);
const history = useHistory();
// console.log(code)
// (products) && history.push(`/productListEquiv/${products[0].code}`)


  return (
    <div>
      {products && (
        <div className="container-Product">
          <div className="header-Product">
            <div className="img-Left-Product">
              <img
                className="img-Left-Prod"
                src={products[0].image_url}
                alt={""}
              />
            </div>
            <div>
            </div>
            <div className="header-Right-Product">



              {/* <h1 className="generic-Name-Product">{products[0].generic_name.length>=81?products[0].generic_name.substring(0,81):products[0].generic_name}</h1> */}
              <h1 className="generic-Name-Product">{products[0].product_name_fr.length>=81?products[0].product_name_fr.substring(0,81):products[0].product_name_fr}</h1>
              <div className="labellls">
                <div className="labels-1">
                <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + products[0].nutrition_grade_fr + ".svg"} alt={''} />
                  {/* {products[0].nutrition_grade_fr
                  ?<img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + product.nutrition_grade_fr + ".svg"} alt={''} />
                  :<img className='nutri-score' src="https://static.openfoodfacts.org/images/attributes/nutriscore-unknown.svg" />} */}
                  <img className='eco-score' src={"https://fr.openfoodfacts.org/images/icons/ecoscore-" + products[0].ecoscore_grade + ".svg"} alt={''} />
                </div >
                <div className="labels-2">
                  <img className='nova-group' src={"https://fr.openfoodfacts.org/images/misc/nova-group-" + products[0].nova_group + ".svg"} alt={''} />
                </div>
            




{products[0].labels.replace(/ /g, "").indexOf('ABAgricultureBiologique')!== -1
?<img src="https://static.openfoodfacts.org/images/lang/en/labels/ab-agriculture-biologique.74x90.svg" alt="" />
:<span></span>
}


{products[0].labels.replace(/ /g, "").indexOf('EUOrganic')!== -1
?<img src="https://world.openfoodfacts.org/images/lang/en/labels/eu-organic.135x90.svg" alt="" />
:<span></span>
}

{products[0].labels.replace(/ /g, "").indexOf('FairtradeInternational')!== -1
?<img src="https://world.openfoodfacts.org/images/lang/en/labels/fairtrade-international.77x90.svg" alt="" />
:<span></span>             
}

{/* {products[0].labels.replace(/ /g, "").indexOf('MaxHavelaar')!== -1
?<img src="https://world.openfoodfacts.org/images/lang/en/labels/max-havelaar.64x90.svg" alt="" />
:<span></span>                  
} */}
              </div>


            </div>
          </div>

          <div className="midll-Product">
            <div className="switch-Midllproduct">
              <div className="composition-Product">
                <p
                  className={isActive ? "environement-Switch-Product2" : "environement-Switch-Product" }
                  onClick={handleChange}
                >

                  Composition |{" "}

                </p>

                <p

                className={!isActive ? "environement-Switch-Product2" : "environement-Switch-Product" }
                onClick={handleChange}

                >
                  {" "}
                  Santé
                  
                </p>
              </div> 
              
              <div className="composition-environement-Product show-Environement-Product ">
                {/* {Object.entries(products[0].nutrient_levels).map(e => console.log(level(e[1])))} */}
                {useswitch === "Composition" ? (
                  products[0].ingredients_text ? <p>{dashRemover(products[0].ingredients_text)}</p> : <p>Aucune information présente sur le produit</p>
                ) : (
                  <section className="nutrientLevel">
                  <h3>Valeurs nutritives</h3>
                  {products[0].nutrient_levels !== undefined ?
                    Object.entries(products[0].nutrient_levels).map(e =>
                    <div className="label">
                    <span className="label-key">{replace(e[0])} : </span>
                    <span className={`label--value ${e[1]}`}>{level(e[1])}</span>
                    </div>)
                  :
                    <div className="unknown">Unknown <span role="img" aria-label="question emoji">❓</span></div>
                  }
                  <h3 className="AddSection">Additifs</h3>
                  {products[0] &&
                    products[0].additives_tags.map(e =>
                    <p className="additives">{e.replace('en:','').toUpperCase()}</p>)}

                  </section>
                  // <p>{products[0].ingredients_url}</p>
                )}
              </div>
            </div>

            <div className="alergen-Product">
              <div className='alergene-Component-Product'>

                <div>
      <button onClick={() => setVisible(prev => !prev)}>Alergenes ? </button>
      {visible && <ComponentAlergenes />}
    </div>

                
                <p className="alergene-Text-Product">
               
              
                  {" "}
                  {/*obligation de placer span afin de placer emoji propre a jsx */}
                  <span role="img" aria-label="warning">
                    {" "}
                    ⚠️{" "}
                  </span>{" "}
                  {products[0].allergens_from_ingredients.split(',').forEach(elt => !elt.startsWith('en:') ? arrayFilter.push(elt.trim()):'none')}
                  {products[0].allergens_from_ingredients 
                  ? `Ce produit contient : ${[...new Set (arrayFilter)].join(", ").toUpperCase()}`
                  : "Pas d'allergène renseigné sur ce produit"}
                </p>
              </div>
            </div>
          </div>
          <div className="le-grid">
          {/* {const equivProdructsFiltered = sortByProperty(equivProducts, 'attributes.nutrition_grade_fr')} */}
          <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
              <Link to={`/Product/${sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((pr)=>pr._id)[0]}`}>
              <img
              className="img-Left-Prod"
              src={(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.image_front_small_url)[0])}
              alt={""}
              />
              </Link>  

              </div>
              <div className="container-Infos-Bestchoic">
              <p className='healthy-name'>{(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.product_name_fr)[0])}</p>
              <p >{(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((brandP)=>brandP.brands_tags[0].replaceAll('-',' '))[0])}</p>
              <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + (sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.nutrition_grade_fr)[0])+ ".svg"} alt={''} />
              </div>
            </div>
        

            <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
              <Link to={`/Product/${sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((pr)=>pr._id)[1]}`}>
              <img
              className="img-Left-Prod"
              src={(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.image_front_small_url)[1])}
              alt={""}
              />
              </Link>  

              </div>
              <div className="container-Infos-Bestchoic">
              <p className='healthy-name'>{(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.product_name_fr)[1])}</p>
              <p >{(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((brandP)=>brandP.brands_tags[0].replaceAll('-',' '))[1])}</p>
              <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + (sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.nutrition_grade_fr)[1])+ ".svg"} alt={''} />
              </div>
            </div>
                       

            <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
              <Link to={`/Product/${sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((pr)=>pr._id)[2]}`}>
              <img
              className="img-Left-Prod"
              src={(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.image_front_small_url)[2])}
              alt={""}
              />
              </Link>
              </div>

              <div className="container-Infos-Bestchoic">

              <p className='healthy-name'>{(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.product_name_fr)[2])}</p>
              <p >{(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((brandP)=>brandP.brands_tags[0].replaceAll('-',' '))[2])}</p>
              <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + (sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.nutrition_grade_fr)[2])+ ".svg"} alt={''} />
              </div>
            </div>

            <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
              <Link to={`/Product/${sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((pr)=>pr._id)[3]}`}>
              <img
              className="img-Left-Prod"
              src={(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.image_front_small_url)[3])}
              alt={""}
              />
              </Link>
              </div>

              <div className="container-Infos-Bestchoic">
              <p className='healthy-name'>{(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.product_name_fr)[3])}</p>
              <p >{(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((brandP)=>brandP.brands_tags[0].replaceAll('-',' '))[3])}</p>
              <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + (sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.nutrition_grade_fr)[3])+ ".svg"} alt={''} />
              </div>
            </div>
          
            <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
              <Link to={`/Product/${sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((pr)=>pr._id)[4]}`}>
              <img
              className="img-Left-Prod"
              src={(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.image_front_small_url)[4])}
              alt={""}
              />
              </Link>
              </div>

              <div className="container-Infos-Bestchoic">
              <p className='healthy-name'>{(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.product_name_fr)[4])}</p>
              <p >{(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((brandP)=>brandP.brands_tags[0].replaceAll('-',' '))[4])}</p>
              <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + (sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.nutrition_grade_fr)[4])+ ".svg"} alt={''} />

              </div>
            </div>
          
            <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
              <Link to={`/Product/${sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((pr)=>pr._id)[5]}`}>
              <img
              className="img-Left-Prod"
              src={(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.image_front_small_url)[5])}
              alt={""}
              />
              </Link>
              </div>

              <div className="container-Infos-Bestchoic">
              <p className='healthy-name'>{(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.generic_name)[5])}</p>
              <p>{(sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((brandP)=>brandP.brands_tags[0].replaceAll('-',' '))[5])}</p>
              <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + (sortByProperty(equivProducts, 'attributes.nutrition_grade_fr').map((nameP)=>nameP.nutrition_grade_fr)[5])+ ".svg"} alt={''} />
              </div>
            </div>

            {/* <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
              <Link to={`/Product/${equivProducts.map((pr)=>pr._id)[6]}`}>
              <img
              className="img-Left-Prod"
              src={(equivProducts.map((nameP)=>nameP.image_front_small_url)[6])}
              alt={""}
              />
              </Link>  

              </div>
              <div className="container-Infos-Bestchoic">
              <p className='healthy-name'>{(equivProducts.map((nameP)=>nameP.generic_name)[6])}</p>
              <p >{(equivProducts.map((brandP)=>brandP.brands_tags[0].replaceAll('-',' '))[6])}</p>
              <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + (equivProducts.map((nameP)=>nameP.nutrition_grade_fr)[6])+ ".svg"} alt={''} />
              </div>
            </div> */}



          
          </div>
          
          {/* {console.log(code)}   */}
          <Link to={`/productListEquiv/${code}`}>voir tout</Link> 
          {/* <Link to={`/Product/${product.code}`}> */}


          {/* <p className="goproductlist">voir tout</p> */}

        </div>
      )}
    </div>
  );
};

export default Searchproduct;


//3274080005003
//8032862870028
//3700281615746
//12454143

// a recuperrer : produit bio ou non
// pour environement => origine

