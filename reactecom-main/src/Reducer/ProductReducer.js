const ProductsReducer=(state,action)=>{
    console.log("action inside ProductsReducer => ", action);
    console.log("action inside ProductsReducer => ", state);
    switch (action.type) {
        case "SET_LOADING":
            return {
               ...state,
               isLoading : true
            }

        case "SET_ERROR":
            return {
                ...state,
                isLoading : false,
                isError : true
            }
        
        case "SET_PRODUCT_API_DATA":
            const featuredData = action.payload.filter((curEl)=>{
               return curEl.featured === true;
            });
            
            return {
                ...state,
                isLoading : false,
                featuredProducts:featuredData,
                products: action.payload
            }
    
        default:
            return state;
    }
  }
  
export default ProductsReducer;