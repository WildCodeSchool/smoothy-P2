import React from "react";
import "./SearchProduct.css";

const Searchproduct = ({ products }) => {
  return (
    <div>
      {products && (
        <div>
          {console.log(products[0])}
          <h1>{products[0].generic_name}</h1>
          <p>barcode {products[0].code}</p>
          <p>url of the product page on Open Food Facts. {products[0].url}</p>
          <p>
            How to cook the food: microwave, oven, which temperature…{" "}
            {products[0].preparation}
          </p>
          <p>
            If the product is complete or if there is any information missing.{" "}
            {products[0].states}
          </p>

          <h2>Résumé</h2>
          <p></p>
          <p>
            Nom générique donné par les autorités Européennes :{" "}
            {products[0].generic_name}
          </p>
          <p>Nom du produit : {products[0]._name}</p>
          <p>Marque : {products[0].brands}</p>
          <p>poids : {products[0].quantity}</p>
          <p>Photos produit</p>
          <p>
            <img src={products[0].image_front_small_url} alt={""} />
          </p>
          {/* <p><img src={products[0].image_url} alt={''} /></p>
                    <p><img src={products[0].image_small_url} alt={''} /></p> */}

          <p>
            Végétalien, Végétarien, sans graisse, Casher... :{" "}
            {products[0].labels}
          </p>
          <p>Huile de palme</p>
          <p>{products[0].ingredients_from_palm_oil_n}</p>
          <p>{products[0].ingredients_from_palm_oil}</p>

          <p>
            {products[0].ingredients_from_palm_oil_tags.map((add) => (
              <p key={add._id}> {add.split(":")[1]} </p>
            ))}
          </p>

          <p>{products[0].ingredients_that_may_be_from_palm_oil_n}</p>
          <p>{products[0].ingredients_that_may_be_from_palm_oil}</p>

          <p>
            {products[0].ingredients_that_may_be_from_palm_oil_tags.map(
              (add) => (
                <p key={add._id}> {add.split(":")[1]} </p>
              )
            )}
          </p>
          <p>Nutri-score : {products[0].nutrition_grade_fr}</p>
                <img src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + products[0].nutrition_grade_fr + ".svg"} alt={''} />
          <div id="score"></div>

          <p>Classification Nova (transformation des aliments) : {products[0].nova_group}</p>
                <img src={"https://fr.openfoodfacts.org/images/misc/nova-group-" + products[0].nova_group + ".svg"} alt={''} />
          <p>Eco Score : {products[0].ecoscore_grade}</p>
                <img src={"https://fr.openfoodfacts.org/images/icons/ecoscore-" + products[0].ecoscore_grade + ".svg"} alt={''} />
          
          <p>repères nutritionnels pour 100 g ???</p>

          <p>Additifs </p>
          <p>{products[0].additives_n}</p>
          <p>{products[0].additives}</p>

          <p>
            {products[0].additives_original_tags.map((add) => (
              <p key={add._id}> {add.split(":")[1]} </p>
            ))}
          </p>

          <p>
            {products[0].additives_tags.map((add) => (
              <p key={add._id}> {add.split(":")[1]} </p>
            ))}
          </p>

          <p>Catégories {products[0].categories}</p>
          <p>code emballeur {products[0].emb_codes}</p>

          <h2>Ingrédients</h2>
          {/* <p>Photos liste ingrédients</p>
                    <p><img src={products[0].image_ingredients_url} alt={''} /></p>
                    <p><img src={products[0].image_ingredients_small_url} alt={''} /></p>
                    <p><img src={products[0].image_ingredients_thumb_url} alt={''} /></p> */}
          <h3>liste des ingrédients texte {products[0].ingredients_text}</h3>
          <p>Traces {products[0].traces}</p>

          <p>Allergènes {products[0].allergens}</p>

          <p>
            {products[0].allergens_tags.map((add) => (
              <p key={add._id}> {add.split(":")[1]} </p>
            ))}
          </p>

          <h2>Nutrition</h2>
          <p>Photos valeurs nutritionnelles </p>
          <p>
            <img src={products[0].image_nutrition_url} alt={""} />
          </p>
          {/* <p><img src={products[0].image_nutrition_small_url} alt={''} /></p>
                    <p><img src={products[0].image_nutrition_thumb_url} alt={''} /></p> */}
          <h2>Environnement</h2>
          <p></p>
          <h2>Synthèse</h2>
        </div>
      )}
    </div>
  );
};

export default Searchproduct; //!retirer sasasa

//3274080005003
