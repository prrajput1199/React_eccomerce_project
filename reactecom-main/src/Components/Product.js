import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../Helper/FormatPrice';

const Product = ({curEl}) => {
    const {id,name,image,category,price} = curEl;
    
  return (
    <>
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
            <img src={image} alt={name}/>
            <figcaption className='caption'>{category}</figcaption>
        </figure>
        <div className="card-data">
            <div className="card-data-flex">
                <h3>{name}</h3>
                <p className='card-data--price'>
                    <FormatPrice price={price}/>
                </p>
            </div>
        </div>
      </div>
    </NavLink>
    </>
  )
}

export default Product
