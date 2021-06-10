import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: f=>f,
    removeItem: f=>f,
    clearCart: f => f
});

export default CartContext;