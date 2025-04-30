const CartReducer=(state,action)=>{
    
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Add to cart =>",action.payload)
          return {
            ...state
          }
    
        default:
            return {
                ...state
              }    
    }
}

export default CartReducer;