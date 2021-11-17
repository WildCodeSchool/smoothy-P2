import React, { useState,useEffect } from "react";
import axios from "axios";
import downchevron from "../../Assets/downchevron.png";
import "./SearchProduct.css";
import { Link } from "react-router-dom";

let stringNoSpace;

const dashRemover = (str) => {
  return str.replaceAll(("-", "_"), " ");
};


const fistLetterUpperCase = (a) => {
  return (a + "").charAt(0).toUpperCase() + a.substr(1);
};

let arrayFilter =  []


const Searchproduct = ({ products }) => {
  const [useswitch, setSwitch] = useState("Composition");

  const [alergenComponent, setAlergenComponent] = useState(
    "alergene-Component-Product"
  );
  const [alergenetxt, setaAlergenetxt] = useState("alergene-Text-Product");
  const [arowDownEndAlergen, setArowDownEndAlergen] =
    useState("arow-Down-Product");

  const handleClick = () => {
    setAlergenComponent("alergene-Component-lvlup-Product");
    setaAlergenetxt("alergene-Text-Unhide-Product");
    setArowDownEndAlergen("arow-Down-Hide-Product");
  };

  const [cat, setCat] = useState(null)
  const [equivProducts, setEquivProducts] = useState(null);

  // console.log("useswitch", useswitch); // a retirer apres merg

  
  
  useEffect(()=>{
    // products && setCat(products[0].categories.split(",").pop())
    products && setCat(products[0].categories.split(",")[products[0].categories.split(",").length-2])
  }, [products])
  

  useEffect(() => {
    
  

    const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=${cat}&tagtype_1=nutrition_grade_fr&tag_contains_1=contains&tag_1=a&fields=categories,_id,code,product_name_fr,brands_tags,image_front_small_url,image_url,quantity,nutrition_grade_fr,nutrition_grade_fr,nutrition_grades,labels_old,brands,generic_name,_keywords,nutrition_grade_fr,brands_tags&page_size=6&json=true`;

    const getProducts = async () => {
      
    await axios
    .get(url).then(({ data }) => setEquivProducts(data.products))
    }
    getProducts()
  
  }, [cat]);

  // console.log(cat)
  console.log(equivProducts)

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

              <h1 className="generic-Name-Product">{products[0].name}</h1>
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
            


{stringNoSpace = products[0].labels.replace(/ /g, "")}
{stringNoSpace.indexOf('ABAgricultureBiologique')!== -1
?<img src="https://static.openfoodfacts.org/images/lang/en/labels/ab-agriculture-biologique.74x90.svg" alt="" />
:<span></span>}

{stringNoSpace.indexOf('EUOrganic')!== -1
?<img src="https://world.openfoodfacts.org/images/lang/en/labels/eu-organic.135x90.svg" alt="" />
:<span></span>
}

{stringNoSpace.indexOf('FairtradeInternational')!== -1
?<img src="https://world.openfoodfacts.org/images/lang/en/labels/fairtrade-international.77x90.svg" alt="" />
:<span></span>             
}

{stringNoSpace.indexOf('MaxHavelaar')!== -1
?<img src="https://world.openfoodfacts.org/images/lang/en/labels/max-havelaar.64x90.svg" alt="" />
:<span></span>                  
}
              </div>


            </div>
          </div>

          <div className="midll-Product">
            <div className="switch-Midllproduct">
              <div className="composiotion-Product">
                <p
                  className="composiotion-Switch-Product show-Composition-Product"
                  onClick={() => setSwitch("Composition")}
                >
                  Compositon |{" "}
                </p>

                <p
                  className="environement-Switch-Product "
                  onClick={() => setSwitch("Environement")}
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
              <div className={alergenComponent}>
                <p className={arowDownEndAlergen}>Allergènes</p>

                <button className={arowDownEndAlergen} onClick={handleClick}>
                  <img src={downchevron} alt="" />
                </button>

                <p className={alergenetxt}>
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
        

            <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
              <Link to={`/Product/${equivProducts.map((pr)=>pr._id)[1]}`}>

              <img
              className="img-Left-Prod"
              
              src={(equivProducts.map((nameP)=>nameP.image_front_small_url)[1])}
                alt={""}
              />
              </Link>  

              </div>
              <div className="container-Infos-Bestchoic">
              <p className='healthy-name'>{(equivProducts.map((nameP)=>nameP.generic_name)[1])}</p>
              <p >{(equivProducts.map((brandP)=>brandP.brands_tags[0].replaceAll('-',' '))[1])}</p>
              <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + (equivProducts.map((nameP)=>nameP.nutrition_grade_fr)[1])+ ".svg"} alt={''} />
              </div>
            </div>
                       

            <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
              <Link to={`/Product/${equivProducts.map((pr)=>pr._id)[2]}`}>
              <p> img </p>  
              </Link>
              </div>

              <div className="container-Infos-Bestchoic">
                <p>nom de l&apos;ingredient</p>
                <p>marque </p>
                <p>qualidades</p>
              </div>
            </div>

            <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
              <Link to={`/Product/${equivProducts.map((pr)=>pr._id)[3]}`}>
              <p> img </p>  
              </Link>
              </div>

              <div className="container-Infos-Bestchoic">
                <p>nom de l&apos;ingredient</p>
                <p>marque </p>
                <p>qualidades</p>
              </div>
            </div>
          </div>

          <p className="goproductlist">voir tout</p>

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

