import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: f=>f,
    removeItem: f=>f
});

export default CartContext;