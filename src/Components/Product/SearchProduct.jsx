import React, { useState,useEffect } from "react";

import downchevron from "../../Assets/downchevron.png";
import "./SearchProduct.css";

const dashRemover = (str) => {
  return str.replaceAll(("-", "_"), " ");
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

  console.log("useswitch", useswitch); // a retirer apres merg


  useEffect(() => {

    return(

   arrayFilter = []
    )

  }, [arrayFilter])

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
            <div className="header-Right-Product">
              <p className="generic-Name-Product">{products[0].generic_name}</p>
                <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + products[0].nutrition_grade_fr + ".svg"} alt={''} />
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
                  Environement
                </p>
              </div>

              <div className="composition-environement-Product show-Environement-Product ">
                {useswitch === "Composition" ? (
                  <p>{dashRemover(products[0].ingredients_text)}</p>
                ) : (
                  <p>{products[0].ingredients_url}</p>
                )}
              </div>
            </div>

            <div className="alergen-Product">
              <div className={alergenComponent}>
                <p className={arowDownEndAlergen}>Alèrgenes</p>

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
                  Ce produit contient : {[...new Set (arrayFilter)].join(", ").toUpperCase()}
                </p>
              </div>
            </div>
          </div>
          <div className="le-grid">
            <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
                <p> img </p>
              </div>

              <div className="container-Infos-Bestchoic">
                <p>nom de l'ingredient</p>
                <p>marque </p>
                <p>qualidades</p>
              </div>
            </div>

            <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
                <p> img </p>
              </div>

              <div className="container-Infos-Bestchoic">
                <p>nom de l'ingredient</p>
                <p>marque </p>
                <p>qualidades</p>
              </div>
            </div>

            <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
                <p> img </p>
              </div>

              <div className="container-Infos-Bestchoic">
                <p>nom de l'ingredient</p>
                <p>marque </p>
                <p>qualidades</p>
              </div>
            </div>
          </div>

          <p className="goproductlist">vour tout</p>
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
