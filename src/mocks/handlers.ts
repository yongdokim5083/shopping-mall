import { graphql } from 'msw';
import { v4 as uuid } from 'uuid';
import GET_CART, { Cart } from '../graphql/cart';
import GET_PRODUCTS, { GET_PRODUCT, Product } from '../graphql/products';

const mockProducts = (() =>
  Array.from({ length: 20 }).map((_, i) => ({
    id: uuid(),
    imageUrl: `http://placeimg.com/200/150/${i + 1}`,
    price: 50000,
    title: `임시상품${i + 1}`,
    description: `임시상품상세내용${i + 1}`,
    createdAt: new Date(1650606275307 + i * 1000 * 60 * 60 * 24).toString(),
  })))();

const cartData: { [key: string]: Cart } = (() => ({}))();

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mockProducts,
      })
    );
  }),
  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    const found: Product | undefined | null = mockProducts.find(
      (item) => item.id === req.variables.id
    );
    if (found) return res(ctx.data(found));
    return res();
  }),
  graphql.query(GET_CART, (req, res, ctx) => {
    return res(ctx.data({}));
  }),
  //   graphql.mutation(ADD_CART, (req, res, ctx) => {
  //     const id = req.variables.id;
  //     if (cartData[id]) {
  //       cartData[id] = {
  //         ...cartData[id],
  //         amount: cartData[id].amount + 1,
  //       };
  //     } else {
  //       const found: Product | undefined | null = mockProducts.find(
  //         (item) => item.id === req.variables.id
  //       );
  //       if (found) {
  //         cartData[id] = {
  //           ...found,
  //           amount: cartData[id].amount + 1,
  //         };
  //       }
  //     }
  //     return res(ctx.data({}));
  //   }),
];
