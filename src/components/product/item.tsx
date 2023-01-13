import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';

const ProductItem = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: Product) => {
  return (
    <li className='product-item'>
      <Link to={`/products/${id}`}>
        <p className='product-item_category'>{category}</p>
        <p className='product-item_title'>{title}</p>
        {/* <p className='product-item_description'>{description}</p> */}
        <img className='product-item_image' src={image} />
        <span className='product-item_price'>${price}</span>
        {/* <span className='product-item_count'>{rating.count}</span>
      <span className='product-item_rate'>{rating.rate}</span> */}
      </Link>
    </li>
  );
};

export default ProductItem;
