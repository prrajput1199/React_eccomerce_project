import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  grid_view: true,
  selected_value : 1
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { products } = useProductContext();

  console.log("FilterContextPage =>", products);

  const setGridView = () => {
    return dispatch({ type: "select_grid_view" });
  };

  const setListView = () => {
    return dispatch({ type: "select_list_view" });
  };

  const Sorting = () => {
    return dispatch({ type: "SORTING_PRODUCTS" });
  };

  useEffect(() => {
    dispatch({ type: "FILTERED_PRODUCT_DATA", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView ,Sorting}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
