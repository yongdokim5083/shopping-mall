import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetcher, QueryKeys } from '../../queryClient';
import { Product } from '../../types';

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: 'GET',
      path: '/products/' + id,
    })
  );

  if (!data) return null;

  const {
    category,
    title,
    image,
    description,
    price,
    rating: { rate },
  }: Product = data;

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
