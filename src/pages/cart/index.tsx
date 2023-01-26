import React from 'react';
import { useQuery } from 'react-query';
import CartList from '../../components/cart';
import { CartType, GET_CART } from '../../graphql/cart';
import { graphqlFetcher, QueryKeys } from '../../queryClient';

const Cart = () => {
  const { data } = useQuery(QueryKeys.CART, () => graphqlFetcher(GET_CART), {
    staleTime: 0, // 1분, default >> 0
    cacheTime: 0, // 5분, default >> 5분
  });
  const cartItems = Object.values(data || {}) as CartType[];

  if (!cartItems.length) return <div>장바구니가 비었습니다!</div>;
  return <CartList items={cartItems} />;
};

export default Cart;
