
import React from 'react'
import CartProvider from "./src/components/Context/CartProvider";
// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
    <CartProvider>{element}</CartProvider>
)
