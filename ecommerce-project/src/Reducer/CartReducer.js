const CartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            const { amount, color, id, singleProduct } = action.payload;
            const cartData = {
                id: id + color,
                name: singleProduct.name,
                color,
                amount,
                Image: singleProduct.image[0].url,
                price: singleProduct.price,
                maxStock: singleProduct.stock
            }

            return {
                ...state,
                cart: [...state.cart, cartData]
            }

        case "REMOVE_ITEM":
            const updateCart = state.cart.filter((curEl) => {
                return curEl.id !== action.payload
            })

            return {
                ...state,
                cart: updateCart
            }

        case "DECR": {
            const updatedProduct = state.cart.map((curEl) => {
                if (curEl.id === action.payload) {
                    return {
                        ...curEl,
                        amount: curEl.amount > 1 ? curEl.amount - 1 : 1
                    }
                } else {
                    return curEl;
                }
            })
            return {
                ...state,
                cart: updatedProduct
            }
        }

        case "INCR":
            const updatedProduct = state.cart.map((curEl) => {
                if (curEl.id === action.payload) {
                    return {
                        ...curEl,
                        amount: curEl.amount < curEl.maxStock ? curEl.amount + 1 : curEl.maxStock
                    }
                } else {
                    return curEl;
                }
            })
            return {
                ...state,
                cart: updatedProduct
            }

        case "TOTAL_PRICE_CALCULATION":
            const updateTotalAmount = state.cart.reduce((accumulator, curEl) => {
                const { price, amount } = curEl;
                accumulator = accumulator + (price * amount);
                return accumulator
            }, 0)
            return {
                ...state,
                TotalAmount: updateTotalAmount
            }
        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            }

        default:
            return {
                ...state
            }
    }
}

export default CartReducer;