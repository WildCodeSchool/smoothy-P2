
import React, { useState,useEffect } from "react";
import axios from "axios";

import downchevron from "../../Assets/downchevron.png";
import "./SearchProduct.css";

// exemples gen code
//     marche pas 737628064502 : Rice Noodles
//     3017620425035 : Pâte à tartiner aux noisettes
//     8032862870028 : Pâte à tartiner Gonuts sans sucre
//     3019081238643 : Sardines à l'huile d'olive
//     3587220002252 : La Gâche Tranchée au Beurre Frais et à la Crème Fraîche
//     3242274001056 : Salade & Compagnie - Montmartre - Sodebo - 320 g
//     3274080005003 : Eau de source - Cristaline - 1,5 l
//     3700281615746 : surprise !

// ToDo
//     fiche produit à brancher à l'architecture : 
//     ✅ barres de recherche (accueil et header)
//     ✅ choix parmi une sélection
//     ✅ code barre

//     ✅ affichage nutriscore/Nova/Ecoscore
//     (Fonction affichage tableaux)

//     Liens vers 404 en cas de produit non répertorié
//      - depuis le scann
//     ✅ depuis une recherche de code barre

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

    // const [isActiv, setActiv] = useState("environement-Switch-Product");🚀

  const handleClick = () => {
    setAlergenComponent("alergene-Component-lvlup-Product");
    setaAlergenetxt("alergene-Text-Unhide-Product");
    setArowDownEndAlergen("arow-Down-Hide-Product");
    // setActiv("environement-Switch-Product2")🚀
  };

  // console.log('isactiv', !setActiv); A tchek 🚀

  // const [cat, setCat] = useState("")
  // const [equivProducts, setEquivProducts] = useState(null);

  // console.log("useswitch", useswitch); // a retirer apres merge

  // useEffect(()=>{
  //   products && setCat(products[0].categories.split(",")[products[0].categories.split(",").length-1])
  // }, [products])

  //  products && console.log(products[0].categories.split(",").length())
  

//   useEffect(() => {

//     const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=${cat}&tagtype_1=nutrition_grade_fr&tag_contains_1=contains&tag_1=a&fields=categories,_id,code,product_name_fr,brands_tags,image_front_small_url,quantity,nutriscore_grade,labels_old,brands,_keywords,nutrition_grade_fr&page_size=6&json=true`;
// true
//     const getProducts = async () => {
//       await axios.get(url).then(({ data }) => setEquivProducts(data.products));
//     };
//     getProducts();
  
//   }, [cat]);
// Stan le roi ? 
//   // console.log(cat)
//   console.log(equivProducts)

  
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
            <div className="header-Right-Product">
              <h1 className="generic-Name-Product">{products[0].generic_name}</h1>
              <div className="labellls">
                <div className="labels-1">
                <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + products[0].nutrition_grade_fr + ".svg"} alt={''} />
                <img className='eco-score' src={"https://fr.openfoodfacts.org/images/icons/ecoscore-" + products[0].ecoscore_grade + ".svg"} alt={''} />
                </div >
                <div className="labels-2">
                <img className='nova-group' src={"https://fr.openfoodfacts.org/images/misc/nova-group-" + products[0].nova_group + ".svg"} alt={''} />
              </div>
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
                  Compositon {" "}
                </p>
                    <p>|</p>
                <p
                  className="environement-Switch-Product"
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
                <p> img </p>
              </div>
              <div className="container-Infos-Bestchoic">

                <p>nom de l&apos;ingredient</p>
                <p>marque </p>
                <p>qualidades</p>
              </div>
            </div>
 
            <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
                <p> img </p>
              </div>

              <div className="container-Infos-Bestchoic">
                <p>nom de l&apos;ingredient</p>
                <p>marque </p>
                <p>qualidades</p>
              </div>
            </div>

            <div className="propos1 bestchoic">
              <div className="container-Img-Bestchoic">
                <p> img </p>
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

