import React from "react";

const FilterReducer = (state, action) => {
  switch (action.type) {
    case "FILTERED_PRODUCT_DATA":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };

    case "select_view":
      return {
        ...state,
        grid_view: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default FilterReducer;
