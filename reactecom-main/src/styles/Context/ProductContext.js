//Create a context'
//Provider
///Consumer=>usecontext Hook

import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../../Reducer/ProductReducer";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
    isSingleLoading : false,
    singleProduct:{},
    isSingleError: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  let API = "https://api.pujakaitem.com/api/products";

  // ctrl + ALT + l(For logging our data)

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      let res = await axios.get(url);
      let products = res.data;
      dispatch({ type: "SET_PRODUCT_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      let res = await axios.get(url);
      let singleProduct = res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT_API_DATA", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state , getSingleProduct}}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
