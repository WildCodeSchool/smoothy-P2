import React, { useState,useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import downchevron from "../../Assets/chevron-up-solid.svg";
import Upchevron from "../../Assets/chevron-down-solid.svg";
import "./SearchProduct.css";
import { Link } from "react-router-dom";
import replace from "../Tools/replace";
import level from "../Tools/level";
import Cards from "../Tools/Cards";
import ComponentAlergenes from "../Tools/ComponentAlergenes";

const dashRemover = (str) => {
  return str.replaceAll(("-", "_"), " ");
};

let arrayFilter =  []

const Searchproduct = ({ products }) => {
  const history = useHistory();
  const [useswitch, setSwitch] = useState("Composition");
  const [isActive, setActive] = useState(true);
  const handleChange = () => {
    setActive(!isActive);
    useswitch==="Composition"? setSwitch("environement") : setSwitch("Composition");
  };
  
  const [code, setCode] = useState(null)
  const [equivProducts, setEquivProducts] = useState(null);
  const [filterNutrigrade, setFilterNutrigrade] = useState(null);
  const [visible, setVisible] = useState(false);
  const [useText, setUseText] = useState("clickme");
  const [isText, setText] = useState(true)
 
  useEffect(()=>{
    products && setCode(products[0]._id.slice(0,5)+'xxxxxxxx')
  }, [products])
  
  useEffect(() => {
    const url = `https://fr.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=codes_tags&tag_contains_0=contains&tag_0=${code}&fields=categories,_id,code,product_name_fr,brands_tags,image_front_small_url,image_url,quantity,nutrition_grade_fr,nutrition_grade_fr,nutrition_grades,labels_old,brands,generic_name,_keywords,nutrition_grade_fr,nutrition_grades_tags,brands_tags,&page_size=1&json=true`;
    const getProducts = () => {axios.get(url).then(({ data }) => setEquivProducts(data.products))}
    getProducts()
  }, [code]);

  useEffect(() => {
    equivProducts && setFilterNutrigrade(equivProducts.filter(e => ((e.nutrition_grades=="a")||(e.nutrition_grades=="b")||(e.nutrition_grades=="c")||(e.nutrition_grades=="d")||(e.nutrition_grades=="e"))).filter(e => (e.brands_tags)).filter(e => (e._id != products[0]._id)))
  },[equivProducts,products])

  useEffect(() => {
    return(arrayFilter = [])
  }, [arrayFilter])


const change = () => {
  setText(!isText)
  useText==="clickme"? setUseText("Reduire les allergènes") : setUseText("Afficher les allergènes")
}

return (
    <div>
      {products && (
        <div className="container-Product">
          <div className="header-Product">
            <div className="img-Left-Product">
            {products[0].image_url  
              ?<img
                className="img-Left-Prod"
                src={products[0].image_url}
                alt={"img-left-prod"}
              />
              :<img className="images" src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Pas_d%27image_disponible.svg" alt="no-image"/>}
            </div>
            <div className="header-Right-Product">
              <h1 className="generic-Name-Product">{products[0].product_name_fr.length>=81?products[0].product_name_fr.substring(0,81):products[0].product_name_fr}</h1>
              <div className="labellls">
                <div className="labels-1">
                  <img className='nutri-score' src={"https://fr.openfoodfacts.org/images/misc/nutriscore-" + products[0].nutrition_grade_fr + ".svg"} alt={'nutri-score'} />
                  <img className='eco-score' src={"https://fr.openfoodfacts.org/images/icons/ecoscore-" + products[0].ecoscore_grade + ".svg"} alt={'eco-score'} />
                </div >
                <div className="labels-2">
                  <img className='nova-group' src={"https://fr.openfoodfacts.org/images/misc/nova-group-" + products[0].nova_group + ".svg"} alt={'nova-group'} />
                </div>
                <div className="bio">
                  {products[0].labels && products[0].labels.replace(/ /g, "").indexOf('ABAgricultureBiologique')!== -1
                    ?<img className='nova-group1'src="https://static.openfoodfacts.org/images/lang/en/labels/ab-agriculture-biologique.74x90.svg" alt="nova-group1" />
                    :<span></span>
                  }
                  {products[0].labels && products[0].labels.replace(/ /g, "").indexOf('EUOrganic')!== -1
                    ?<img className='nova-group2'src="https://world.openfoodfacts.org/images/lang/en/labels/eu-organic.135x90.svg" alt="nova-group2" />
                    :<span></span>
                  }
                  {products[0].labels && products[0].labels.replace(/ /g, "").indexOf('FairtradeInternational')!== -1
                    ?<img className='nova-group3'src="https://world.openfoodfacts.org/images/lang/en/labels/fairtrade-international.77x90.svg" alt="nova-group3" />
                    :<span></span>             
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="midll-Product">
            <div className="switch-Midllproduct">
              <div className="composition-Product">
                <button 
                  className={isActive ? "environement-Switch-Product2" : "environement-Switch-Product" }
                  onClick={handleChange}
                >
                  Composition |{" "}
                </button>
                <button
                className={!isActive ? "environement-Switch-Product2" : "environement-Switch-Product" }
                onClick={handleChange}
                >
                  {" "}
                  Santé
                </button>
              </div> 
              <div className="composition-environement-Product show-Environement-Product ">
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
                )}
              </div>
            </div>
            <div className="alergen-Product">
              <div className='alergene-Component-Product'>
                <div className='button-content'>
                  <div className="allergenTitle">
                    <p>Allergènes</p>
                  </div>
                  <button onClick={()=> {setVisible(prev => !prev) ; change();}} > {!isText 
                  ? <div className="butonshow">
                      <img src={downchevron} alt="chevron-down" />
                    </div> : <div className="butonshow">
                      <img src={Upchevron} alt="chevron-up" /> 
                    </div> } </button>
                </div>
                <div>
                  {visible && <ComponentAlergenes products={products} arrayFilter={arrayFilter}/>}
                </div>
              </div>
            </div>
          </div>
          <div className="le-grid">
            <Cards filterNutrigrade={filterNutrigrade} num={0} />
            <Cards filterNutrigrade={filterNutrigrade} num={1} />
            <Cards filterNutrigrade={filterNutrigrade} num={2} />
            <Cards filterNutrigrade={filterNutrigrade} num={3} />
            <Cards filterNutrigrade={filterNutrigrade} num={4} />
            <Cards filterNutrigrade={filterNutrigrade} num={5} />
          </div>
          <Link to={`/productListEquiv/${code}`} className="goproductlist">Voir tout</Link> 
        </div>
      )}
    </div>
  );
};

export default Searchproduct;
