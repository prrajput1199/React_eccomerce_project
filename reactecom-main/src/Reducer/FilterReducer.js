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

    case "SORTING_PRODUCTS":
      const userOptions = document.querySelector('#sort');
      const sortValue = userOptions.options[userOptions.selectedIndex].value
      return {
        ...state,
        selected_value : sortValue
        
      };

    default:
      return {
        ...state,
      };
  }
};

export default FilterReducer;
