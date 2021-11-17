import React from "react";

const Searchproduct = ({products}) => {

// exemples gen code
//     marche pas 737628064502 : Rice Noodles
//     marche pas 3760082197216 : Biscote artisanale
//     3587220002252 : La Gâche Tranchée au Beurre Frais et à la Crème Fraîche
//     3017620425035 : Pâte à tartiner aux noisettes
//     8032862870028 : Pâte à tartiner Gonuts sans sucre
//     3019081238643 : Sardines à l'huile d'olive
//     3242274001056 : Salade & Compagnie - Montmartre - Sodebo - 320 g
//     3274080005003 : Eau de source - Cristaline - 1,5 l

//    Test Bio fr AB : 3222477478497 Crème de marrons - Casino Bio
                // : 3452200002600 Confiturelle abricots bio 100% fruits allégée en sucres - 290 g
//    Test EU organic : 3036811364403 Bio Velouté de 10 Légumes - Liebig - 2 * 35 cl
//    Test Max Havelar : 3700214617045 chocolat noir au gingembre confit
//    Test Fair trade : 3700214617045 chocolat noir au gingembre confit
//    Test pas d'image/pas de nutriscore dans liste : biscote

// ToDo
//     fiche produit à brancher à l'architecture : 
//     ✅ barres de recherche (accueil et header)
//     ✅ choix parmi une sélection
//     ✅ code barre

//     ✅ affichage nutriscore/Nova/Ecoscore
//     ✅ affichage labels bio
//     (Fonction affichage tableaux)

//     Liens vers 404 en cas de produit non répertorié
//      - depuis le scann
//      - depuis une recherche de code barre

const Searchproduct = ({products}) => {
    return (

      <div>
      {products && (
            
        <div>
            {console.log(products[0])}
            <h1>{products[0].generic_name}</h1>
                <p>barcode : {products[0].code}</p>
                <p>url du produit sur Open Food Facts :	{products[0].url}</p>
                {/* <p>If the product is complete or if there is any information missing.	{products[0].states}</p>                 */}
      
      
            <h2>Résumé</h2>
                <p></p>
                <p>Nom générique donné par les autorités Européennes : {products[0].generic_name}</p>
                <p>Nom du produit : {products[0]._name}</p>
                <p>Marque : {products[0].brands}</p>
                <p>poids : {products[0].quantity}</p>
                <p>Photos produit</p>
                    <p><img src={products[0].image_front_small_url} alt={''} /></p>
                    <p><img src={products[0].image_url} alt={''} /></p>
                    <p><img src={products[0].image_small_url} alt={''} /></p>
      
                <p>Végétalien, Végétarien, sans graisse, Casher... : {products[0].labels}</p>
                <p>Huile de palme</p>
                    <p>{products[0].ingredients_from_palm_oil_n}</p>
                    <p>{products[0].ingredients_from_palm_oil}</p>                         
                    
                    <p>{products[0].ingredients_from_palm_oil_tags.map((add) => (
                        <p key={add._id}> {add.split(":")[1]} </p>
                    ))}
                    </p> 
      
                    <p>{products[0].ingredients_that_may_be_from_palm_oil_n}</p>
                    <p>{products[0].ingredients_that_may_be_from_palm_oil}</p>                       
                    
                    <p>{products[0].ingredients_that_may_be_from_palm_oil_tags.map((add) => (
                        <p key={add._id}> {add.split(":")[1]} </p>
                    ))}
                    </p> 
      
                <p>Nutri-score : {products[0].nutrition_grade_fr}</p>
                <img src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + products[0].nutrition_grade_fr + ".svg"} alt={''} />
      
                <p>Classification Nova (transformation des aliments) : {products[0].nova_group}</p>
                <img src={"https://fr.openfoodfacts.org/images/misc/nova-group-" + products[0].nova_group + ".svg"} alt={''} />
      
                <p>Eco Score : {products[0].ecoscore_grade}</p>
                <img src={"https://fr.openfoodfacts.org/images/icons/ecoscore-" + products[0].ecoscore_grade + ".svg"} alt={''} />
      
                <p>repères nutritionnels pour 100 g	???</p>
      
                <p>Additifs	</p>
                    <p>{products[0].additives_n}</p>

                    <p>additives_original_tags.map</p>
                    <p>{products[0].additives_original_tags.map((add) => (
                        <p key={add._id}> {add.split(":")[1]} </p>
                    ))}
                    </p> 
                    
                    <p>additives_tags.map</p>
                    <p>{products[0].additives_tags.map((add) => (
                        <p key={add._id}> {add.split(":")[1]} </p>
                    ))}
                    </p>
                                     
                
                <p>Catégories	{products[0].categories}</p>
                <p>code emballeur	{products[0].emb_codes}</p>
      
            <h2>Ingrédients</h2>
                <p>Photos liste ingrédients</p>
                    <p><img src={products[0].image_ingredients_url} alt={''} /></p>
                    <p><img src={products[0].image_ingredients_small_url} alt={''} /></p>
                    <p><img src={products[0].image_ingredients_thumb_url} alt={''} /></p>
                <p>liste des ingrédients texte	{products[0].ingredients_text}</p>
                <p>Traces {products[0].traces}</p>
      
                <p>Allergènes	{products[0].allergens}</p>
                    
                    <p>{products[0].allergens_tags.map((add) => (
                        <p key={add._id}> {add.split(":")[1]} </p>
                    ))}
                    </p>
      
            <h2>Nutrition</h2>
                <p>Photos valeurs nutritionnelles </p>
                    <p><img src={products[0].image_nutrition_url} alt={''} /></p>
                    <p><img src={products[0].image_nutrition_small_url} alt={''} /></p>
                    <p><img src={products[0].image_nutrition_thumb_url} alt={''} /></p>
            <h2>Environnement</h2>
                <p></p>
            <h2>Synthèse</h2>
{/*
    <h2>Labels</h2>
    {/* <p>Bio France AB{products[0].ab-agriculture-biologique}</p>
    <p>Eu Organic{products[0].eu-organic}</p>
    <p>Fair trade {product.en:fair-trade}</p>
    <p>Commerce équitable{products[0].max-havelaar}</p>

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
      
<p>Végétalien, Végétarien, sans graisse, Casher... : {products[0].labels}</p>
*/}

      
</div>
              )}
    </div>)}
