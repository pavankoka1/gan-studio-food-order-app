import React from 'react'

export const Login = React.lazy(() => import('../containers/login'))
export const NotFound = React.lazy(() =>
    import('../components/NotFound/NotFound')
)
export const Products = React.lazy(() => import('../containers/products'))
export const Cart = React.lazy(() => import('../containers/cart'))
