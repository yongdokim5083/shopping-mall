import React from 'react';
import { Product } from '../../types';

const ProductDetail = ({
  item: {
    category,
    title,
    image,
    description,
    price,
    rating: { rate },
  },
}: {
  item: Product;
}) => {
  return (
    <div className='product-detail'>
      <p className='product-detail_category'>{category}</p>
      <p className='product-detail_title'>{title}</p>
      <img className='product-detail_image' src={image} />
      <p className='product-detail_description'>{description}</p>
      <span className='product-detail_price'>${price}</span>
      <span className='product-detail_rating'>{rate}</span>
    </div>
  );
};

export default ProductDetail;
