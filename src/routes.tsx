
import React from 'react';
import GlobalLayout from './pages/_layout'

const DynamicIndex = React.lazy(() => import('./pages/index'));
const DynamicCartIndex = React.lazy(() => import('./pages/cart/index'));
const DynamicGnb = React.lazy(() => import('./pages/gnb'));
const DynamicPamentIndex = React.lazy(() => import('./pages/pament/index'));
const DynamicProductsIndex = React.lazy(() => import('./pages/products/index'));
const DynamicProductsId = React.lazy(() => import('./pages/products/[id]'));


export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true},
      { path: '/cart', element: <DynamicCartIndex />, index: true},
      { path: '/gnb', element: <DynamicGnb />, },
      { path: '/pament', element: <DynamicPamentIndex />, index: true},
      { path: '/products', element: <DynamicProductsIndex />, index: true},
      { path: '/products/:id', element: <DynamicProductsId />, },
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/cart' },
  { route: '/gnb' },
  { route: '/pament' },
  { route: '/products' },
  { route: '/products/:id' },
]
