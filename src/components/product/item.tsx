import React from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ADD_CART } from '../../graphql/cart';
import { Product } from '../../graphql/products';
import { graphqlFetcher, QueryKeys } from '../../queryClient';
import { cartItemSelector } from '../../recoil/cart';

const ProductItem = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createdAt,
}: Product) => {
  // const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));
  // const addCart = () => setCartAmount((prev) => (prev || 0) + 1);

  const { mutate: addCart } = useMutation((id: string) =>
    graphqlFetcher(ADD_CART, { id })
  );

  return (
    <li className='product-item'>
      <Link to={`/products/${id}`}>
        <p className='product-item_title'>{title}</p>
        <img className='product-item_image' src={imageUrl} />
        <span className='product-item_price'>${price}</span>
      </Link>
      <button className='product_item_addCart' onClick={() => addCart(id)}>
        담기
      </button>
    </li>
  );
};

export default ProductItem;
