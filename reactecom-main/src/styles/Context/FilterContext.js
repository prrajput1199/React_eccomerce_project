import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filterProducts: [],
  allProducts: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
  },
};

export const FilterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { products } = useProductContext();

  const setGridView = () => {
    return dispatch({ type: "select_grid_view" });
  };

  const setListView = () => {
    return dispatch({ type: "select_list_view" });
  };

  const Sorting = (event) => {
    let sortValue = event.target.value;
    return dispatch({ type: "SORTING_PRODUCTS_STATE", payload: sortValue });
  };

  const updateFilterProduct = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    return dispatch({ type: "GET_SEARCH_VALUE", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "GET_FILTERED_VALUE"});
  }, [state.filters]);

  useEffect(() => {
    dispatch({ type: "FILTERED_PRODUCT_DATA", payload: products });
    dispatch({ type: "SORTING_PRODUCTS_FUNCTIONS" });
  }, [products,state.sorting_value]);

  // useEffect(() => {
  //   dispatch({ type: "FILTERED_PRODUCT_DATA", payload: products });
  // }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        Sorting,
        updateFilterProduct,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
