import { gql } from 'graphql-tag';

export type Cart = {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  amount: number;
};

const GET_CART = gql`
  query GET_CART {
    id
    imageUrl
    price
    title
  }
`;

export default GET_CART;
