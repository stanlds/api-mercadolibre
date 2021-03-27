import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
        <h3><p> $ {price}</p></h3>
        <Link to={`/detailProduct/${id}`}>
          <img src={imageUrl} alt={name}/>
        </Link>
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
