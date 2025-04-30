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

        default:
            return {
                ...state
            }
    }
}

export default CartReducer;