import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { products } = useProductContext();

  console.log("FilterContextPage =>", products);

  useEffect(() => {
    dispatch({ type: "FILTERED_PRODUCT_DATA", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
