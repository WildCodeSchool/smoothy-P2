import React, { useState } from "react";


const Searchproduct = ({products}) => {

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

import downchevron from "../../Assets/downchevron.png";
import "./SearchProduct.css";


const dashRemover = (str) => {
  return str.replaceAll(("-", "_"), " ");
};

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
                <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nova-group-" + products[0].nova_group + ".svg"} alt={''} />
                <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/icons/ecoscore-" + products[0].ecoscore_grade + ".svg"} alt={''} />
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
              </div>Pour éviter de supprimer la moindre ligne de ton travail, e
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
                  Ce produit contient :{products[0].allergens_from_ingredients}
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

          <p className="goproductlist">voi  r tout</p>

        </div>
      )}
    </div>
  );
};

export default Searchproduct;
