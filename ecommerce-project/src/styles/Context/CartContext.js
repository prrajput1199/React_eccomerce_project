import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from "../../Reducer/CartReducer"

const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const getLocalStorageData = () => {

        const LocalCartData = localStorage.getItem("MyCart");
        if (LocalCartData === null) {
            return []
        }
        else {
            return JSON.parse(LocalCartData)
        }
    }
    const initialState = {
        cart: getLocalStorageData(),
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

    const ClearCart = () => {
        return dispatch({ type: "CLEAR_CART" })
    }

    const setINCR = (id) => {
        return dispatch({ type: "INCR", payload: id })
    }


    const setDECR = (id) => {
        return dispatch({ type: "DECR", payload: id })
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type:"TOTAL_PRICE_CALCULATION"})
        localStorage.setItem("MyCart", JSON.stringify(state.cart))
    }, [state.cart])

    return <CartContext.Provider value={{ ...state, AddToCart, removeItem, ClearCart, setINCR, setDECR }}>{children}</CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartContextProvider, useCartContext }