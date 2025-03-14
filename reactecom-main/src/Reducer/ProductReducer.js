const ProductsReducer=(state,action)=>{
    // console.log("action inside ProductsReducer => ", action);
    // console.log("action inside ProductsReducer => ", state);
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
         
        case "SET_SINGLE_LOADING":
            return {
               ...state,
               isSingleLoading : true
            }
        
               
        case "SET_SINGLE_PRODUCT_API_DATA":      
            return {
                ...state,
                isSingleLoading : false,
                singleProduct: action.payload
            }
        
        
        case "SET_ERROR":
            return {
                ...state,
                isSingleLoading : false,
                isSingleError : true
            }

        default:
            return state;
    }
  }
  
export default ProductsReducer;