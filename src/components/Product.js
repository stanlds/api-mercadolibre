import React from 'react'
import PropTypes from 'prop-types'

const Product = ({
  id,
  imageUrl,
  name,
  price
}) => (
  <div className="single-meme">
    <ul>
      <li>
        <h3>{name}</h3>
        <h3><p>price: $ {price}</p></h3>
        <a href = "www.google.com"><img src={imageUrl} alt={name} /></a>
      </li>
    </ul>
  </div>
)

Product.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  
}

export default Product
