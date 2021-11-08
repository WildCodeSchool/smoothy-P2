// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ProductSheet = () => {

//     const [termCode, setTermCode] = useState("737628064502");
//     const [termF, setTermF] = useState("");
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         const url = `https://world.openfoodfacts.org/api/v0/product/${termCode}.json`;
    
//         axios(url)
//         .then(({ data }) => {setProduct(data.product)})
//       }, [termF]);

//     const handleSubmit = (e) => {
//     e.preventDefault();

//     setTermF(termCode);
//     };

//     return (
//         <div className="container">
//             {" "}
//             <h1>Open Food Facts GenCode</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     className="form-control"
//                     type="search"
//                     placeholder="Entrer code Barre"
//                     aria-label="Search"
//                     value={termCode}
//                     onChange={(e) => setTermCode(e.target.value)}
//                 />
//                 <button>Search</button>
//             </form>

//             {/* gen code
//                 737628064502 : Rice Noodles
//                 3017620425035 : Pâte à tartiner aux noisettes
//                 3019081238643 : Sardines à l'huile d'olive
//                 3587220002252 : La Gâche Tranchée au Beurre Frais et à la Crème Fraîche
//                 Manque : 
//                     How to cook the food: microwave, oven, which temperature…
//                     code emballeur
//                     Huile de palme?
//                     url of the product page on Open Food Facts
//                     https://fr.openfoodfacts.org/produit/0737628064502/thai-peanut-noodle-kit-includes-stir-fry-rice-noodles-thai-peanut-seasoning-thai-kitchen
                
//                 Fonctions à faire :
//                 Pour les items sous forme de tableaux
//                 Pour les images des labels
//                 */}

//             {console.log(product)}

            
                            

            
//             {/* falsy and truthy values */}
        {product && (
            
            <div>
                <h1>{product.generic_name}</h1>
                    <p>barcode {product.code}</p>
                    <p>url of the product page on Open Food Facts.	{product.url}</p>
                    <p>How to cook the food: microwave, oven, which temperature…	{product.preparation}</p>
                    <p>If the product is complete or if there is any information missing.	{product.states}</p>                


                <h2>Résumé</h2>
                    <p></p>
                    <p>Nom générique donné par les autorités Européennes : {product.generic_name}</p>
                    <p>Nom du produit : {product.product_name}</p>
                    <p>Marque : {product.brands}</p>
                    <p>poids : {product.quantity}</p>
                    <p>Photos produit</p>
                        <p><img src={product.image_front_small_url} alt={''} /></p>
                        <p><img src={product.image_url} alt={''} /></p>
                        <p><img src={product.image_small_url} alt={''} /></p>

                    <p>Végétalien, Végétarien, sans graisse, Casher... : {product.labels}</p>
                    <p>Huile de palme</p>
                        <p>{product.ingredients_from_palm_oil_n}</p>
                        <p>{product.ingredients_from_palm_oil}</p>                         
                        
                        <p>{product.ingredients_from_palm_oil_tags.map((add) => (
                            <p key={add._id}> {add.split(":")[1]} </p>
                        ))}
                        </p> 

                        <p>{product.ingredients_that_may_be_from_palm_oil_n}</p>
                        <p>{product.ingredients_that_may_be_from_palm_oil}</p>                       
                        
                        <p>{product.ingredients_that_may_be_from_palm_oil_tags.map((add) => (
                            <p key={add._id}> {add.split(":")[1]} </p>
                        ))}
                        </p> 

                    <p>Nutri-score : {product.nutrition_grade_fr} 
                    {score(product.nutrition_grade_fr)}</p>
                    <div id="score"></div>

                    <p>Classification Nova (transformation des aliments) : {product.nova_group}</p>

                    <p>Eco Score : {product.ecoscore_grade}</p>

                    <p>repères nutritionnels pour 100 g	???</p>

                    <p>Additifs	</p>
                        <p>{product.additives_n}</p>
                        <p>{product.additives}</p>  
                        
                        <p>{product.additives_original_tags.map((add) => (
                            <p key={add._id}> {add.split(":")[1]} </p>
                        ))}
                        </p> 
                        
                        <p>{product.additives_tags.map((add) => (
                            <p key={add._id}> {add.split(":")[1]} </p>
                        ))}
                        </p>
                                         
                    
                    <p>Catégories	{product.categories}</p>
                    <p>code emballeur	{product.emb_codes}</p>

                <h2>Ingrédients</h2>
                    <p>Photos liste ingrédients</p>
                        <p><img src={product.image_ingredients_url} alt={''} /></p>
                        <p><img src={product.image_ingredients_small_url} alt={''} /></p>
                        <p><img src={product.image_ingredients_thumb_url} alt={''} /></p>
                    <p>liste des ingrédients texte	{product.ingredients_text}</p>
                    <p>Traces {product.traces}</p>

                    <p>Allergènes	{product.allergens}</p>
                        
                        <p>{product.allergens_tags.map((add) => (
                            <p key={add._id}> {add.split(":")[1]} </p>
                        ))}
                        </p>

                <h2>Nutrition</h2>
                    <p>Photos valeurs nutritionnelles </p>
                        <p><img src={product.image_nutrition_url} alt={''} /></p>
                        <p><img src={product.image_nutrition_small_url} alt={''} /></p>
                        <p><img src={product.image_nutrition_thumb_url} alt={''} /></p>
                <h2>Environnement</h2>
                    <p></p>
                <h2>Synthèse</h2>

            </div>

        )}
        
        </div>
    );
};
    
export default Search;
