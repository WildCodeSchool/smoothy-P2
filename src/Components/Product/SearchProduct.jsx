import React from "react";

const Searchproduct = ({products}) => {
    
    return (

      <div>
      {products && (
            

            
            
        <div>
            {console.log(products[0])}
            <h1>{products.generic_name}</h1>
                <p>barcode {products.code}</p>
                <p>url of the product page on Open Food Facts.	{products.url}</p>
                <p>How to cook the food: microwave, oven, which temperature…	{products.preparation}</p>
                <p>If the product is complete or if there is any information missing.	{products.states}</p>                
      
      
            <h2>Résumé</h2>
                <p></p>
                <p>Nom générique donné par les autorités Européennes : {products.generic_name}</p>
                <p>Nom du produit : {products.products_name}</p>
                <p>Marque : {products.brands}</p>
                <p>poids : {products.quantity}</p>
                <p>Photos produit</p>
                    <p><img src={products.image_front_small_url} alt={''} /></p>
                    <p><img src={products.image_url} alt={''} /></p>
                    <p><img src={products.image_small_url} alt={''} /></p>
      
                <p>Végétalien, Végétarien, sans graisse, Casher... : {products.labels}</p>
                <p>Huile de palme</p>
                    <p>{products.ingredients_from_palm_oil_n}</p>
                    <p>{products.ingredients_from_palm_oil}</p>                         
                    
                    <p>{products.ingredients_from_palm_oil_tags.map((add) => (
                        <p key={add._id}> {add.split(":")[1]} </p>
                    ))}
                    </p> 
      
                    <p>{products.ingredients_that_may_be_from_palm_oil_n}</p>
                    <p>{products.ingredients_that_may_be_from_palm_oil}</p>                       
                    
                    <p>{products.ingredients_that_may_be_from_palm_oil_tags.map((add) => (
                        <p key={add._id}> {add.split(":")[1]} </p>
                    ))}
                    </p> 
      
                <p>Nutri-score : {products.nutrition_grade_fr} 
                {products.nutrition_grade_fr}</p>
                <div id="score"></div>
      
                <p>Classification Nova (transformation des aliments) : {products.nova_group}</p>
      
                <p>Eco Score : {products.ecoscore_grade}</p>
      
                <p>repères nutritionnels pour 100 g	???</p>
      
                <p>Additifs	</p>
                    <p>{products.additives_n}</p>
                    <p>{products.additives}</p>  
                    
                    <p>{products.additives_original_tags.map((add) => (
                        <p key={add._id}> {add.split(":")[1]} </p>
                    ))}
                    </p> 
                    
                    <p>{products.additives_tags.map((add) => (
                        <p key={add._id}> {add.split(":")[1]} </p>
                    ))}
                    </p>
                                     
                
                <p>Catégories	{products.categories}</p>
                <p>code emballeur	{products.emb_codes}</p>
      
            <h2>Ingrédients</h2>
                <p>Photos liste ingrédients</p>
                    <p><img src={products.image_ingredients_url} alt={''} /></p>
                    <p><img src={products.image_ingredients_small_url} alt={''} /></p>
                    <p><img src={products.image_ingredients_thumb_url} alt={''} /></p>
                <p>liste des ingrédients texte	{products.ingredients_text}</p>
                <p>Traces {products.traces}</p>
      
                <p>Allergènes	{products.allergens}</p>
                    
                    <p>{products.allergens_tags.map((add) => (
                        <p key={add._id}> {add.split(":")[1]} </p>
                    ))}
                    </p>
      
            <h2>Nutrition</h2>
                <p>Photos valeurs nutritionnelles </p>
                    <p><img src={products.image_nutrition_url} alt={''} /></p>
                    <p><img src={products.image_nutrition_small_url} alt={''} /></p>
                    <p><img src={products.image_nutrition_thumb_url} alt={''} /></p>
            <h2>Environnement</h2>
                <p></p>
            <h2>Synthèse</h2>
      
        </div>
        
      
      )}
        </div>)}

      
      
   

export default Searchproduct

//3274080005003

