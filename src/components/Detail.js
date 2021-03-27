import React from 'react'
import PropTypes from 'prop-types'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}   from "react-router-dom"
import  { useParams } from "react-router";
import {getProductDetails } from '../services/products'

   
function Detail(){
    const [productDetails, setproductDetails] = React.useState([]);
    const getProductD = async () => {
        const productD = await getProductDetails(id);
        console.log(await productD)
        setproductDetails(productD)
      }
    
    const { id } = useParams();
    React.useEffect(() => {
        getProductD()
      }, [])
    return(
      <div className= "product-container1" >
        <ul>
            <li>
                <h4><p>{productDetails.title}</p></h4>
                <img id="zoom" src={productDetails.thumbnail}/>
                <p><h4>Price: $ {productDetails.price}</h4></p>
                <h4><p>Category: {productDetails.category_id}</p></h4>
                <h4><p>Condition: {productDetails.condition}</p></h4>
                <h4><p>Type: {productDetails.listing_type_id}</p></h4>
                <h4><p>Warranty: {productDetails.warranty}</p></h4>

                <button className="search-btn" >Buy Now</button>
            </li>   
        </ul>
        
      </div>
      
    );
    
}
 

export default Detail