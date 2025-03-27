import React from "react";

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "FILTERED_PRODUCT_DATA":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };

    case "select_grid_view":
      return {
        ...state,
        grid_view: true,
      };

    case "select_list_view":
      return {
        ...state,
        grid_view: false,
      };

    case "SORTING_PRODUCTS_STATE":
      const userOptions = document.querySelector("#sort");
      const sortValue = userOptions.options[userOptions.selectedIndex].value;
      console.log("SortValue =>", sortValue);
      return {
        ...state,
        sorting_value: sortValue,
      };

    case "SORTING_PRODUCTS_FUNCTIONS":
      let newFilteredData;
      let tempFilterProduct = [...action.payload];
      console.log("tempFilterProduct => ",tempFilterProduct)
      
      if (state.sorting_value === "a-z"){
        newFilteredData = tempFilterProduct.sort((a,b) => a.name.localeCompare(b.name));
      }
 
      if (state.sorting_value === "z-a"){
        newFilteredData = tempFilterProduct.sort((a,b) => b.name.localeCompare(a.name));
      }

      if (state.sorting_value === "lowest"){
        newFilteredData = tempFilterProduct.sort((a,b) => a.price - b.price);
      }
            
      if (state.sorting_value === "highest"){
        newFilteredData = tempFilterProduct.sort((a,b) => b.price - a.price);
      }

      return {
        ...state,
        filterProducts : newFilteredData
      };

    default:
      return {
        ...state,
      };
  }
};

export default FilterReducer;
