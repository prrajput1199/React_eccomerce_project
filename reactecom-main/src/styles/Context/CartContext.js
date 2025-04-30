import React, { createContext, useContext, useReducer } from 'react';
import reducer from "../../Reducer/CartReducer"

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const initialState = {
        cart: [],

    }

    const AddToCart = (id, color, singleProduct) => {
        return dispatch({ type: "ADD_TO_CART", payload: { id, color, singleProduct } })
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    return <CartContext.Provider value={{ ...state, AddToCart }}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartContextProvider, useCartContext }