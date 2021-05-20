import React from 'react';

const CartContext = React.createContext({
    item: [],
    totalAmount: 0,
    addItem: f=>f,
    removeItem: f=>f
});

export default CartContext;