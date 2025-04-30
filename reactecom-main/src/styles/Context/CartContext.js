import React, { createContext, useContext, useReducer } from 'react';
import reducer from "../../Reducer/CartReducer"

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const initialState = {
        cart: [],
        Totalitems: "",
        TotalAmount: "",
        sheepingFee: 50000
    }

    const AddToCart = (id, color, singleProduct, amount) => {
        return dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, singleProduct } })
    }

    const removeItem = (ID) => {
        return dispatch({ type: "REMOVE_ITEM", payload: ID })
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    return <CartContext.Provider value={{ ...state, AddToCart, removeItem }}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartContextProvider, useCartContext }